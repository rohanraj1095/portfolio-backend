import { useState } from "react";
import { Code2, Download, Menu, X } from "lucide-react";
import { C } from "../../styles/colors";
import { NAV, PROFILE } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export function Navbar({ active, setActive }) {
  const [open, setOpen] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const compact = isMobile || isTablet;

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: `1px solid ${C.line}`,
          background: "rgba(10,15,12,0.94)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <div
            className="logo-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 800,
              color: "#fff",
              fontSize: 17,
            }}
          >
            <span style={{ color: "#ffff" }}>{"<"}</span>
            <span className="name-shine"> Rohan Raj</span>
            <span style={{ color: "#ffff" }}>{"/>"}</span>
          </div>
          {!compact && (
            <nav style={{ display: "flex", gap: 24 }}>
              {NAV.map((n) => (
                <button
                  key={n}
                  className="nav-btn"
                  onClick={() => setActive(n)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: active === n ? 600 : 400,
                    color: active === n ? C.mint : "#94a3b8",
                    borderBottom: `2px solid ${active === n ? C.mint : "transparent"}`,
                    paddingBottom: 3,
                  }}
                >
                  {n}
                </button>
              ))}
            </nav>
          )}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {!isMobile && (
              <a
                href={PROFILE.resume}
                download
                className="dl-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  border: `1px solid rgba(243,201,105,0.5)`,
                  color: C.gold,
                  background: "transparent",
                  borderRadius: 8,
                  padding: "7px 12px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Download Resume <Download size={13} />
              </a>
            )}
            {compact && (
              <button
                onClick={() => setOpen(true)}
                style={{
                  background: "none",
                  border: `1px solid ${C.line}`,
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#94a3b8",
                }}
              >
                <Menu size={18} />
              </button>
            )}
          </div>
        </div>
      </header>
      {open && (
        <div
          className="scale-in"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(10,15,12,0.98)",
            backdropFilter: "blur(14px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: `1px solid ${C.line}`,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: `1px solid ${C.line}`,
                borderRadius: 8,
                width: 36,
                height: 36,
                cursor: "pointer",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={18} />
            </button>
          </div>
          <nav
            style={{
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {NAV.map((n, i) => (
              <button
                key={n}
                className={`fade-up d-${Math.min(i + 1, 5) * 100}`}
                onClick={() => {
                  setActive(n);
                  setOpen(false);
                }}
                style={{
                  textAlign: "left",
                  padding: "13px 16px",
                  borderRadius: 10,
                  background:
                    active === n ? "rgba(62,232,168,0.1)" : "transparent",
                  color: active === n ? C.mint : "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: active === n ? 600 : 400,
                  transition: "background 0.2s",
                }}
              >
                {n}
              </button>
            ))}
          </nav>
          <div
            style={{
              padding: "16px 20px",
              borderTop: `1px solid ${C.line}`,
              marginTop: "auto",
            }}
          >
            <a
              href={PROFILE.resume}
              download
              className="btn-gold"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                border: `1px solid rgba(243,201,105,0.5)`,
                color: C.gold,
                background: "transparent",
                borderRadius: 10,
                padding: "12px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Download Resume <Download size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
