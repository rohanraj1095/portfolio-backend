// import { useState, useEffect } from "react";
// import { Folder, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
// import { C } from "../../styles/colors";
// import { PROJECTS } from "../../data";
// import { useBreakpoint } from "../../hooks/useBreakpoint";
// import { useInView } from "../../hooks/useInView";
// import { SecTitle, Pill } from "../ui/Atoms";

// export function Projects() {
//   const { isMobile, isTablet } = useBreakpoint();
//   const [ref, visible] = useInView();
//   const perPage = isMobile ? 1 : isTablet ? 2 : 3;
//   const [page, setPage] = useState(0);
//   const maxPage = Math.max(0, Math.ceil(PROJECTS.length / perPage) - 1);
//   const visibleProjects = PROJECTS.slice(page * perPage, page * perPage + perPage);
//   const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)";
//   useEffect(() => { setPage(0); }, [perPage]);
//   return (
//     <div ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 0" }}>
//       <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22 }}>
//         <SecTitle Icon={Folder} className={visible ? "fade-up" : ""}>Featured Projects</SecTitle>
//         <a href="#" className={visible ? "fade-up" : ""} style={{ fontSize:13, color:C.mint, display:"flex", alignItems:"center", gap:4, textDecoration:"none", whiteSpace:"nowrap", transition:"gap 0.2s" }}>
//           View All <ArrowRight size={13}/>
//         </a>
//       </div>
//       <div style={{ position:"relative", padding:"0 30px" }}>
//         <div style={{ display:"grid", gridTemplateColumns:cols, gap:16 }}>
//           {visibleProjects.map((p, pi) => (
//             <div key={p.title} className={`hov-card ${visible ? `fade-up d-${(pi+1)*100}` : ""}`}
//               style={{ borderRadius:14, border:`1px solid ${C.line}`, background:C.card, overflow:"hidden", opacity: visible ? undefined : 0 }}>
//               <div style={{ height:130, background:p.grad, position:"relative" }}>
//                 {p.badge && (
//                   <span style={{ position:"absolute", top:10, right:10, fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:20, background:"rgba(0,0,0,0.55)", border:"1px solid rgba(255,255,255,0.15)", color:"#e2e8f0", backdropFilter:"blur(6px)", letterSpacing:"0.04em" }}>
//                     {p.badge}
//                   </span>
//                 )}
//               </div>
//               <div style={{ padding:18 }}>
//                 <div style={{ color:"#fff", fontWeight:700, fontSize:14, marginBottom:8 }}>{p.title}</div>
//                 <p style={{ color:"#94a3b8", fontSize:12, lineHeight:1.7, marginBottom:14 }}>{p.desc}</p>
//                 <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
//                   {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
//                 </div>
//                 <div style={{ display:"flex", gap:14 }}>
//                   {p.links?.live && (
//                     <a href={p.links.live} target="_blank" rel="noopener noreferrer" style={{ color:C.mint, fontSize:12, display:"flex", alignItems:"center", gap:5, textDecoration:"none", transition:"gap 0.2s" }}>
//                       Live Demo <ExternalLink size={12}/>
//                     </a>
//                   )}
//                   {p.links?.code && (
//                     <a href={p.links.code} target="_blank" rel="noopener noreferrer" style={{ color:"#94a3b8", fontSize:12, display:"flex", alignItems:"center", gap:5, textDecoration:"none", transition:"gap 0.2s" }}>
//                       Source <ExternalLink size={12}/>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button disabled={page===0} onClick={() => setPage(p => Math.max(0, p-1))} style={{
//           position:"absolute", left:0, top:"45%", transform:"translateY(-50%)", width:26, height:26,
//           borderRadius:"50%", background:C.card, border:`1px solid ${C.line}`,
//           display:"flex", alignItems:"center", justifyContent:"center",
//           cursor: page===0 ? "not-allowed" : "pointer", color: page===0 ? "#334155" : "#94a3b8",
//           padding:0, transition:"color 0.2s",
//         }}><ChevronLeft size={14}/></button>
//         <button disabled={page===maxPage} onClick={() => setPage(p => Math.min(maxPage, p+1))} style={{
//           position:"absolute", right:0, top:"45%", transform:"translateY(-50%)", width:26, height:26,
//           borderRadius:"50%",
//           background: page===maxPage ? C.card : "rgba(62,232,168,0.12)",
//           border: `1px solid ${page===maxPage ? C.line : "rgba(62,232,168,0.4)"}`,
//           display:"flex", alignItems:"center", justifyContent:"center",
//           cursor: page===maxPage ? "not-allowed" : "pointer", color: page===maxPage ? "#334155" : C.mint,
//           padding:0, transition:"all 0.2s",
//         }}><ChevronRight size={14}/></button>
//       </div>
//       <div style={{ display:"flex", justifyContent:"center", gap:6, marginTop:18 }}>
//         {Array.from({ length: maxPage+1 }).map((_, i) => (
//           <button key={i} onClick={() => setPage(i)} style={{
//             height:5, width: i===page ? 22 : 5, borderRadius:3,
//             background: i===page ? C.mint : "rgba(255,255,255,0.2)",
//             border:"none", cursor:"pointer", padding:0, transition:"all 0.25s",
//           }}/>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import {
  Folder,
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Cpu,
} from "lucide-react";
import { C } from "../../styles/colors";
import { PROJECTS } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle, Pill } from "../ui/Atoms";

// --- Inline Dynamic AI/Tech SVG Banner Fallback ---
function TechSvgBanner({ title, grad }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          grad ||
          "linear-gradient(135deg, #090d16 0%, #111827 50%, #064e3b 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Abstract Tech Grid Background */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      >
        <defs>
          <pattern
            id={`grid-${title}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="#3ee8a8"
              strokeWidth="0.6"
            />
            <circle cx="24" cy="24" r="1" fill="#3ee8a8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
      </svg>

      {/* Cybernetic Geometric Accent */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ position: "absolute", opacity: 0.18, pointerEvents: "none" }}
      >
        <polygon
          points="100,10 190,60 190,140 100,190 10,140 10,60"
          fill="none"
          stroke="#3ee8a8"
          strokeWidth="1.5"
        />
        <polygon
          points="100,30 170,70 170,130 100,170 30,130 30,70"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="0.8"
        />
        <circle
          cx="100"
          cy="100"
          r="35"
          fill="none"
          stroke="#3ee8a8"
          strokeWidth="1"
          strokeDasharray="4 2"
        />
      </svg>

      {/* Center Label / Icon Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 14px",
          borderRadius: 20,
          background: "rgba(15, 23, 42, 0.65)",
          border: "1px solid rgba(62, 232, 168, 0.25)",
          backdropFilter: "blur(8px)",
          color: "#e2e8f0",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.04em",
          zIndex: 1,
        }}
      >
        <Cpu size={14} color={C.mint || "#3ee8a8"} />
        <span>{title}</span>
      </div>
    </div>
  );
}

export function Projects() {
  const { isMobile, isTablet } = useBreakpoint();
  const [ref, visible] = useInView();
  const perPage = isMobile ? 1 : isTablet ? 2 : 3;
  const [page, setPage] = useState(0);
  const maxPage = Math.max(0, Math.ceil(PROJECTS.length / perPage) - 1);
  const visibleProjects = PROJECTS.slice(
    page * perPage,
    page * perPage + perPage,
  );
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  return (
    <div
      ref={ref}
      style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px 0" }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <SecTitle Icon={Folder} className={visible ? "fade-up" : ""}>
          Featured Projects
        </SecTitle>
        <a
          href="#"
          className={visible ? "fade-up" : ""}
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: C.mint,
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "gap 0.2s ease",
          }}
        >
          View All <ArrowRight size={14} />
        </a>
      </div>

      {/* Grid Container */}
      <div
        style={{
          position: "relative",
          padding: isMobile ? "0 10px" : "0 36px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 20 }}>
          {visibleProjects.map((p, pi) => (
            <div
              key={p.title}
              className={`hov-card ${visible ? `fade-up d-${(pi + 1) * 100}` : ""}`}
              style={{
                borderRadius: 16,
                border: `1px solid ${C.line}`,
                background: C.card,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                opacity: visible ? 1 : 0,
                transition:
                  "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Media Container (Displays Image or AI-style Tech SVG) */}
              <div
                style={{
                  height: 170,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                ) : (
                  <TechSvgBanner title={p.title} grad={p.grad} />
                )}

                {/* Dark Gradient Overlay for seamless blending */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(15,23,42,0.85) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Badge */}
                {p.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                      background: "rgba(15, 23, 42, 0.75)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      color: "#e2e8f0",
                      backdropFilter: "blur(8px)",
                      letterSpacing: "0.05em",
                      zIndex: 2,
                    }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </div>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: 13,
                    lineHeight: 1.6,
                    marginBottom: 16,
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>

                {/* Tech Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 18,
                  }}
                >
                  {p.tags?.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                {/* Bottom Action Links */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    paddingTop: 14,
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {p.links?.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: C.mint,
                        fontSize: 12,
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        textDecoration: "none",
                        padding: "6px 12px",
                        borderRadius: 8,
                        background: "rgba(62, 232, 168, 0.08)",
                        border: "1px solid rgba(62, 232, 168, 0.2)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  )}
                  {p.links?.code && (
                    <a
                      href={p.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#cbd5e1",
                        fontSize: 12,
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        textDecoration: "none",
                        padding: "6px 12px",
                        borderRadius: 8,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Source <Github size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Page Button */}
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          aria-label="Previous Page"
          style={{
            position: "absolute",
            left: isMobile ? -6 : 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: C.card,
            border: `1px solid ${C.line}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: page === 0 ? "not-allowed" : "pointer",
            color: page === 0 ? "#334155" : "#94a3b8",
            padding: 0,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "all 0.2s",
            zIndex: 3,
          }}
        >
          <ChevronLeft size={16} />
        </button>

        {/* Next Page Button */}
        <button
          disabled={page === maxPage}
          onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
          aria-label="Next Page"
          style={{
            position: "absolute",
            right: isMobile ? -6 : 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: page === maxPage ? C.card : "rgba(62,232,168,0.12)",
            border: `1px solid ${page === maxPage ? C.line : "rgba(62,232,168,0.4)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: page === maxPage ? "not-allowed" : "pointer",
            color: page === maxPage ? "#334155" : C.mint,
            padding: 0,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "all 0.2s",
            zIndex: 3,
          }}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          marginTop: 24,
        }}
      >
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            style={{
              height: 6,
              width: i === page ? 24 : 6,
              borderRadius: 3,
              background: i === page ? C.mint : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.25s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
