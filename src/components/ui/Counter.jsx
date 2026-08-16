import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";

export function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useInView(0.4);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(end / 50));
    const t = setInterval(() => {
      cur = Math.min(cur + step, end);
      setVal(cur);
      if (cur >= end) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [visible, end]);
  return <span ref={ref}>{val}{suffix}</span>;
}
