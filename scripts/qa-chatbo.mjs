import { spawn } from "node:child_process";
import { access, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const EDGE_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

const BASE_URL = process.env.CHATBO_QA_URL ?? "http://127.0.0.1:5173/";
const SCREENSHOT_ROOT = path.resolve("artifacts", "qa", "chatbo");
const TAKE_SCREENSHOTS = process.argv.includes("--screenshots");
const DEBUG = process.env.CHATBO_QA_DEBUG === "1";

function debug(label, value = "") {
  if (DEBUG) console.error(`[qa] ${label}`, value);
}

const DESKTOPS = [
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

const MOBILES = [
  { width: 390, height: 844 },
  { width: 430, height: 932 },
];

const INTERMEDIATE_DESKTOPS = [
  { width: 800, height: 900 },
  { width: 900, height: 900 },
];

const DESKTOP_PROGRESS = [0, 0.2, 0.4, 0.6, 0.8, 1];
const MOBILE_PROGRESS = [0, 0.6, 1];
const CLEAN_SCREENSHOT_ROOT = path.resolve("artifacts", "qa", "chatbo-clean");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function findBrowser() {
  for (const candidate of EDGE_CANDIDATES) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Try the next installed Chromium browser.
    }
  }
  throw new Error("Edge/Chrome not found for ChatBo QA");
}

async function waitForDevTools(profileDir) {
  const activePortFile = path.join(profileDir, "DevToolsActivePort");
  for (let attempt = 0; attempt < 120; attempt += 1) {
    try {
      const [port] = (await readFile(activePortFile, "utf8")).trim().split(/\r?\n/);
      if (port) return Number(port);
    } catch {
      // Browser startup is still in progress.
    }
    await wait(100);
  }
  throw new Error("Timed out waiting for the Chromium DevTools endpoint");
}

function connectCdp(url) {
  return new Promise((resolve, reject) => {
    debug("connecting websocket", url);
    const socket = new WebSocket(url);
    let nextId = 0;
    const pending = new Map();
    const listeners = new Map();

    socket.addEventListener("open", () => {
      debug("websocket open");
      resolve({
        send(method, params = {}) {
          const id = ++nextId;
          debug("cdp send", { id, method });
          return new Promise((commandResolve, commandReject) => {
            pending.set(id, { resolve: commandResolve, reject: commandReject });
            socket.send(JSON.stringify({ id, method, params }));
          });
        },
        event(method) {
          return new Promise((eventResolve) => {
            const queue = listeners.get(method) ?? [];
            queue.push(eventResolve);
            listeners.set(method, queue);
          });
        },
        close() {
          socket.close();
        },
      });
    });

    socket.addEventListener("error", (event) => {
      debug("websocket error", event?.message ?? "unknown");
      reject(new Error("CDP websocket connection failed"));
    });
    socket.addEventListener("close", (event) => {
      debug("websocket close", { code: event.code, reason: event.reason });
      for (const callback of pending.values()) callback.reject(new Error("CDP websocket closed"));
      pending.clear();
    });
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data));
      debug("cdp message", { id: message.id, method: message.method, pending: message.id ? pending.has(message.id) : undefined });
      if (message.id) {
        const callback = pending.get(message.id);
        if (!callback) return;
        pending.delete(message.id);
        if (message.error) callback.reject(new Error(message.error.message));
        else callback.resolve(message.result);
        return;
      }
      const queue = listeners.get(message.method);
      const listener = queue?.shift();
      if (listener) listener(message.params);
    });
  });
}

async function createPage(port, viewport, { skipIntro = true, reducedMotion = false } = {}) {
  debug("creating target", { port, viewport, skipIntro, reducedMotion });
  const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
    method: "PUT",
  });
  if (!targetResponse.ok) throw new Error(`Unable to create browser target: ${targetResponse.status}`);
  const target = await targetResponse.json();
  debug("target created", target.id);
  const cdp = await connectCdp(target.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width <= 767,
    screenWidth: viewport.width,
    screenHeight: viewport.height,
  });
  await cdp.send("Emulation.setEmulatedMedia", {
    features: [
      {
        name: "prefers-reduced-motion",
        value: reducedMotion ? "reduce" : "no-preference",
      },
    ],
  });

  if (skipIntro) {
    await cdp.send("Page.addScriptToEvaluateOnNewDocument", {
      source: `try {
        sessionStorage.setItem("tironi_intro_seen_v3", "true");
        localStorage.setItem("tironitech_cookie_consent", JSON.stringify({
          necessary: true,
          preferences: false,
          analytics: false,
          marketing: false,
          acceptedAt: "2026-08-26T00:00:00.000Z",
          version: "1.0"
        }));
      } catch {}`,
    });
  }

  const loaded = cdp.event("Page.loadEventFired");
  await cdp.send("Page.navigate", { url: BASE_URL });
  await loaded;
  await evaluate(cdp, "document.fonts?.ready ?? Promise.resolve()", true);
  await evaluate(cdp, "new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))", true);
  return cdp;
}

async function evaluate(cdp, expression, awaitPromise = false) {
  const result = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text ?? "Browser evaluation failed");
  }
  return result.result.value;
}

async function goToProgress(cdp, progress) {
  await evaluate(
    cdp,
    `(() => {
      const section = document.querySelector(".tt2-chatbo:not(.tt2-chatbo-static)");
      if (!section) throw new Error("Animated ChatBo section not found");
      const track = section.querySelector(".tt2-chatbo-track") ?? section;
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";
      const sectionTop = track.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(0, track.offsetHeight - window.innerHeight);
      window.scrollTo({ top: sectionTop + travel * ${progress}, behavior: "auto" });
      return { sectionTop, travel };
    })()`,
  );
  await evaluate(cdp, "new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))", true);
}

async function waitForChatboMedia(cdp) {
  await evaluate(
    cdp,
    `Promise.race([
      Promise.all([...document.querySelectorAll(".tt2-chatbo img")].map((img) =>
        img.decode ? img.decode().catch(() => undefined) : Promise.resolve()
      )),
      new Promise((resolve) => setTimeout(resolve, 4000))
    ])`,
    true,
  );
}

async function goToExit(cdp) {
  await evaluate(
    cdp,
    `(() => {
      const section = document.querySelector(".tt2-chatbo:not(.tt2-chatbo-static)");
      const track = section?.querySelector(".tt2-chatbo-track") ?? section;
      const exit = section?.querySelector(".tt2-chatbo-exit");
      if (!track || !exit) throw new Error("ChatBo exit area is missing");
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const target = trackTop + track.offsetHeight + exit.offsetHeight / 2 - window.innerHeight / 2;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: target, behavior: "auto" });
    })()` ,
  );
  await evaluate(cdp, "new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))", true);
}

async function readVisualState(cdp) {
  return evaluate(
    cdp,
    `(() => {
      const section = document.querySelector(".tt2-chatbo:not(.tt2-chatbo-static)");
      const stage = section?.querySelector(".tt2-chatbo-stage");
      const frame = section?.querySelector(".tt2-chatbo-frame");
      const header = document.querySelector(".tt2-header, .mobile-header");
      const track = section?.querySelector(".tt2-chatbo-track") ?? section;
      const exit = section?.querySelector(".tt2-chatbo-exit");
      const exitCta = exit?.querySelector(".tt2-chatbo-cta");
      const stageCta = stage?.querySelector(".tt2-chatbo-cta");
      const media = [...(frame?.querySelectorAll("img") ?? [])];
      const words = [...(section?.querySelectorAll(".tt2-chatbo-word") ?? [])];
      const frameStyle = frame ? getComputedStyle(frame) : null;
      const head = section?.querySelector(".tt2-chatbo-wordmark");
      if (!section || !stage || !frame || !header || !frameStyle || !head) {
        throw new Error("ChatBo visual structure is incomplete");
      }
      const stageRect = stage.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();
      return {
        viewport: { width: innerWidth, height: innerHeight },
        sectionVh: section.offsetHeight / innerHeight,
        trackBottom: track.getBoundingClientRect().bottom,
        stageTop: stageRect.top,
        stageHeight: stageRect.height,
        headerBottom: headerRect.bottom,
        frameVw: frameRect.width / innerWidth,
        frameLeft: frameRect.left,
        frameRight: frameRect.right,
        borderWidth: parseFloat(frameStyle.borderTopWidth),
        radius: parseFloat(frameStyle.borderTopLeftRadius),
        shadow: frameStyle.boxShadow,
        background: getComputedStyle(section).backgroundImage,
        headFontSize: parseFloat(getComputedStyle(head).fontSize),
        media: media.map((item) => ({
          opacity: parseFloat(getComputedStyle(item.parentElement?.matches(".tt2-chatbo-media") ? item.parentElement : item).opacity),
          objectFit: getComputedStyle(item).objectFit,
          naturalRatio: item.naturalWidth / item.naturalHeight,
        })),
        wordCount: words.length,
        stageCtaPresent: Boolean(stageCta),
        outroTextPresent: Boolean(section?.querySelector(".tt2-chatbo-outro")),
        exitCtaPresent: Boolean(exitCta),
        exitCtaVisible: exitCta ? getComputedStyle(exitCta).display !== "none" : false,
        exitCtaTop: exitCta?.getBoundingClientRect().top ?? null,
      };
    })()`,
  );
}

function approximately(actual, expected, tolerance, label) {
  if (!Number.isFinite(actual)) {
    throw new Error(`${label}: expected a finite number, received ${actual}`);
  }
  if (Math.abs(actual - expected) > tolerance) {
    throw new Error(`${label}: expected ${expected} ± ${tolerance}, received ${actual}`);
  }
}

function between(actual, min, max, label) {
  if (!Number.isFinite(actual)) {
    throw new Error(`${label}: expected a finite number, received ${actual}`);
  }
  if (actual < min || actual > max) {
    throw new Error(`${label}: expected ${min}–${max}, received ${actual}`);
  }
}

function assertTimeline(state, expected, label) {
  const media = state.media.map((item) => item.opacity);
  expected.media.forEach(([min, max], index) => between(media[index], min, max, `${label} media ${index + 1}`));
  if (state.wordCount !== 0) throw new Error(`${label}: narrative word overlays must be removed`);
  if (state.stageCtaPresent) throw new Error(`${label}: CTA must not be inside the sticky stage`);
  if (state.outroTextPresent) throw new Error(`${label}: product outro text must be removed`);
}

async function assertAnimatedExperience(port) {
  debug("assert animated experience");
  const viewport = DESKTOPS[0];
  const cdp = await createPage(port, viewport);
  try {
    await goToProgress(cdp, 0);
    await waitForChatboMedia(cdp);
    const entry = await readVisualState(cdp);
    between(entry.sectionVh, 3.2, 3.8, "desktop section height in vh");
    approximately(entry.stageTop, entry.headerBottom, 2, "sticky stage navbar offset");
    approximately(entry.stageHeight, innerHeightFor(entry) - entry.headerBottom, 3, "sticky useful viewport height");
    between(entry.frameVw, 0.98, 1.02, "full-bleed media scene width");
    if (entry.frameLeft > 1 || entry.frameRight < entry.viewport.width - 1) {
      throw new Error("full-bleed media scene must cover both viewport edges");
    }
    between(entry.borderWidth, 0, 0.1, "external media border");
    between(entry.radius, 0, 4, "external media radius");
    if (entry.shadow !== "none") throw new Error(`external media shadow: expected none, received ${entry.shadow}`);
    if (!entry.background.includes("gradient")) throw new Error("ChatBo environment must use a non-flat navy gradient");
    between(entry.headFontSize, 20, 48, "discreet ChatBo intro heading");
    if (entry.media.length !== 3) throw new Error(`expected exactly 3 ChatBo media layers, received ${entry.media.length}`);
    if (entry.wordCount !== 0) throw new Error(`expected no narrative word overlays, received ${entry.wordCount}`);
    if (entry.stageCtaPresent) throw new Error("sticky stage must not contain a CTA");
    if (entry.outroTextPresent) throw new Error("sticky stage must not contain the product outro text");
    if (!entry.exitCtaPresent || !entry.exitCtaVisible) throw new Error("dedicated final CTA is missing");
    entry.media.forEach((item, index) => {
      between(item.naturalRatio, 1.775, 1.779, `media ${index + 1} source ratio`);
      if (!["cover", "contain"].includes(item.objectFit)) {
        throw new Error(`media ${index + 1} must preserve aspect ratio with object-fit`);
      }
    });

    const timelineChecks = [
      { progress: 0.2, media: [[0.9, 1], [0, 0.1], [0, 0.1]] },
      { progress: 0.4, media: [[0.9, 1], [0, 0.1], [0, 0.1]] },
      { progress: 0.57, media: [[0.25, 0.85], [0.25, 0.85], [0, 0.1]] },
      { progress: 0.7, media: [[0, 0.1], [0.9, 1], [0, 0.1]] },
      { progress: 0.83, media: [[0, 0.1], [0.25, 0.85], [0.25, 0.85]] },
      { progress: 0.95, media: [[0, 0.1], [0, 0.1], [0.9, 1]] },
    ];
    for (const check of timelineChecks) {
      await goToProgress(cdp, check.progress);
      const state = await readVisualState(cdp);
      assertTimeline(state, check, `timeline ${check.progress}`);
    }

    await goToProgress(cdp, 1);
    const ending = await readVisualState(cdp);
    approximately(ending.trackBottom, ending.viewport.height, 3, "ChatBo to Projects continuity");
    await goToExit(cdp);
    const exit = await readVisualState(cdp);
    if (!exit.exitCtaVisible || exit.exitCtaTop < 0 || exit.exitCtaTop > exit.viewport.height) {
      throw new Error("dedicated final CTA must appear after the sticky stage");
    }
  } finally {
    cdp.close();
  }
}

async function assertIntermediateNavbarOffsets(port) {
  const measurements = [];
  for (const viewport of INTERMEDIATE_DESKTOPS) {
    const cdp = await createPage(port, viewport);
    try {
      await goToProgress(cdp, 0);
      const entry = await readVisualState(cdp);
      approximately(entry.stageTop, entry.headerBottom, 2, `${viewport.width}px desktop sticky navbar offset`);
      approximately(entry.stageHeight, innerHeightFor(entry) - entry.headerBottom, 3, `${viewport.width}px desktop useful viewport height`);
      measurements.push({
        width: viewport.width,
        headerBottom: entry.headerBottom,
        stageTop: entry.stageTop,
        stageHeight: entry.stageHeight,
      });
    } finally {
      cdp.close();
    }
  }
  return measurements;
}

function innerHeightFor(state) {
  return state.viewport.height;
}

async function assertReducedMotion(port) {
  const cdp = await createPage(port, DESKTOPS[0], { reducedMotion: true });
  try {
    const state = await evaluate(
      cdp,
      `(() => {
        const section = document.querySelector(".tt2-chatbo-static");
        const cta = section?.querySelector(".tt2-chatbo-cta");
        return {
          found: Boolean(section),
          sectionVh: section ? section.offsetHeight / innerHeight : null,
          ctaVisible: cta ? getComputedStyle(cta).display !== "none" : false,
        };
      })()`,
    );
    if (!state.found) throw new Error("Reduced-motion ChatBo section not found");
    between(state.sectionVh, 0.4, 1.8, "reduced-motion section height");
    if (!state.ctaVisible) throw new Error("Reduced-motion CTA must remain visible");
  } finally {
    cdp.close();
  }
}

async function assertMobileExperience(port) {
  const cdp = await createPage(port, MOBILES[0]);
  try {
    await goToProgress(cdp, 0);
    const entry = await readVisualState(cdp);
    between(entry.sectionVh, 2.2, 2.6, "mobile section height in vh");
    approximately(entry.stageTop, entry.headerBottom, 2, "mobile sticky navbar offset");
    approximately(entry.stageHeight, innerHeightFor(entry) - entry.headerBottom, 3, "mobile useful viewport height");
    between(entry.frameVw, 0.98, 1.02, "mobile full-bleed media scene width");
    if (entry.frameLeft > 1 || entry.frameRight < entry.viewport.width - 1) {
      throw new Error("mobile full-bleed media scene must cover both viewport edges");
    }

    await goToProgress(cdp, 1);
    const ending = await readVisualState(cdp);
    approximately(ending.trackBottom, ending.viewport.height, 3, "mobile ChatBo to Projects continuity");
  } finally {
    cdp.close();
  }
}

async function assertIntroWordmark(port) {
  const cdp = await createPage(port, DESKTOPS[0], { skipIntro: false });
  try {
    await wait(1100);
    const state = await evaluate(
      cdp,
      `({
        is3D: Boolean(document.querySelector(".tt2-intro-overlay.is-3d canvas")),
        hasWordmark: Boolean(document.querySelector(".tt2-intro3d-wordmark"))
      })`,
    );
    if (state.is3D && state.hasWordmark) {
      throw new Error('3D intro still renders the "TironiTech" wordmark');
    }
    return state.is3D ? "verified" : "3D unavailable in headless browser; source/build checks remain required";
  } finally {
    cdp.close();
  }
}

async function captureScreenshot(cdp, filePath) {
  const { data } = await cdp.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
    fromSurface: true,
  });
  await writeFile(filePath, Buffer.from(data, "base64"));
}

async function captureViewport(port, viewport, progressPoints, prefix) {
  const cdp = await createPage(port, viewport);
  try {
    for (const [index, progress] of progressPoints.entries()) {
      await goToProgress(cdp, progress);
      if (index === 0) await waitForChatboMedia(cdp);
      const suffix = String(Math.round(progress * 100)).padStart(3, "0");
      const fileName = `${prefix}-${viewport.width}x${viewport.height}-p${suffix}.png`;
      await captureScreenshot(cdp, path.join(SCREENSHOT_ROOT, fileName));
    }
  } finally {
    cdp.close();
  }
}

async function captureCleanExit(port, viewport) {
  const cdp = await createPage(port, viewport);
  try {
    await goToExit(cdp);
    await captureScreenshot(cdp, path.join(CLEAN_SCREENSHOT_ROOT, `chatbo-final-cta-${viewport.width}x${viewport.height}.png`));
  } finally {
    cdp.close();
  }
}

async function captureNamedScreenshots(port) {
  const desktop = DESKTOPS[0];
  const cdp = await createPage(port, desktop);
  try {
    const captures = [
      [0, "chatbo-clean-start.png"],
      [0.6, "chatbo-clean-middle.png"],
      [1, "chatbo-clean-final.png"],
    ];
    for (const [progress, fileName] of captures) {
      await goToProgress(cdp, progress);
      await captureScreenshot(cdp, path.join(CLEAN_SCREENSHOT_ROOT, fileName));
    }
    await goToExit(cdp);
    await captureScreenshot(cdp, path.join(CLEAN_SCREENSHOT_ROOT, "chatbo-final-cta.png"));

    const solutionsTop = await evaluate(
      cdp,
      `(() => {
        const section = document.querySelector("#projetos");
        const heading = section?.querySelector(".tt2-kicker, .mobile-section-tag");
        if (!section || !heading) throw new Error("Solutions section heading is missing");
        if (heading.textContent.trim() !== "Soluções originais TironiTech") {
          throw new Error("Solutions section heading was not renamed");
        }
        return section.getBoundingClientRect().top + window.scrollY - 24;
      })()`,
    );
    await evaluate(cdp, `window.scrollTo({ top: ${solutionsTop}, behavior: "auto" })`);
    await evaluate(cdp, "new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))", true);
    await captureScreenshot(cdp, path.join(CLEAN_SCREENSHOT_ROOT, "solutions-section.png"));
  } finally {
    cdp.close();
  }

  const mobileCdp = await createPage(port, MOBILES[0]);
  try {
    await goToProgress(mobileCdp, 0.6);
    await captureScreenshot(mobileCdp, path.join(CLEAN_SCREENSHOT_ROOT, "chatbo-clean-mobile.png"));
  } finally {
    mobileCdp.close();
  }
}

async function main() {
  debug("main start");
  const browserPath = await findBrowser();
  debug("browser found", browserPath);
  const profileDir = await mkdtemp(path.join(os.tmpdir(), "tironitech-chatbo-qa-"));
  const browser = spawn(
    browserPath,
    [
      "--headless=new",
      "--disable-gpu",
      "--disable-gpu-compositing",
      "--disable-features=UseSkiaRenderer,Vulkan",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-background-networking",
      "--remote-debugging-port=0",
      "--remote-allow-origins=*",
      `--user-data-dir=${profileDir}`,
      "about:blank",
    ],
    { stdio: ["ignore", "pipe", "pipe"], windowsHide: true },
  );
  debug("browser spawned", browser.pid);
  browser.stdout.on("data", (chunk) => debug("browser stdout", String(chunk).trim()));
  browser.stderr.on("data", (chunk) => debug("browser stderr", String(chunk).trim()));
  browser.on("exit", (code, signal) => debug("browser exit", { code, signal }));

  let port;
  try {
    port = await waitForDevTools(profileDir);
    debug("devtools ready", port);
    await assertAnimatedExperience(port);
    const intermediateDesktop = await assertIntermediateNavbarOffsets(port);
    await assertMobileExperience(port);
    await assertReducedMotion(port);
    const intro = await assertIntroWordmark(port);

    if (TAKE_SCREENSHOTS) {
      await mkdir(SCREENSHOT_ROOT, { recursive: true });
      await mkdir(CLEAN_SCREENSHOT_ROOT, { recursive: true });
      for (const viewport of DESKTOPS) {
        await captureViewport(port, viewport, DESKTOP_PROGRESS, "desktop");
      }
      for (const viewport of MOBILES) {
        await captureViewport(port, viewport, MOBILE_PROGRESS, "mobile");
      }
      await captureCleanExit(port, DESKTOPS[0]);
      await captureNamedScreenshots(port);
    }

    console.log(JSON.stringify({
      status: "PASS",
      browser: browserPath,
      intro,
      intermediateDesktop,
      screenshots: TAKE_SCREENSHOTS ? SCREENSHOT_ROOT : null,
    }, null, 2));
  } finally {
    if (port) {
      try {
        await fetch(`http://127.0.0.1:${port}/json/version`);
      } catch {
        // Browser already closed.
      }
    }
    browser.kill();
    await wait(250);
    const tempRoot = path.resolve(os.tmpdir());
    const resolvedProfile = path.resolve(profileDir);
    if (resolvedProfile.startsWith(tempRoot) && path.basename(resolvedProfile).startsWith("tironitech-chatbo-qa-")) {
      await rm(resolvedProfile, { recursive: true, force: true });
    }
  }
}

main().catch((error) => {
  console.error(`FAIL: ${error.message}`);
  process.exitCode = 1;
});
