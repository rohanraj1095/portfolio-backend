import { useEffect, useRef } from "react";
import { C } from "../../styles/colors";

const COLORS = [C.mint, C.gold, "#5bb6f7"];
const LINK_DIST = 130;     // px — max distance to draw a connecting line
const PARTICLE_COUNT_DESKTOP = 55;
const PARTICLE_COUNT_MOBILE = 28;

/**
 * A lightweight canvas "constellation" effect: soft dots drifting slowly,
 * with faint lines connecting nearby ones (fading with distance). No
 * external library — plain canvas + rAF, so it's cheap on the one screen
 * where load speed matters most (the launch/boot screen).
 */
export function ConstellationCanvas({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

    let width, height, dpr;
    let particles = [];
    let rafId = null;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1 + Math.random() * 1.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // update positions, wrap around edges
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // connecting lines (only nearby pairs — O(n^2) but n is small)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.18;
            ctx.strokeStyle = C.mint;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.globalAlpha = 1;
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduceMotion) rafId = requestAnimationFrame(step);
    };

    resize();
    particles = spawn();
    step(); // draw at least one frame even if reduced-motion

    const onResize = () => {
      resize();
      particles = spawn();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
