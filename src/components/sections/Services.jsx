import { Wrench } from "lucide-react";
import { C } from "../../styles/colors";
import { SERVICES } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle } from "../ui/Atoms";

export function Services() {
  const { isMobile, isTablet } = useBreakpoint();
  const [ref, visible] = useInView();
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)";
  return (
    <div
      id="services"
      ref={ref}
      style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px 0" }}
    >
      <SecTitle Icon={Wrench} className={visible ? "fade-up" : ""}>
        What I Build
      </SecTitle>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16 }}>
        {SERVICES.map(({ icon, title, color, bc, desc }, i) => (
          <div
            key={title}
            className={`hov-card ${visible ? `fade-up d-${Math.min((i + 1) * 100, 500)}` : ""}`}
            style={{
              borderRadius: 14,
              border: `1px solid ${bc}`,
              background: C.card,
              padding: 22,
              opacity: visible ? undefined : 0,
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 12 }}>{icon}</div>
            <div
              style={{ color, fontWeight: 700, fontSize: 14, marginBottom: 8 }}
            >
              {title}
            </div>
            <p style={{ color: "#94a3b8", fontSize: 12.5, lineHeight: 1.75 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
