import { C } from "../../styles/colors";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { InteractiveTerminal } from "../terminal/InteractiveTerminal";
import { Typewriter } from "react-simple-typewriter";
import { HeroBackground } from "../hero/HeroBackground";
import { FloatingBadges } from "../hero/FloatingBadges";
import { HeroButtons } from "../hero/HeroButtons";
import { SocialLinks } from "../hero/SocialLinks";
import { ScrollIndicator } from "../hero/ScrollIndicator";

export function Hero() {
  const { isMobile, isTablet } = useBreakpoint();
  const compact = isMobile || isTablet;

  const scrollToProjects = () => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: compact ? "auto" : "94vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <HeroBackground />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1250,
          width: "100%",
          margin: "0 auto",
          padding: compact ? "36px 20px 64px" : "40px 20px 60px",
          display: "flex",
          flexDirection: compact ? "column" : "row",
          alignItems: compact ? "center" : "flex-start",
          gap: compact ? 40 : 40,
        }}
      >
        {/* left: my details + floating tech badges */}
        <div
          style={{
            flex: compact ? "none" : "0 1 480px",
            width: compact ? "100%" : "auto",
          }}
        >
          <div className="fade-up" style={{ marginBottom: 20 }}>
            <span className="avail-badge">
              <span className="avail-dot" />
              <span
                style={{
                  color: C.mint,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                AVAILABLE FOR WORK
              </span>
            </span>
          </div>

          <h1
            className="fade-up d-100"
            style={{
              fontFamily: "'Kurale', serif",
              fontSize: isMobile ? 32 : isTablet ? 40 : 50,
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 14,
              color: "#fff",
            }}
          >
            Hi, I'm{" "}
            <span className="" style={{ color: C.mint }}>
              Rohan Raj
            </span>
          </h1>

          <div
            className="fade-up d-150"
            style={{
              fontFamily: "'Kurale', serif",
              fontSize: isMobile ? 26 : 32,
              fontWeight: 700,
              color: C.gold,
              marginBottom: 18,
              minHeight: 26,
            }}
          >
            <Typewriter
              words={[
                "Backend Developer",
                "REST APIs",
                "MongoDB & Redis",
                "JWT Authentication",
                "API Security",
                "and more...",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </div>

          <p
            className="fade-up d-200"
            style={{
              color: "#94a3b8",
              marginBottom: 26,
              lineHeight: 1.8,
              fontSize: 14,
              maxWidth: 440,
              textAlign: "justify",
            }}
          >
            Building scalable REST APIs, backend systems and performant
            applications using{" "}
            <span style={{ color: "#cbd5e1", fontWeight: 600 }}>
              Node.js, Express.js, MongoDB, PostgreSQL and Redis
            </span>
            . 2+ years turning production ideas into reliable backend systems.
          </p>

          <HeroButtons onViewProjects={scrollToProjects} />

          <div className="fade-up d-350" style={{ marginBottom: 8 }}>
            <SocialLinks />
          </div>

          {/* floating tech badges — one row under the left section */}
          <FloatingBadges />
        </div>

        {/* right: terminal only, top-aligned with the left column */}
        <div
          style={{
            flex: compact ? "none" : "1 1 500px",
            width: compact ? "100%" : "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="scale-in d-300"
            style={{ width: "100%", maxWidth: 920 }}
          >
            <div className="term-float">
              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </div>

      {!compact && <ScrollIndicator />}
    </section>
  );
}
