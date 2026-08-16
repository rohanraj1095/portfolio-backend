import { useState, useEffect } from "react";
import { Folder, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { C } from "../../styles/colors";
import { PROJECTS } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle, Pill } from "../ui/Atoms";

export function Projects() {
  const { isMobile, isTablet } = useBreakpoint();
  const [ref, visible] = useInView();
  const perPage = isMobile ? 1 : isTablet ? 2 : 3;
  const [page, setPage] = useState(0);
  const maxPage = Math.max(0, Math.ceil(PROJECTS.length / perPage) - 1);
  const visibleProjects = PROJECTS.slice(page * perPage, page * perPage + perPage);
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)";
  useEffect(() => { setPage(0); }, [perPage]);
  return (
    <div ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 0" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22 }}>
        <SecTitle Icon={Folder} className={visible ? "fade-up" : ""}>Featured Projects</SecTitle>
        <a href="#" className={visible ? "fade-up" : ""} style={{ fontSize:13, color:C.mint, display:"flex", alignItems:"center", gap:4, textDecoration:"none", whiteSpace:"nowrap", transition:"gap 0.2s" }}>
          View All <ArrowRight size={13}/>
        </a>
      </div>
      <div style={{ position:"relative", padding:"0 30px" }}>
        <div style={{ display:"grid", gridTemplateColumns:cols, gap:16 }}>
          {visibleProjects.map((p, pi) => (
            <div key={p.title} className={`hov-card ${visible ? `fade-up d-${(pi+1)*100}` : ""}`}
              style={{ borderRadius:14, border:`1px solid ${C.line}`, background:C.card, overflow:"hidden", opacity: visible ? undefined : 0 }}>
              <div style={{ height:130, background:p.grad, position:"relative" }}>
                {p.badge && (
                  <span style={{ position:"absolute", top:10, right:10, fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:20, background:"rgba(0,0,0,0.55)", border:"1px solid rgba(255,255,255,0.15)", color:"#e2e8f0", backdropFilter:"blur(6px)", letterSpacing:"0.04em" }}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div style={{ padding:18 }}>
                <div style={{ color:"#fff", fontWeight:700, fontSize:14, marginBottom:8 }}>{p.title}</div>
                <p style={{ color:"#94a3b8", fontSize:12, lineHeight:1.7, marginBottom:14 }}>{p.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
                  {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
                </div>
                <div style={{ display:"flex", gap:14 }}>
                  {p.links?.live && (
                    <a href={p.links.live} target="_blank" rel="noopener noreferrer" style={{ color:C.mint, fontSize:12, display:"flex", alignItems:"center", gap:5, textDecoration:"none", transition:"gap 0.2s" }}>
                      Live Demo <ExternalLink size={12}/>
                    </a>
                  )}
                  {p.links?.code && (
                    <a href={p.links.code} target="_blank" rel="noopener noreferrer" style={{ color:"#94a3b8", fontSize:12, display:"flex", alignItems:"center", gap:5, textDecoration:"none", transition:"gap 0.2s" }}>
                      Source <ExternalLink size={12}/>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button disabled={page===0} onClick={() => setPage(p => Math.max(0, p-1))} style={{
          position:"absolute", left:0, top:"45%", transform:"translateY(-50%)", width:26, height:26,
          borderRadius:"50%", background:C.card, border:`1px solid ${C.line}`,
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor: page===0 ? "not-allowed" : "pointer", color: page===0 ? "#334155" : "#94a3b8",
          padding:0, transition:"color 0.2s",
        }}><ChevronLeft size={14}/></button>
        <button disabled={page===maxPage} onClick={() => setPage(p => Math.min(maxPage, p+1))} style={{
          position:"absolute", right:0, top:"45%", transform:"translateY(-50%)", width:26, height:26,
          borderRadius:"50%",
          background: page===maxPage ? C.card : "rgba(62,232,168,0.12)",
          border: `1px solid ${page===maxPage ? C.line : "rgba(62,232,168,0.4)"}`,
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor: page===maxPage ? "not-allowed" : "pointer", color: page===maxPage ? "#334155" : C.mint,
          padding:0, transition:"all 0.2s",
        }}><ChevronRight size={14}/></button>
      </div>
      <div style={{ display:"flex", justifyContent:"center", gap:6, marginTop:18 }}>
        {Array.from({ length: maxPage+1 }).map((_, i) => (
          <button key={i} onClick={() => setPage(i)} style={{
            height:5, width: i===page ? 22 : 5, borderRadius:3,
            background: i===page ? C.mint : "rgba(255,255,255,0.2)",
            border:"none", cursor:"pointer", padding:0, transition:"all 0.25s",
          }}/>
        ))}
      </div>
    </div>
  );
}
