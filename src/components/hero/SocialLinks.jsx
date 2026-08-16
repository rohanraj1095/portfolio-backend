import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../../data";

const LINKS = [
  { Icon: Github, href: PROFILE.github, label: "GitHub" },
  { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

export function SocialLinks() {
  const [hover, setHover] = useState(null);
  return (
    <div className="fade-up d-400" style={{ display: "flex", gap: 10 }}>
      {LINKS.map(({ Icon, href, label }) => (
        <div key={label} style={{ position: "relative" }}>
          {hover === label && (
            <span
              style={{
                position: "absolute", bottom: "120%", left: "50%", transform: "translateX(-50%)",
                fontSize: 11, fontWeight: 600, color: "#0a0f0c", background: "#3ee8a8",
                padding: "4px 9px", borderRadius: 6, whiteSpace: "nowrap", pointerEvents: "none",
              }}
            >
              {label}
            </span>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="soc-icon"
            onMouseEnter={() => setHover(label)}
            onMouseLeave={() => setHover(null)}
            style={{
              width: 40, height: 40, display: "grid", placeItems: "center",
              borderRadius: 10, border: `1px solid rgba(255,255,255,0.1)`,
              color: "#94a3b8", textDecoration: "none",
            }}
          >
            <Icon size={17} />
          </a>
        </div>
      ))}
    </div>
  );
}
