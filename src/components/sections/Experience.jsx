import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { C } from "../../styles/colors";
import { EXPERIENCES } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle, Card, Pill } from "../ui/Atoms";

export function Experience() {
  const { isMobile } = useBreakpoint();
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 0" }}>
      <SecTitle Icon={Briefcase} className={visible ? "fade-up" : ""}>Work Experience</SecTitle>
      <div style={{ position:"relative" }}>
        {!isMobile && (
          <div style={{ position:"absolute", left:19, top:0, bottom:0, width:1, background:`linear-gradient(to bottom, ${C.mint}55, transparent)` }}/>
        )}
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={visible ? `fade-up d-${(idx+1)*100}` : ""}
              style={{ paddingLeft: isMobile ? 0 : 56, position:"relative", opacity: visible ? undefined : 0 }}>
              {!isMobile && (
                <div className="ring-pulse" style={{
                  position:"absolute", left:0, top:18, width:38, height:38,
                  borderRadius:"50%", background:C.card, border:`2px solid rgba(62,232,168,0.5)`,
                  display:"flex", alignItems:"center", justifyContent:"center", zIndex:2,
                }}>
                  <Briefcase size={14} color={C.mint}/>
                </div>
              )}
              <Card style={{ padding: isMobile ? 18 : 22 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:10, marginBottom:16 }}>
                  <div>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                      <span style={{ color:"#fff", fontWeight:700, fontSize:15 }}>{exp.role}</span>
                      {exp.current && (
                        <span style={{ fontSize:10, padding:"2px 9px", borderRadius:20, background:"rgba(62,232,168,0.12)", color:C.mint, border:`1px solid rgba(62,232,168,0.3)`, fontWeight:600, boxShadow:"0 0 10px rgba(62,232,168,0.15)" }}>Current</span>
                      )}
                    </div>
                    <div style={{ color:C.mint, fontWeight:600, fontSize:13, marginTop:3 }}>{exp.company}</div>
                    {exp.client && <div style={{ color:"#64748b", fontWeight:500, fontSize:11, marginTop:2 }}>{exp.client}</div>}
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems: isMobile ? "flex-start" : "flex-end", gap:5 }}>
                    <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"#64748b" }}><Calendar size={11} color={C.mint}/>{exp.period}</span>
                    <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"#64748b" }}><MapPin size={11} color={C.mint}/>{exp.location}</span>
                    <span style={{ fontSize:10, padding:"2px 8px", borderRadius:5, background:"rgba(255,255,255,0.05)", border:`1px solid rgba(255,255,255,0.1)`, color:"#94a3b8" }}>{exp.type}</span>
                  </div>
                </div>
                <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:9, marginBottom:16 }}>
                  {exp.points.map((pt, i) => (
                    <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:9, fontSize:12, color:"#94a3b8", lineHeight:1.7 }}>
                      <CheckCircle2 size={13} color={C.mint} style={{ flexShrink:0, marginTop:2 }}/>{pt}
                    </li>
                  ))}
                </ul>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, paddingTop:14, borderTop:`1px solid ${C.line}` }}>
                  {exp.tech.map(t => <Pill key={t} green>{t}</Pill>)}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
