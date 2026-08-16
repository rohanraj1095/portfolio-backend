import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { C } from "../../styles/colors";
import { PROFILE } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export function Footer() {
  const { isMobile } = useBreakpoint();

  return (
    <footer
      style={{
        borderTop: `1px solid ${C.line}`,
        marginTop: 60,
        background: "#070c09",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: isMobile ? "16px 20px" : "14px 20px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: isMobile ? 12 : 16,
        }}
      >
        {/* brand + copyright */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 700,
              color: "#fff",
              fontSize: 13,
            }}
          >
            <Code2 size={15} color={C.mint} /> Rohan Raj
          </span>
          <span style={{ color: "#334155", fontSize: 12 }}>
            © 2026 · Built with React
          </span>
        </div>

        {/* social icons */}
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { Icon: Github, href: PROFILE.github, label: "GitHub" },
            { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="soc-icon"
              style={{
                width: 28,
                height: 28,
                display: "grid",
                placeItems: "center",
                borderRadius: 7,
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                textDecoration: "none",
              }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>

        {/* location */}
        <span style={{ fontSize: 12, color: "#334155" }}>Noida, India 🇮🇳</span>
      </div>
    </footer>
  );
}
