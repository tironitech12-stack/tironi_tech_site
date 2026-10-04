import { diagnosticHref } from "../../content/positioning";

export default function FloatingLeadButton({ label }) {
  return (
    <a className="tt2-floating-lead" href={diagnosticHref("club", "floating")}>
      {label}
    </a>
  );
}

