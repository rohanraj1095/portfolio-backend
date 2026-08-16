export const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  button, a { font-family: inherit; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-thumb { background: #1e3329; border-radius: 4px; }

  @keyframes availGlow {
    0%   { box-shadow: 0 0 4px 2px rgba(62,232,168,0.6), 0 0 12px 4px rgba(62,232,168,0.25); }
    50%  { box-shadow: 0 0 12px 5px rgba(62,232,168,1),  0 0 30px 10px rgba(62,232,168,0.5); }
    100% { box-shadow: 0 0 4px 2px rgba(62,232,168,0.6), 0 0 12px 4px rgba(62,232,168,0.25); }
  }
  .avail-dot {
    width: 9px; height: 9px; border-radius: 50%;
    background: #3ee8a8;
    animation: availGlow 1.4s ease-in-out infinite;
  }

  .avail-badge {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 5px 14px; border-radius: 30px;
    border: 1px solid rgba(62,232,168,0.4);
    background: rgba(62,232,168,0.06);
  }
  
  .name-shine {
  background: linear-gradient(
    120deg,
    #3ee8a8 0%,
    #3ee8a8 40%,
    #ffffff 50%,
    #3ee8a8 60%,
    #3ee8a8 100%
  );
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 24px rgba(62, 232, 168, 0.35);
  animation: nameShine 3.5s ease-in-out infinite;
}

@keyframes nameShine {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

  .name-glow {
    color: #3ee8a8;
    text-shadow: 0 0 24px rgba(62,232,168,0.35);
  }

  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }
  .term-float { animation: floatY 6s ease-in-out infinite; will-change: transform; }

  @keyframes termGlow {
    0%,100% { box-shadow: 0 0 0 rgba(62,232,168,0); }
    50%      { box-shadow: 0 0 40px rgba(62,232,168,0.1); }
  }
  .term-glow { animation: termGlow 4s ease-in-out infinite; }

  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .cursor-blink { animation: blink 1s step-end infinite; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up     { animation: fadeUp 0.55s ease both; }
  .d-100 { animation-delay: 0.10s; }
  .d-150 { animation-delay: 0.15s; }
  .d-200 { animation-delay: 0.20s; }
  .d-300 { animation-delay: 0.30s; }
  .d-350 { animation-delay: 0.35s; }
  .d-400 { animation-delay: 0.40s; }
  .d-450 { animation-delay: 0.45s; }
  .d-500 { animation-delay: 0.50s; }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  .scale-in { animation: scaleIn 0.5s ease both; }

  .hov-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease !important;
  }
  .hov-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 20px 50px rgba(0,0,0,0.45) !important;
    border-color: rgba(62,232,168,0.28) !important;
  }

  .btn-mint {
    background: #3ee8a8; position: relative; overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-mint:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(62,232,168,0.4); }
  .btn-mint::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.3) 50%, transparent 65%);
    background-size: 200% 100%;
    animation: shimmer 2.4s infinite;
  }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }

  .btn-outline { transition: transform 0.2s, background 0.2s, box-shadow 0.2s !important; }
  .btn-outline:hover { transform: translateY(-2px) !important; background: rgba(255,255,255,0.06) !important; }

  .btn-gold { transition: transform 0.2s, box-shadow 0.2s !important; }
  .btn-gold:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 26px rgba(243,201,105,0.4) !important; }

  .soc-icon { transition: transform 0.2s, color 0.2s, border-color 0.2s !important; }
  .soc-icon:hover { transform: translateY(-3px) scale(1.1) !important; color: #3ee8a8 !important; border-color: rgba(62,232,168,0.55) !important; }

  .nav-btn { transition: color 0.2s !important; }
  .nav-btn:hover { color: #fff !important; }

  .filter-btn { transition: all 0.2s !important; }
  .filter-btn:hover { border-color: rgba(62,232,168,0.35) !important; color: #fff !important; }

  .skill-li { transition: color 0.2s, padding-left 0.2s; }
  .skill-li:hover { color: #fff !important; padding-left: 5px; }

  @keyframes ringPulse {
    0%   { box-shadow: 0 0 0 0 rgba(62,232,168,0.55); }
    70%  { box-shadow: 0 0 0 10px rgba(62,232,168,0); }
    100% { box-shadow: 0 0 0 0 rgba(62,232,168,0); }
  }
  .ring-pulse { animation: ringPulse 2.2s ease-out infinite; }

  @keyframes statIconGlow {
    0%,100% { box-shadow: none; }
    50%      { box-shadow: 0 0 18px currentColor; }
  }
  .stat-icon { animation: statIconGlow 2.5s ease-in-out infinite; }

  .term-cursor::after {
    content: '_'; color: #3ee8a8;
    animation: blink 1s step-end infinite;
  }

  .proj-tag { transition: background 0.2s, border-color 0.2s; }
  .proj-tag:hover { background: rgba(62,232,168,0.1) !important; border-color: rgba(62,232,168,0.3) !important; }

  .dl-btn { transition: all 0.2s !important; }
  .dl-btn:hover { background: rgba(243,201,105,0.1) !important; transform: translateY(-1px) !important; }

  .logo-wrap { transition: opacity 0.2s; cursor: pointer; }
  .logo-wrap:hover { opacity: 0.85; }

  .gh-scroll::-webkit-scrollbar { height: 5px; }
  .gh-scroll::-webkit-scrollbar-track { background: #1a2a22; border-radius: 3px; }
  .gh-scroll::-webkit-scrollbar-thumb { background: rgba(62,232,168,0.5); border-radius: 3px; }
  .gh-scroll::-webkit-scrollbar-thumb:hover { background: #3ee8a8; }

  input::placeholder { color: #334155; }

  /* ============ HERO REDESIGN ============ */

  @keyframes gridDrift {
    0%   { transform: translate3d(0,0,0); }
    100% { transform: translate3d(-48px,-48px,0); }
  }
  .hero-grid {
    background-image:
      linear-gradient(rgba(62,232,168,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(62,232,168,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
    animation: gridDrift 14s linear infinite;
    will-change: transform;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 90%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 90%);
  }

  @keyframes blobDrift1 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(30px,-20px) scale(1.08); }
  }
  @keyframes blobDrift2 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(-25px,25px) scale(1.06); }
  }
  .blob-1 { animation: blobDrift1 12s ease-in-out infinite; }
  .blob-2 { animation: blobDrift2 15s ease-in-out infinite; }

  @keyframes particleRise {
    0%   { transform: translateY(0) translateX(0); opacity: 0; }
    10%  { opacity: 0.7; }
    90%  { opacity: 0.3; }
    100% { transform: translateY(-140px) translateX(var(--drift, 10px)); opacity: 0; }
  }
  .hero-particle { animation: particleRise linear infinite; }

  @keyframes avatarFloat {
    0%,100% { transform: translateY(0) rotate(-1.2deg) scale(1); }
    50%      { transform: translateY(-14px) rotate(1.2deg) scale(1.015); }
  }
  .avatar-float { animation: avatarFloat 6s ease-in-out infinite; }

  @keyframes avatarGlowPulse {
    0%,100% { opacity: 0.55; transform: scale(1); }
    50%      { opacity: 0.9; transform: scale(1.08); }
  }
  .avatar-glow { animation: avatarGlowPulse 6s ease-in-out infinite; }

  @keyframes shadowPulse {
    0%,100% { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
    50%      { opacity: 0.25; transform: translateX(-50%) scaleX(0.8); }
  }
  .avatar-shadow { animation: shadowPulse 6s ease-in-out infinite; }

  @keyframes badgeFloat {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }
  .tech-badge {
    animation: badgeFloat 4.5s ease-in-out infinite;
    transition: box-shadow 0.25s, border-color 0.25s;
    will-change: transform;
  }
  .tech-badge:hover {
    box-shadow: 0 0 22px currentColor;
    border-color: currentColor !important;
  }

  @keyframes scrollBounce {
    0%,100% { transform: translateY(0); opacity: 0.5; }
    50%      { transform: translateY(8px); opacity: 1; }
  }
  .scroll-bounce { animation: scrollBounce 1.8s ease-in-out infinite; will-change: transform; }

  .hero-cta { position: relative; overflow: hidden; }
  .ripple-span {
    position: absolute; border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transform: scale(0);
    animation: rippleAnim 0.6s ease-out;
    pointer-events: none;
  }
  @keyframes rippleAnim { to { transform: scale(3); opacity: 0; } }

  @keyframes noiseShift {
    0%,100% { transform: translate(0,0); }
    50%      { transform: translate(-2%,2%); }
  }
  .hero-noise { animation: noiseShift 8s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .hero-grid, .blob-1, .blob-2, .hero-particle, .avatar-float, .avatar-glow,
    .avatar-shadow, .tech-badge, .scroll-bounce, .hero-noise, .term-float,
    .name-glow, .avail-dot, .avail-badge, .cursor-blink, .fade-up, .scale-in {
      animation: none !important;
    }
  }
`;
