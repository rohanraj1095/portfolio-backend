import { C } from "../../styles/colors";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/Atoms";
import { ContactTerminal } from "../terminal/ContactTerminal";
import { PROFILE } from "../../data";

export function Contact() {
  const { isMobile, isTablet } = useBreakpoint();
  const [ref, visible] = useInView();
  const compact = isMobile || isTablet;
  return (
    <div ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 64px" }}>
      <Card hover={false} className={visible ? "scale-in" : ""} style={{ padding: compact ? "24px" : "36px 40px", display:"grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: compact ? 24 : 40, alignItems:"center", opacity: visible ? 1 : 0 }}>
        <div>
          <h3 style={{ color:"#fff", fontSize: isMobile ? 20 : 24, fontWeight:800, marginBottom:10, lineHeight:1.35 }}>
            Let's build something <span className="name-glow" style={{ color:C.mint }}>amazing</span> together!
          </h3>
          <p style={{ color:"#94a3b8", fontSize:13, lineHeight:1.8, marginBottom:20 }}>
            I'm a backend engineer with <strong style={{color:"#e2e8f0"}}>2+ years</strong> of production experience, currently open to full-time roles and freelance projects. Let's connect!
          </p>
          {/* contact info tiles */}
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {[
              { icon:"📧", label:"Email",        value:PROFILE.email,                          href:`mailto:${PROFILE.email}`,      color:"#3ee8a8" },
              { icon:"🔗", label:"LinkedIn",     value:"linkedin.com/in/rohanraj1095",         href:PROFILE.linkedin,                color:"#5bb6f7" },
              { icon:"🐙", label:"GitHub",       value:"github.com/rohanraj1095",              href:PROFILE.github,                  color:"#94a3b8" },
              { icon:"📍", label:"Location",     value:PROFILE.location,                        href:null,                             color:"#f3c969" },
            ].map(item => (
              <a key={item.label} href={item.href || undefined} target={item.href ? "_blank" : undefined} rel={item.href ? "noopener noreferrer" : undefined}
                style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 12px", borderRadius:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", transition:"border-color 0.2s", textDecoration:"none", cursor:item.href ? "pointer" : "default" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(62,232,168,0.2)"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}>
                <span style={{ fontSize:14 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize:10, color:"#64748b", fontWeight:600, letterSpacing:"0.05em" }}>{item.label.toUpperCase()}</div>
                  <div style={{ fontSize:12, color:item.color, fontFamily:"monospace" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <ContactTerminal />
      </Card>
    </div>
  );
}
