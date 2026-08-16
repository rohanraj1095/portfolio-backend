import { useEffect, useRef } from "react";
import { C } from "../../styles/colors";

const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`,
  );

export function HeroBackground() {
  const wrapRef = useRef(null);
  const glowRef = useRef(null);
  const raf = useRef(null);

  // Mouse-follow glow moves via direct DOM transform updates (no React
  // re-render, no "background" repaint) — this alone was the biggest
  // perf hit before, since setState-on-mousemove re-rendered the whole
  // background tree (grid, blobs, 22 particles) on every frame.
  useEffect(() => {
    const el = wrapRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const onMove = (e) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        raf.current = null;
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // fixed particle set — generated once so they don't jitter on re-render.
  // Kept modest (14) since each one is a separate animated compositor layer.
  // const particles = useRef(
  //   Array.from({ length: 14 }, (_, i) => ({
  //     id: i,
  //     left: Math.random() * 100,
  //     bottom: Math.random() * 30,
  //     size: 1.5 + Math.random() * 2.5,
  //     duration: 11 + Math.random() * 10,
  //     delay: Math.random() * 10,
  //     drift: `${(Math.random() * 40 - 20).toFixed(0)}px`,
  //     color: i % 3 === 0 ? C.gold : C.mint,
  //   }))
  // ).current;

  const particles = useRef(
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      bottom: Math.random() * 100, // was * 30 — now spans full height
      size: 1.5 + Math.random() * 3, // slightly bigger range
      duration: 11 + Math.random() * 10,
      delay: Math.random() * 10,
      drift: `${(Math.random() * 40 - 20).toFixed(0)}px`,
      color: i % 3 === 0 ? C.gold : i % 3 === 1 ? C.mint : "#5bb6f7", // 3-color mix instead of 2
    })),
  ).current;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "auto",
      }}
    >
      {/* animated grid */}
      <div
        className="hero-grid"
        style={{
          position: "absolute",
          top: -48,
          left: -48,
          right: -48,
          bottom: -48,
        }}
      />

      {/* soft radial mouse-follow glow — transform-only, GPU composited */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(62,232,168,0.10), transparent 60%)",
          willChange: "transform",
        }}
      />

      {/* gradient lighting blobs */}
      <div
        className="blob-1"
        style={{
          position: "absolute",
          top: "-10%",
          right: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(62,232,168,0.16), transparent 70%)",
          filter: "blur(50px)",
          willChange: "transform",
        }}
      />
      <div
        className="blob-2"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "0%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(243,201,105,0.10), transparent 70%)",
          filter: "blur(50px)",
          willChange: "transform",
        }}
      />

      {/* floating particles */}
      {/* {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: "transform",
            "--drift": p.drift,
          }}
        />
      ))} */}

      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: "transform",
            "--drift": p.drift,
          }}
        />
      ))}

      {/* subtle noise texture — static, no animation (was repainting on a filter'd layer) */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `url("${NOISE_SVG}")`,
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      />

      {/* vignette so content stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 90% 70% at 50% 40%, transparent 40%, ${C.bg} 95%)`,
        }}
      />
    </div>
  );
}
