import { useState } from "react";
import { Code2 } from "lucide-react";
import { C } from "../../styles/colors";
import { SKILLS } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle } from "../ui/Atoms";

export function Skills() {
  const { isMobile, isTablet } = useBreakpoint();
  const [filter, setFilter] = useState("All");
  const [ref, visible] = useInView();
  const filters = ["All", "Backend", "Database", "DevOps", "Tools"];
  const shown =
    filter === "All"
      ? SKILLS
      : SKILLS.filter((g) => g.title.startsWith(filter));
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)";
  return (
    <div
      ref={ref}
      style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px 0" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          marginBottom: 22,
          flexDirection: isMobile ? "column" : "row",
          gap: 14,
        }}
      >
        <SecTitle Icon={Code2} className={visible ? "fade-up" : ""}>
          Skills &amp; Tech Stack
        </SecTitle>
        <div
          className={visible ? "fade-up d-100" : ""}
          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className="filter-btn"
              onClick={() => setFilter(f)}
              style={{
                fontSize: 12,
                padding: "6px 14px",
                borderRadius: 7,
                cursor: "pointer",
                background:
                  filter === f ? "rgba(62,232,168,0.12)" : "transparent",
                border: `1px solid ${filter === f ? "rgba(62,232,168,0.5)" : "rgba(255,255,255,0.1)"}`,
                color: filter === f ? C.mint : "#94a3b8",
                fontWeight: filter === f ? 600 : 400,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16 }}>
        {shown.map(({ title, Icon, color, bc, items }, ci) => (
          <div
            key={title}
            className={`hov-card ${visible ? `fade-up d-${(ci + 1) * 100}` : ""}`}
            style={{
              borderRadius: 14,
              border: `1px solid ${bc}`,
              background: C.card,
              padding: 22,
              opacity: visible ? undefined : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color,
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 16,
              }}
            >
              <Icon size={16} /> {title}
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {items.map((it) => (
                <li
                  key={it}
                  className="skill-li"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    color: "#94a3b8",
                    fontSize: 13,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: color,
                      flexShrink: 0,
                    }}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
