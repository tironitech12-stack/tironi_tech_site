import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const CHATBO_URL = "https://www.chatbo.com.br/";

/**
 * Artes promocionais do ChatBô. São composições conceituais de apresentação —
 * a copy ao redor delas é institucional e não descreve funcionalidades.
 */
const MEDIA = {
  brand: "/brand/chatbo/chatbo-brand.png",
  interface: "/brand/chatbo/chatbo-interface.png",
  mark: "/brand/chatbo/chatbo-mark.png",
};

/**
 * Uma única cena que evolui durante o scroll. A e B dividem o quadro entre
 * 48–66%; B e C, entre 76–90%, produzindo crossfades longos sem cortes.
 */
const TIMELINE = {
  headOpacity: [[0, 0.04, 0.12, 0.22], [0.32, 1, 1, 0]],
  headY: [[0, 0.12], [14, 0]],
  taglineOpacity: [[0, 0.08, 0.16, 0.24], [0.18, 1, 1, 0]],
  sceneScale: [[0, 0.12, 1], [1.015, 1.01, 1.015]],
  sceneY: [[0, 0.5, 1], [4, -4, 0]],
  aOpacity: [[0, 0.04, 0.48, 0.66], [0.08, 1, 1, 0]],
  aScale: [[0, 0.12, 0.32, 0.52, 0.66], [0.96, 1, 1, 1.1, 1.12]],
  aY: [[0, 0.32, 0.52, 0.66], [12, 0, -12, -18]],
  aBlur: [[0, 0.1], [6, 0]],
  bOpacity: [[0.48, 0.66, 0.76, 0.9], [0, 1, 1, 0]],
  bScale: [[0.48, 0.66, 0.82, 0.9], [0.97, 1, 1.03, 1.05]],
  bY: [[0.48, 0.66, 0.82, 0.9], [12, 0, -12, -16]],
  cOpacity: [[0.76, 0.9, 0.96, 1], [0, 1, 1, 0.28]],
  cScale: [[0.76, 0.9, 1], [1.03, 1, 0.96]],
  cY: [[0.76, 0.9, 1], [10, 0, -8]],
};

export default function ChatboSpotlight({ t }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // A referência é a própria seção: nada de listener manual de scroll.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headRef = useRef(null);
  const taglineRef = useRef(null);
  const frameRef = useRef(null);
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);

  /**
   * Os valores acima são declarativos; a APLICAÇÃO é feita aqui de propósito.
   *
   * Motivo medido: ligando MotionValues direto no `style` de um componente
   * `motion`, o Framer promove opacidade e transform para animação WAAPI —
   * `getAnimations()` mostra uma animação de 1000ms em execução sobre a
   * imagem. A animação WAAPI vence o estilo inline, então o DOM parava de
   * refletir o scroll e ficava interpolando sozinho: o crossfade, as três
   * palavras e o CTA nunca chegavam ao alvo. Escrevendo o estilo aqui, cada
   * quadro corresponde exatamente à posição de scroll.
   */
  const paint = useCallback(() => {
    const p = scrollYProgress.get();
    const at = (key) => {
      const [keys, values] = TIMELINE[key];
      if (p <= keys[0]) return values[0];
      if (p >= keys[keys.length - 1]) return values[values.length - 1];
      for (let i = 1; i < keys.length; i += 1) {
        if (p <= keys[i]) {
          const k = (p - keys[i - 1]) / (keys[i] - keys[i - 1]);
          return values[i - 1] + (values[i] - values[i - 1]) * k;
        }
      }
      return values[values.length - 1];
    };
    const set = (ref, css) => {
      const el = ref.current;
      if (el) Object.assign(el.style, css);
    };

    set(headRef, {
      opacity: String(at("headOpacity")),
      transform: "translateY(" + at("headY") + "px)",
    });
    set(taglineRef, { opacity: String(at("taglineOpacity")) });
    set(frameRef, {
      transform: "translate3d(0, " + at("sceneY") + "px, 0) scale(" + at("sceneScale") + ")",
    });
    set(aRef, {
      opacity: String(at("aOpacity")),
      filter: "blur(" + at("aBlur") + "px)",
      transform: "translate3d(0, " + at("aY") + "px, 0) scale(" + at("aScale") + ")",
    });
    set(bRef, {
      opacity: String(at("bOpacity")),
      transform: "translate3d(0, " + at("bY") + "px, 0) scale(" + at("bScale") + ")",
    });
    set(cRef, {
      opacity: String(at("cOpacity")),
      transform: "translate3d(0, " + at("cY") + "px, 0) scale(" + at("cScale") + ")",
    });
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", paint);

  // Primeiro quadro: a seção precisa nascer no estado correto do scroll.
  useEffect(() => {
    if (!reduceMotion) paint();
  }, [reduceMotion, paint]);

  const eyebrow = t?.chatbo?.eyebrow ?? "PRODUTO EM DESTAQUE";
  const tagline = t?.chatbo?.tagline ?? "Inteligência aplicada a conversas que movem negócios.";
  const cta = t?.chatbo?.cta ?? "Conhecer o ChatBô";

  /**
   * Reduced motion: nada de jornada longa de scroll. A mesma informação numa
   * peça estática — nenhum conteúdo essencial fica escondido.
   */
  if (reduceMotion) {
    return (
      <section className="tt2-chatbo tt2-chatbo-static" id="chatbo" aria-labelledby="chatbo-title">
        <div className="tt2-chatbo-inner">
          <span className="tt2-chatbo-eyebrow">{eyebrow}</span>
          <h2 className="tt2-chatbo-wordmark" id="chatbo-title">
            ChatBô
          </h2>
          <p className="tt2-chatbo-tagline">{tagline}</p>
          <div className="tt2-chatbo-static-media">
            <img src={MEDIA.brand} alt="ChatBô" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="tt2-chatbo-exit">
          <a className="tt2-chatbo-cta" href={CHATBO_URL} target="_blank" rel="noopener noreferrer">
            {cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="tt2-chatbo" id="chatbo" aria-labelledby="chatbo-title">
      <div className="tt2-chatbo-track" ref={sectionRef}>
        <div className="tt2-chatbo-stage">
          <div className="tt2-chatbo-halo tt2-chatbo-halo-cyan" aria-hidden="true" />
          <div className="tt2-chatbo-halo tt2-chatbo-halo-violet" aria-hidden="true" />
          <div className="tt2-chatbo-wave" aria-hidden="true" />

          <header className="tt2-chatbo-head" ref={headRef}>
            <span className="tt2-chatbo-eyebrow">{eyebrow}</span>
            <h2 className="tt2-chatbo-wordmark" id="chatbo-title">
              ChatBô
            </h2>
          </header>

          <p className="tt2-chatbo-tagline" ref={taglineRef}>
            {tagline}
          </p>

          <div className="tt2-chatbo-frame" ref={frameRef}>
            <div className="tt2-chatbo-media tt2-chatbo-media-a" ref={aRef}>
              <img src={MEDIA.mark} alt="ChatBô" loading="lazy" decoding="async" />
            </div>
            <div className="tt2-chatbo-media tt2-chatbo-media-b" ref={bRef}>
              <img
                src={MEDIA.interface}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="tt2-chatbo-media tt2-chatbo-media-c" ref={cRef}>
              <img
                src={MEDIA.brand}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tt2-chatbo-exit">
        <a className="tt2-chatbo-cta" href={CHATBO_URL} target="_blank" rel="noopener noreferrer">
          {cta} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
