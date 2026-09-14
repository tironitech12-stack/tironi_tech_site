import { motion as Motion, useReducedMotion } from "framer-motion";
import HeroPitch from "../shared/HeroPitch";

export default function HeroSection({ t }) {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <Motion.section
      id="inicio"
      className="tt2-hero tt2-corporate-hero tt-hero-impact"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease }}
    >
      <div className="tt2-container tt2-hero-inner tt2-hero-inner-simple">
        <HeroPitch copy={t.hero} />
      </div>
    </Motion.section>
  );
}
