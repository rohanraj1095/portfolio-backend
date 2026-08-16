import { useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { C } from "../../styles/colors";
import { PROFILE } from "../../data";

function useRipple() {
  const [ripples, setRipples] = useState([]);
  const trigger = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 620);
  };
  return { ripples, trigger };
}

export function HeroButtons({ onViewProjects }) {
  const primary = useRipple();
  const secondary = useRipple();
  const [hoverArrow, setHoverArrow] = useState(false);

  return (
    <div className="fade-up d-300" style={{ display: "flex", gap: 12, marginBottom: 26, flexWrap: "wrap" }}>
      <a
        href={PROFILE.resume}
        download
        className="hero-cta btn-mint"
        onClick={primary.trigger}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          color: "#06150f", fontWeight: 700, borderRadius: 10,
          padding: "12px 24px", border: "none", cursor: "pointer",
          fontSize: 14, background: C.mint, textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 8px 24px rgba(62,232,168,0.25)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(62,232,168,0.45)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(62,232,168,0.25)"; }}
      >
        <Download size={15} /> Download Resume
        {primary.ripples.map((r) => (
          <span key={r.id} className="ripple-span" style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
        ))}
      </a>

      <button
        className="hero-cta"
        onClick={(e) => { secondary.trigger(e); onViewProjects?.(); }}
        onMouseEnter={(e) => { setHoverArrow(true); e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
        onMouseLeave={(e) => { setHoverArrow(false); e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          border: `1px solid rgba(255,255,255,0.15)`, color: "#fff",
          background: "rgba(255,255,255,0.03)", borderRadius: 10,
          padding: "12px 24px", cursor: "pointer", fontSize: 14,
          transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
        }}
      >
        View Projects
        <ArrowRight size={15} style={{ transform: hoverArrow ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s" }} />
        {secondary.ripples.map((r) => (
          <span key={r.id} className="ripple-span" style={{ left: r.x, top: r.y, width: r.size, height: r.size, background: "rgba(62,232,168,0.35)" }} />
        ))}
      </button>
    </div>
  );
}
