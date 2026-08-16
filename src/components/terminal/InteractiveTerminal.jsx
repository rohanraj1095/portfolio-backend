import { useState, useEffect, useRef } from "react";
import { TERMINAL_COMMANDS, BOOT_LINES, QUICK_CMDS, PROFILE } from "../../data";
import { TypedLine } from "./TypedLine";

const ACCENTS = ["#3ee8a8", "#f3c969", "#5bb6f7", "#a78bfa"];

export function InteractiveTerminal() {
  const [history, setHistory] = useState([]);   // fully rendered lines
  const [queue, setQueue] = useState([]);        // lines waiting to be typed out, one at a time
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [booted, setBooted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [accentIdx, setAccentIdx] = useState(0);
  const autoQueuedRef = useRef(false);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const accent = ACCENTS[accentIdx % ACCENTS.length];

  // boot sequence — types each boot line out before the next appears,
  // then hands control straight to the user (no auto-demo commands)
  useEffect(() => {
    if (bootStep >= BOOT_LINES.length) {
      if (!autoQueuedRef.current) {
        autoQueuedRef.current = true;
        setBooted(true);
      }
      return;
    }
    const t = setTimeout(() => {
      setQueue((q) => [...q, { text: BOOT_LINES[bootStep].text, color: BOOT_LINES[bootStep].color, type: "boot" }]);
      setBootStep((s) => s + 1);
    }, bootStep === 0 ? BOOT_LINES[0].delay : 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootStep]);

  // auto-scroll whenever history or queue changes
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, queue]);

  // when the front of the queue finishes typing, move it into history and advance
  const handleLineDone = () => {
    setQueue((q) => {
      if (q.length === 0) return q;
      const [done, ...rest] = q;
      setHistory((h) => [...h, done]);
      return rest;
    });
  };

  const runCmd = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // command echo appears instantly (it's what the user typed)
    setHistory((h) => [...h, { type: "cmd", text: raw }]);

    if (cmd === "clear") {
      setHistory([]);
      setQueue([{ type: "boot", text: "Terminal cleared.", color: "#64748b" }]);
    } else if (cmd === "theme") {
      setAccentIdx((i) => i + 1);
      setQueue((q) => [...q, { type: "boot", text: "🎨  Terminal accent updated.", color: ACCENTS[(accentIdx + 1) % ACCENTS.length] }]);
    } else if (cmd === "resume") {
      setQueue((q) => [...q, ...TERMINAL_COMMANDS.resume.output.map((o) => ({ type: "boot", ...o }))]);
      const a = document.createElement("a");
      a.href = PROFILE.resume;
      a.download = "";
      a.click();
    } else if (cmd === "github") {
      setQueue((q) => [...q, ...TERMINAL_COMMANDS.github.output.map((o) => ({ type: "boot", ...o }))]);
      window.open(PROFILE.github, "_blank", "noopener,noreferrer");
    } else if (cmd === "linkedin") {
      setQueue((q) => [...q, ...TERMINAL_COMMANDS.linkedin.output.map((o) => ({ type: "boot", ...o }))]);
      window.open(PROFILE.linkedin, "_blank", "noopener,noreferrer");
    } else if (TERMINAL_COMMANDS[cmd]) {
      setQueue((q) => [...q, ...TERMINAL_COMMANDS[cmd].output.map((o) => ({ type: "out", ...o }))]);
    } else {
      setQueue((q) => [
        ...q,
        { type: "err", text: `Command not found: ${cmd}.`, color: "#f06a5a" },
        { type: "err", text: `Type "help" to see available commands.`, color: "#64748b" },
      ]);
    }
    setCmdHistory((h) => [raw, ...h]);
    setHistIdx(-1);
    setInput("");
  };

  const onKey = (e) => {
    if (e.key === "Enter") { runCmd(input); }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : cmdHistory[idx]);
    }
  };

  const currentTyping = queue[0];
  const isIdle = queue.length === 0;

  return (
    <div className="term-glow" onClick={() => inputRef.current?.focus()}
      role="region" aria-label="Interactive terminal"
      style={{ borderRadius: 16, border: `1px solid ${accent}33`, background: "rgba(10,15,12,0.82)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", overflow: "hidden", cursor: "text", boxShadow: "0 30px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)", transition: "border-color 0.4s", willChange: "transform" }}>

      {/* title bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(14,21,18,0.6)" }}>
        <div style={{ display: "flex", gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f3c969" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3ee8a8" }} />
        </div>
        <span style={{ fontSize: 11, color: "#64748b", fontFamily: "monospace" }}>rohanraj@portfolio:~</span>
        <span style={{ fontSize: 10, color: "#334155", fontFamily: "monospace" }}>bash</span>
      </div>

      {/* quick command chips */}
      <div style={{ display: "flex", gap: 6, padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)", flexWrap: "wrap", background: "rgba(255,255,255,0.015)" }}>
        {QUICK_CMDS.map((c) => (
          <button key={c} onClick={(e) => { e.stopPropagation(); runCmd(c); }}
            aria-label={`Run ${c} command`}
            style={{ fontSize: 10.5, padding: "3px 10px", borderRadius: 5, border: `1px solid ${accent}33`, background: `${accent}0f`, color: accent, cursor: "pointer", fontFamily: "monospace", transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.target.style.background = `${accent}2e`; e.target.style.borderColor = `${accent}80`; }}
            onMouseLeave={(e) => { e.target.style.background = `${accent}0f`; e.target.style.borderColor = `${accent}33`; }}>
            {c}
          </button>
        ))}
      </div>

      {/* output area */}
      <div ref={bodyRef} style={{ padding: "20px 22px", minHeight: 340, maxHeight: 420, overflowY: "auto", fontFamily: "monospace", fontSize: 13.5, lineHeight: 2 }}>
        {/* fully rendered lines */}
        {history.map((line, i) => (
          <div key={i} style={{ color: line.color || "#94a3b8", display: "flex", gap: 6, alignItems: "flex-start" }}>
            {line.type === "cmd" && <span style={{ color: accent, flexShrink: 0 }}>$</span>}
            {line.type === "err" && <span style={{ color: "#f06a5a", flexShrink: 0 }}>✗</span>}
            <span style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{line.text}</span>
          </div>
        ))}

        {/* currently typing line */}
        {currentTyping && (
          <div style={{ color: currentTyping.color || "#94a3b8", display: "flex", gap: 6, alignItems: "flex-start" }}>
            {currentTyping.type === "err" && <span style={{ color: "#f06a5a", flexShrink: 0 }}>✗</span>}
            <span style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
              <TypedLine key={history.length} text={currentTyping.text} onDone={handleLineDone} />
              <span className="cursor-blink" style={{ color: accent }}>▋</span>
            </span>
          </div>
        )}

        {/* input row — only when idle (not mid-typing) */}
        {booted && isIdle && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
            <span style={{ color: accent, flexShrink: 0 }}>$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="type a command..."
              aria-label="Terminal command input"
              style={{
                background: "transparent", border: "none", outline: "none",
                color: "#e2e8f0", fontFamily: "monospace", fontSize: 13.5,
                flex: 1, caretColor: accent,
              }}
            />
            <span className="cursor-blink" style={{ color: accent, fontSize: 14 }}>▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
