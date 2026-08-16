import { Briefcase } from "lucide-react";
import { EDUCATION } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle, Card } from "../ui/Atoms";
import { C } from "../../styles/colors";

export function Education() {
  const { isMobile } = useBreakpoint();
  const [ref, visible] = useInView();
  return (
    <div id="education" ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 0" }}>
      <SecTitle Icon={Briefcase} className={visible?"fade-up":""}>Education</SecTitle>
      <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr", gap:20, maxWidth: isMobile ? "100%" : 560 }}>
        {/* degree */}
        <div className={visible?"fade-up d-100":""} style={{ opacity:visible?undefined:0 }}>
          {EDUCATION.map(e => (
            <Card key={e.degree} style={{ padding:22, height:"100%" }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                <div style={{ width:42, height:42, borderRadius:10, background:"rgba(62,232,168,0.1)", display:"grid", placeItems:"center", flexShrink:0, fontSize:20 }}>🎓</div>
                <div style={{ flex:1 }}>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:14, marginBottom:4 }}>{e.degree}</div>
                  <div style={{ color:C.mint, fontSize:12, fontWeight:600, marginBottom:4 }}>{e.school}</div>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:12 }}>
                    <span style={{ fontSize:11, color:"#64748b" }}>{e.period}</span>
                    <span style={{ fontSize:11, color:C.gold, fontWeight:600 }}>{e.grade}</span>
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {e.highlights.map(h => (
                      <span key={h} style={{ fontSize:10, padding:"2px 8px", borderRadius:4, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", color:"#94a3b8" }}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
