import { AnimatePresence, motion as Motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { LogoMark } from "./layout/Navbar";

const SEEN_KEY = "tironi_intro_seen_v4";
const BRAND = "TironiTech";
const INTRO_DURATION_MS = 680;
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
    // The intro still finishes when storage is unavailable.
  }
}

export default function IntroOverlay() {
  const [visible, setVisible] = useState(() => safeSessionGet(SEEN_KEY) !== "true");

  const dismiss = useCallback(() => {
    setVisible(false);
    safeSessionSet(SEEN_KEY, "true");
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    const timeout = window.setTimeout(dismiss, INTRO_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [dismiss, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="tt2-intro-overlay is-quick"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: EASE } }}
        >
          <Motion.div
            className="tt2-intro-logo-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="tt2-intro-logo-box">
              <LogoMark className="tt2-intro-symbol" size={240} title={BRAND} />
            </div>
            <div className="tt2-intro-brand">
              <h2>{BRAND}</h2>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
