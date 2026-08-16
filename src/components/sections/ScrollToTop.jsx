import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { C } from "../../styles/colors";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = document.getElementById("portfolio-root");
    if (!el) return;
    const fn = () => setShow(el.scrollTop > 400);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);
  return show ? (
    <button onClick={() => document.getElementById("portfolio-root")?.scrollTo({ top:0, behavior:"smooth" })}
      style={{ position:"fixed", bottom:24, right:24, zIndex:99, width:42, height:42, borderRadius:"50%", background:C.mint, border:"none", cursor:"pointer", display:"grid", placeItems:"center", boxShadow:"0 4px 20px rgba(62,232,168,0.4)", color:"#06150f", transition:"transform 0.2s, box-shadow 0.2s" }}
      onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(62,232,168,0.55)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(62,232,168,0.4)"; }}>
      <ArrowRight size={18} style={{ transform:"rotate(-90deg)" }}/>
    </button>
  ) : null;
}
