import { useState, useEffect, useRef } from "react";

// const BADGES = [
//   { label: "JavaScript", color: "#F7DF1E", delay: "0s", dur: "4.6s" },
//   { label: "TypeScript", color: "#3178C6", delay: "0.2s", dur: "5.1s" },
//   { label: "Node.js", color: "#3ee8a8", delay: "0.4s", dur: "4.5s" },
//   { label: "Express", color: "#5bb6f7", delay: "0.7s", dur: "4.8s" },
//   { label: "MongoDB", color: "#f3a649", delay: "1s", dur: "5s" },
//   { label: "PostgreSQL", color: "#5bb6f7", delay: "1.3s", dur: "4.6s" },
//   { label: "Redis", color: "#f06a5a", delay: "1.6s", dur: "5.2s" },
//   { label: "JWT", color: "#a78bfa", delay: "0.6s", dur: "4.4s" },
//   { label: "Git", color: "#f3c969", delay: "1.1s", dur: "5.4s" },
//   { label: "Linux", color: "#94a3b8", delay: "1.4s", dur: "4.9s" },
// ];

const BADGES = [
  { label: "JavaScript", color: "#F7DF1E", delay: "0s", dur: "4.6s" },
  { label: "TypeScript", color: "#3178C6", delay: "0.2s", dur: "5.1s" },
  { label: "Node.js", color: "#3ee8a8", delay: "0.4s", dur: "4.5s" },
  { label: "Express.js", color: "#5bb6f7", delay: "0.7s", dur: "4.8s" },
  { label: "MongoDB", color: "#f3a649", delay: "1s", dur: "5s" },

  { label: "Redis", color: "#f06a5a", delay: "1.6s", dur: "5.2s" },
  { label: "JWT", color: "#a78bfa", delay: "0.6s", dur: "4.4s" },
  { label: "Docker", color: "#5bb6f7", delay: "1.8s", dur: "4.7s" },
  { label: "Git", color: "#f3c969", delay: "1.1s", dur: "5.4s" },
  { label: "Linux", color: "#94a3b8", delay: "1.4s", dur: "4.9s" },
  { label: "Nginx", color: "#3ee8a8", delay: "1.9s", dur: "5.1s" },
];

export function FloatingBadges() {
  const [revealed, setRevealed] = useState(null);
  const [autoReveal, setAutoReveal] = useState(null);
  const badgesRef = useRef(null);

  const toggle = (label) => {
    setRevealed((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (badgesRef.current && !badgesRef.current.contains(event.target)) {
        setRevealed(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (revealed) return;

    const interval = setInterval(() => {
      const randomBadge = BADGES[Math.floor(Math.random() * BADGES.length)];

      setAutoReveal(randomBadge.label);

      setTimeout(() => {
        setAutoReveal(null);
      }, 1800);
    }, 4500);

    return () => clearInterval(interval);
  }, [revealed]);

  return (
    <div
      ref={badgesRef}
      className="fade-up d-450"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 28,
      }}
    >
      {BADGES.map((b) => {
        // const isRevealed = revealed === b.label;
        const isRevealed = revealed === b.label || autoReveal === b.label;

        return (
          <button
            key={b.label}
            className="tech-badge"
            onClick={() => toggle(b.label)}
            aria-pressed={isRevealed}
            aria-label={isRevealed ? b.label : "Reveal skill"}
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              outline: "none",

              width: `calc(${b.label.length}ch + 26px)`,
              height: 34,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontSize: 11.5,
              fontFamily: "monospace",
              fontWeight: 700,

              borderRadius: 8,
              cursor: "pointer",

              border: `1px solid ${b.color}40`,

              background: `linear-gradient(
                135deg,
                ${b.color}18 0%,
                rgba(255,255,255,0.03) 100%
              )`,

              color: isRevealed ? b.color : "#94a3b8",

              boxShadow: isRevealed ? `0 0 12px ${b.color}55` : "none",

              transform: isRevealed
                ? "translateY(-1px) scale(1.015)"
                : "translateY(0) scale(1)",

              // transition:
              //   "transform .22s ease, box-shadow .22s ease, color .22s ease",

              transition: "all .3s ease",

              // Floating animation timing
              animationDelay: b.delay,
              animationDuration: b.dur,
            }}
          >
            {isRevealed ? b.label : "?"}
          </button>
        );
      })}
    </div>
  );
}
