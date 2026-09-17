import { motion as Motion, useReducedMotion } from "framer-motion";
import { trackFunnelEvent } from "../../utils/conversionTracking";

const CHATBO_URL = "https://www.chatbo.com.br/";
const CHATBO_HOW_IT_WORKS_URL = "https://www.chatbo.com.br/#como-funciona";

export default function ChatboSpotlight({ t }) {
  const reduceMotion = useReducedMotion();
  const copy = t.chatbo;

  return (
    <Motion.section
      className="tt2-chatbo tt2-chatbo-commercial"
      id="chatbo"
      aria-labelledby="chatbo-title"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-chatbo-commercial-glow" aria-hidden="true" />
      <div className="tt2-container tt2-chatbo-commercial-inner">
        <div className="tt2-chatbo-commercial-copy">
          <div className="tt2-chatbo-brandline">
            <img src="/brand/chatbo/chatbo-mark.webp" alt="" width="48" height="48" />
            <span>{copy.eyebrow}</span>
          </div>

          <h2 id="chatbo-title">{copy.title}</h2>
          <p className="tt2-chatbo-commercial-description">{copy.description}</p>

          <div className="tt2-chatbo-feature-grid">
            {copy.features.map((feature) => (
              <article key={feature.title}>
                <span aria-hidden="true">✓</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="tt2-chatbo-actions">
            <a
              className="tt2-chatbo-primary"
              href={CHATBO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFunnelEvent("chatbo_trial_click", { origin: "homepage" })}
            >
              {copy.primaryCta} <span aria-hidden="true">↗</span>
            </a>
            <a
              className="tt2-chatbo-secondary"
              href={CHATBO_HOW_IT_WORKS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFunnelEvent("chatbo_how_it_works_click", { origin: "homepage" })}
            >
              {copy.secondaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="tt2-chatbo-trust" aria-label={copy.trustLabel}>
            {copy.trust.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="tt2-chatbo-product">
          <div className="tt2-chatbo-product-bar">
            <span><i /><i /><i /></span>
            <small>app.chatbo.ai</small>
            <b>{copy.status}</b>
          </div>
          <div className="tt2-chatbo-product-media">
            <img
              src="/brand/chatbo/chatbo-interface.webp"
              alt={copy.imageAlt}
              loading="lazy"
              decoding="async"
              width="1380"
              height="777"
            />
          </div>
          <div className="tt2-chatbo-channel-row" aria-label={copy.channelsLabel}>
            {copy.channels.map((channel) => <span key={channel}>{channel}</span>)}
          </div>
        </div>
      </div>
    </Motion.section>
  );
}
