import { motion as Motion, useReducedMotion } from "framer-motion";
import LogoLoop from "../ui/LogoLoop";
import "../../styles/client-showcase.css";

const XNAMAI_CLIENT = {
  name: "XNAMAI",
  logo: "/assets/clients/xnamai.png",
};

function withXnamai(clients = []) {
  if (clients.some((client) => client.name === "XNAMAI")) return clients;
  return [...clients, XNAMAI_CLIENT];
}

export default function TrustedBySection({ t, clients }) {
  const reduceMotion = useReducedMotion();
  const logoClients = withXnamai(clients).map((client) => ({
    ...client,
    className: client.name === "Multiplier" ? "is-inverse" : client.name === "Ziquita Agro-Paraná" ? "is-ziquita" : client.name === "Instituto Potala" ? "is-potala" : "",
  }));

  return (
    <Motion.section
      id="clientes"
      className="tt2-section tt2-clients-section tt-client-showcase"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.nav.clients}</span>
          <h2>{t.trustedBy.title}</h2>
          <p>{t.trustedBy.description}</p>
        </div>
      </div>

      <div className="tt-client-showcase-loop">
        <LogoLoop logos={logoClients} speed={72} hoverSpeed={18} logoHeight={58} gap={30} fadeOutColor="#071522" ariaLabel={t.trustedBy.title} />
      </div>
    </Motion.section>
  );
}
