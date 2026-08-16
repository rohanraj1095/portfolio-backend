import { C } from "../../styles/colors";

export function Pill({ children, green }) {
  return (
    <span className="proj-tag" style={{
      fontSize:11, padding:"3px 10px", borderRadius:6, lineHeight:1.6,
      background: green ? "rgba(62,232,168,0.08)" : "rgba(255,255,255,0.05)",
      border: `1px solid ${green ? "rgba(62,232,168,0.28)" : "rgba(255,255,255,0.1)"}`,
      color: green ? C.mint : "#cbd5e1", whiteSpace:"nowrap",
    }}>{children}</span>
  );
}

export function SecTitle({ Icon, children, className="" }) {
  return (
    <div className={className} style={{ display:"flex", alignItems:"center", gap:8, color:"#fff", fontWeight:700, fontSize:18, marginBottom:28 }}>
      <Icon size={20} color={C.mint}/>{children}
    </div>
  );
}

export function Card({ children, style={}, hover=true, className="" }) {
  return (
    <div className={`${hover ? "hov-card" : ""} ${className}`}
      style={{ borderRadius:14, border:`1px solid ${C.line}`, background:C.card, ...style }}>
      {children}
    </div>
  );
}
