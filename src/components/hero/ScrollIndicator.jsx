export function ScrollIndicator() {
  const scrollDown = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollDown}
      aria-label="Scroll to explore"
      className="scroll-bounce"
      style={{
        position: "absolute",
        bottom: 14,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "#64748b",
        zIndex: 3,
      }}
    >
      <span style={{ fontSize: 10, letterSpacing: "0.12em", fontFamily: "monospace" }}>SCROLL TO EXPLORE</span>
      <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
        <rect x="1" y="1" width="18" height="28" rx="9" stroke="#3ee8a8" strokeWidth="1.5" opacity="0.6" />
        <circle cx="10" cy="8" r="2.5" fill="#3ee8a8">
          <animate attributeName="cy" values="8;19;8" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </button>
  );
}
