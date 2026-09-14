import { AnimatePresence, motion as Motion } from "framer-motion";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { LogoMark } from "./layout/Navbar";
import {
  INTRO_FALLBACK_MS,
  INTRO_HARD_TIMEOUT_MS,
} from "./intro3d/introTimeline";

/**
 * O núcleo 3D só é baixado quando a abertura cinematográfica vai realmente
 * rodar: sessão nova, sem reduced motion e com WebGL disponível (§12).
 */
const IntroScene3D = lazy(() => import("./intro3d/IntroScene3D"));

const SEEN_KEY = "tironi_intro_seen_v3";
const BRAND = "TironiTech";
const EASE = [0.22, 1, 0.36, 1];

function safeSessionGet(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSessionSet(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Armazenamento bloqueado (modo privado, política do navegador etc.):
    // a abertura deve continuar funcionando mesmo sem persistir a marca.
  }
}

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * Detecção de WebGL feita uma única vez, antes de montar qualquer coisa do
 * Three. O canvas de teste é descartado em seguida.
 */
function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/** Perfil de enquadramento: uma implementação, três recortes (§42). */
function viewportProfile() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w <= 767 && h >= w) return "portrait";
  if (w <= 1024 || h <= 520) return "compact";
  return "desktop";
}

function decideMode() {
  if (safeSessionGet(SEEN_KEY) === "true") return "skip";
  if (prefersReducedMotion()) return "dom";
  if (!hasWebGL()) return "dom";
  return "3d";
}

export default function IntroOverlay() {
  // Decidido de forma síncrona no primeiro render: evita um frame de abertura
  // errada e evita setState dentro de efeito.
  const [initial] = useState(() => ({
    mode: decideMode(),
    profile: viewportProfile(),
  }));

  const [mode, setMode] = useState(initial.mode);
  const [visible, setVisible] = useState(initial.mode !== "skip");
  const [washing, setWashing] = useState(false);
  const completedRef = useRef(false);
  const scrollRef = useRef(null);

  const dismiss = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setVisible(false);
    safeSessionSet(SEEN_KEY, "true");
  }, []);

  /** Qualquer falha do 3D degrada para a abertura DOM, sem travar a Home. */
  const handleError = useCallback(() => {
    setWashing(false);
    setMode("dom");
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    scrollRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /**
     * Trava de segurança independente do 3D: se o GLB demorar, falhar ou o
     * dispositivo engasgar, a abertura termina mesmo assim (§60).
     */
    const hardTimeout = window.setTimeout(dismiss, INTRO_HARD_TIMEOUT_MS);

    // A abertura DOM (reduced motion / fallback) tem duração própria e curta.
    const domTimeout =
      mode === "dom" ? window.setTimeout(dismiss, INTRO_FALLBACK_MS) : null;

    return () => {
      window.clearTimeout(hardTimeout);
      if (domTimeout) window.clearTimeout(domTimeout);
    };
  }, [visible, mode, dismiss]);

  // O scroll só volta depois que o overlay sai de fato da tela (§50).
  const releaseScroll = useCallback(() => {
    document.body.style.overflow = scrollRef.current ?? "";
  }, []);

  useEffect(() => releaseScroll, [releaseScroll]);

  if (initial.mode === "skip") return null;

  const is3D = mode === "3d";

  return (
    <AnimatePresence onExitComplete={releaseScroll}>
      {visible && (
        <Motion.div
          className={`tt2-intro-overlay${is3D ? " is-3d" : ""}`}
          role="presentation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: EASE } }}
        >
          {is3D ? (
            <>
              <Suspense fallback={null}>
                <IntroScene3D
                  profile={initial.profile}
                  onFinish={dismiss}
                  onError={handleError}
                  onWashStart={() => setWashing(true)}
                />
              </Suspense>

              {/*
                Wash DOM: entra por cima do rush, quando a marca já tomou o
                quadro. É ele que costura o 3D com a Home — não há corte seco
                entre Canvas e site.
              */}
              <Motion.div
                className="tt2-intro3d-wash"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: washing ? 1 : 0 }}
                transition={{ duration: 0.38, ease: EASE }}
              />
            </>
          ) : (
            /*
              Abertura DOM: caminho de reduced motion e de qualquer falha do
              3D (WebGL ausente, GLB indisponível, contexto perdido).
            */
            <Motion.div
              className="tt2-intro-logo-wrap"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="tt2-intro-logo-box">
                <LogoMark className="tt2-intro-symbol" size={320} title={BRAND} />
              </div>
              <div className="tt2-intro-brand">
                <h2>{BRAND}</h2>
              </div>
            </Motion.div>
          )}
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
