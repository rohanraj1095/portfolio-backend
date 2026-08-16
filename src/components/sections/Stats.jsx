import { STATS } from "../../data";
import { C } from "../../styles/colors";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/Atoms";
import { Counter } from "../ui/Counter";

export function Stats() {
  const { isMobile } = useBreakpoint();
  const [ref, visible] = useInView(0.3);
  return (
    <div ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 0" }}>
      <Card hover={false} style={{ padding:"22px 28px", display:"grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap:20 }}>
        {STATS.map(({ Icon, end, suffix, label, color }, i) => (
          <div key={label} className={visible ? `fade-up d-${(i+1)*100}` : ""} style={{ display:"flex", alignItems:"center", gap:12, opacity: visible ? undefined : 0 }}>
            <div className="stat-icon" style={{ width:40, height:40, borderRadius:"50%", background:"rgba(255,255,255,0.04)", display:"grid", placeItems:"center", color, flexShrink:0 }}>
              <Icon size={17}/>
            </div>
            <div>
              <div style={{ fontSize:20, fontWeight:800, color }}>
                {visible ? <Counter end={end} suffix={suffix}/> : `0${suffix}`}
              </div>
              <div style={{ fontSize:11, color:"#64748b" }}>{label}</div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
