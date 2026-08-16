import {
  User,
  Calendar,
  MapPin,
  Mail,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Database,
  Rocket,
} from "lucide-react";
import { C } from "../../styles/colors";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/Atoms";
import { PROFILE } from "../../data";

export function About() {
  const { isMobile } = useBreakpoint();
  const [ref, visible] = useInView();
  const details = [
    { Icon: Calendar, label: "Experience", value: "2+ Years" },
    { Icon: MapPin, label: "Location", value: PROFILE.location },
    { Icon: Mail, label: "Email", value: PROFILE.email },
    {
      Icon: CheckCircle2,
      label: "Availability",
      value: "Open to Work · Remote OK",
      green: true,
    },
  ];

  const DetailItem = ({ Icon, label, value, green }) => (
    <div style={{ display: "flex", gap: 10 }}>
      <Icon size={16} color={C.mint} style={{ flexShrink: 0, marginTop: 2 }} />
      <div>
        <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
          {label}
        </div>
        <div
          style={{
            color: green ? C.mint : "#94a3b8",
            fontSize: 12,
            marginTop: 2,
            wordBreak: "break-word",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );

  const highlights = [
    { Icon: Zap, text: "Sub-500ms query performance" },
    { Icon: ShieldCheck, text: "Secure JWT & RBAC auth" },
    { Icon: Database, text: "Optimised DB design at scale" },
    { Icon: Rocket, text: "CI/CD, shipped to production" },
  ];

  const HighlightStrip = () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: 10,
        marginTop: 16,
        cursor: "pointer",
      }}
    >
      {highlights.map(({ Icon, text }, index) => (
        <div
          className="fade-up d-450"
          key={text}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 10px",
            borderRadius: 8,
            background: "rgba(62,232,168,0.05)",
            border: "1px solid rgba(62,232,168,0.14)",
          }}
        >
          <Icon size={13} color={C.mint} style={{ flexShrink: 0 }} />
          <span
            style={{
              color: "#cbd5e1",
              fontSize: 11,
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            {text}
          </span>
        </div>
      ))}
    </div>
  );

  const AboutBlurb = () => (
    <div style={{ display: "flex", gap: 14 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(62,232,168,0.1)",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          boxShadow: "0 0 16px rgba(62,232,168,0.15)",
        }}
      >
        <User size={19} color={C.mint} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ color: "#fff", fontWeight: 600, marginBottom: 6 }}>
          About Me
        </div>
        <p
          style={{
            color: "#94a3b8",
            fontSize: 13,
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          I turn backend ideas into systems that actually hold up in{" "}
          <strong style={{ color: "#e2e8f0" }}>production</strong>. Over{" "}
          <strong style={{ color: "#e2e8f0" }}>2+ years</strong> I've built and
          shipped REST APIs on Node.js and Express.js that serve real users —
          with the caching, security, and database design to back them up. I
          care about what doesn't show up in a demo: query performance under
          load, clean error handling, and code the next person can read without
          a walkthrough.
        </p>
        <HighlightStrip />
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}
    >
      <Card
        hover={false}
        className={visible ? "scale-in" : ""}
        style={{
          padding: isMobile ? "20px" : "28px 32px",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* About full width on top, details in a row below — same shape
            across breakpoints so the tall highlight strip never leaves a
            big empty gap next to a short detail column. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 20 : 24,
          }}
        >
          <AboutBlurb />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? 16 : 20,
              paddingTop: isMobile ? 16 : 20,
              borderTop: `1px solid ${C.line}`,
            }}
          >
            {details.map((d) => (
              <DetailItem key={d.label} {...d} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
