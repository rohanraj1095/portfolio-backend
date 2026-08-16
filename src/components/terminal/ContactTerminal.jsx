import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { C } from "../../styles/colors";
import { CONTACT_STEPS as STEPS } from "../../data";
import { TypedLine } from "./TypedLine";

export function ContactTerminal() {
  const [history, setHistory] = useState([]);   // fully rendered lines
  const [queue, setQueue]     = useState([]);    // lines waiting to type out
  const [step, setStep]       = useState(-1);   // -1 = not started
  const [input, setInput]     = useState("");
  const [data, setData]       = useState({});
  const [done, setDone]       = useState(false);
  const [started, setStarted] = useState(false);
  const inputRef = useRef(null);
  const bodyRef  = useRef(null);

  const push = (text, color="#94a3b8") => setQueue(q => [...q, { text, color }]);
  const pushInstant = (text, color="#e2e8f0") => setHistory(h => [...h, { text, color }]);

  // boot
  useEffect(() => {
    const msgs = [
      { t:300,  text:"Initializing connect.sh...",      color:"#64748b" },
      { t:900,  text:"Connection established ✓",         color:"#3ee8a8" },
      { t:1500, text:'Type "start" to send a message, or "info" to see contact details.', color:"#cbd5e1" },
    ];
    msgs.forEach(({ t, text, color }) => setTimeout(() => push(text, color), t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // auto-scroll
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, queue, step]);

  // focus input when a step is active and nothing is typing
  useEffect(() => {
    if (step >= 0 && !done && queue.length === 0) inputRef.current?.focus();
  }, [step, done, queue.length]);

  const handleLineDone = () => {
    setQueue(q => {
      if (q.length === 0) return q;
      const [line, ...rest] = q;
      setHistory(h => [...h, line]);
      return rest;
    });
  };

  const submit = (overrideVal) => {
    const val = (overrideVal !== undefined ? overrideVal : input).trim();
    if (!val) return;

    // echo user input instantly
    pushInstant(`> ${val}`, "#e2e8f0");
    if (overrideVal === undefined) setInput("");

    if (!started) {
      if (val.toLowerCase() === "start") {
        setStarted(true);
        setTimeout(() => {
          push("", "#64748b");
          push("Great! Let's get you connected.", "#3ee8a8");
          push("Answer a few quick questions below ↓", "#94a3b8");
          push("", "#64748b");
          setStep(0);
        }, 300);
      } else if (val.toLowerCase() === "info") {
        push("", "#64748b");
        push("📧  rohanraj1095@gmail.com", "#3ee8a8");
        push("🔗  linkedin.com/in/rohanraj1095", "#5bb6f7");
        push("🐙  github.com/rohanraj1095", "#94a3b8");
        push("📍  Noida, India", "#94a3b8");
        push("", "#64748b");
      } else if (val.toLowerCase() === "clear") {
        setHistory([]); setQueue([]);
        setStarted(false); setStep(-1); setData({}); setDone(false);
      } else {
        push(`Unknown command: "${val}". Try "start" or "info".`, "#f06a5a");
      }
      return;
    }

    if (step < STEPS.length) {
      const key = STEPS[step].key;

      if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        push("⚠  That doesn't look like a valid email. Try again.", "#f3c969");
        return;
      }

      const newData = { ...data, [key]: val };
      setData(newData);

      const next = step + 1;
      if (next < STEPS.length) {
        push("", "#64748b");
        setStep(next);
      } else {
        setStep(STEPS.length);
        setTimeout(() => {
          push("", "#64748b");
          push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "#334155");
          push(`  Name    : ${newData.name}`,    "#f3c969");
          push(`  Email   : ${newData.email}`,   "#5bb6f7");
          push(`  Message : ${newData.message}`, "#3ee8a8");
          push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "#334155");
          push("", "#64748b");
          push("✅  Message sent! Rohan will reply soon.", "#3ee8a8");
          push('   Type "reset" to send another.', "#64748b");
          push("", "#64748b");
          setDone(true);
        }, 300);
      }
      return;
    }

    if (val.toLowerCase() === "reset" || val.toLowerCase() === "clear") {
      setHistory([]); setQueue([{ text:'Ready again. Type "start" to send a new message.', color:"#3ee8a8" }]);
      setStarted(false); setStep(-1); setData({}); setDone(false);
    } else {
      push(`Type "reset" to start over.`, "#64748b");
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter") { submit(input); setInput(""); }
  };

  const currentStep = STEPS[step];
  const isTyping = queue.length > 0;
  const isActive = !done && !isTyping && (step === -1 || step < STEPS.length);
  const currentTyping = queue[0];

  return (
    <div onClick={() => inputRef.current?.focus()}
      style={{ borderRadius:12, border:"1px solid rgba(62,232,168,0.2)", background:"#070c09", overflow:"hidden", cursor:"text" }}>

      {/* title bar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 14px", borderBottom:"1px solid rgba(255,255,255,0.06)", background:"#0e1512" }}>
        <div style={{ display:"flex", gap:6 }}>
          <span style={{ width:10, height:10, borderRadius:"50%", background:"#ef4444" }}/>
          <span style={{ width:10, height:10, borderRadius:"50%", background:"#f3c969" }}/>
          <span style={{ width:10, height:10, borderRadius:"50%", background:"#3ee8a8" }}/>
        </div>
        <span style={{ fontSize:11, color:"#475569", fontFamily:"monospace" }}>connect.sh — rohanraj</span>
        <span style={{ fontSize:10, color:"#1e3329", fontFamily:"monospace" }}>bash</span>
      </div>

      {/* quick-action chips */}
      <div style={{ display:"flex", gap:6, padding:"7px 12px", borderBottom:"1px solid rgba(255,255,255,0.04)", background:"rgba(255,255,255,0.01)", flexWrap:"wrap" }}>
        {[["start","🚀 Start","#3ee8a8"],["info","📋 Info","#5bb6f7"],["reset","↺ Reset","#f3c969"]].map(([cmd,label,col]) => (
          <button key={cmd} onClick={(e) => { e.stopPropagation(); setInput(""); submit(cmd); }}
            onMouseEnter={e=>{ e.target.style.background=`${col}22`; e.target.style.borderColor=`${col}66`; }}
            onMouseLeave={e=>{ e.target.style.background="transparent"; e.target.style.borderColor=`${col}33`; }}
            style={{ fontSize:10, padding:"2px 10px", borderRadius:4, border:`1px solid ${col}33`, background:"transparent", color:col, cursor:"pointer", fontFamily:"monospace", transition:"all 0.15s" }}>
            {label}
          </button>
        ))}
        {started && !done && (
          <div style={{ marginLeft:"auto", display:"flex", gap:5, alignItems:"center" }}>
            {STEPS.map((s,i)=>(
              <span key={s.key} style={{ width:6, height:6, borderRadius:"50%", background: i < step ? "#3ee8a8" : i===step ? "#f3c969" : "#1e3329", transition:"background 0.3s" }}/>
            ))}
          </div>
        )}
      </div>

      {/* output area */}
      <div ref={bodyRef} style={{ padding:"12px 14px", minHeight:180, maxHeight:240, overflowY:"auto", fontFamily:"monospace", fontSize:12.5, lineHeight:1.9 }}>
        {history.map((l, i) => (
          <div key={i} style={{ color: l.color }}>{l.text}</div>
        ))}

        {/* currently typing line */}
        {currentTyping && (
          <div style={{ color: currentTyping.color }}>
            <TypedLine key={history.length} text={currentTyping.text} onDone={handleLineDone} />
            <span className="cursor-blink" style={{ color:"#3ee8a8" }}>▋</span>
          </div>
        )}

        {/* step prompt */}
        {started && !done && !isTyping && step >= 0 && step < STEPS.length && (
          <div style={{ color: STEPS[step].color, marginTop:4, fontWeight:600 }}>
            {`[${step+1}/${STEPS.length}] ${STEPS[step].prompt}`}
          </div>
        )}

        {/* input row */}
        {isActive && (
          <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
            <span style={{ color:"#3ee8a8", flexShrink:0 }}>›</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder={currentStep ? currentStep.placeholder : (started ? "" : 'type "start" or "info"...')}
              style={{ background:"transparent", border:"none", outline:"none", color:"#e2e8f0", fontFamily:"monospace", fontSize:12.5, flex:1, caretColor:"#3ee8a8" }}
            />
            <span className="cursor-blink" style={{ color:"#3ee8a8" }}>▋</span>
          </div>
        )}

        {/* done — send button */}
        {done && !isTyping && (
          <button className="btn-gold" onClick={()=>{ setHistory([]); setQueue([{text:'Type "start" to send a new message.',color:"#3ee8a8"}]); setStarted(false);setStep(-1);setData({});setDone(false); }}
            style={{ marginTop:8, display:"flex", alignItems:"center", gap:6, background:C.gold, color:"#231a06", fontWeight:700, borderRadius:8, padding:"8px 16px", border:"none", cursor:"pointer", fontSize:12 }}>
            Send Another <Send size={12}/>
          </button>
        )}
      </div>
    </div>
  );
}
