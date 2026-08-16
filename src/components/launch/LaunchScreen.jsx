// import { useState, useEffect, useRef } from "react";
// import { C } from "../../styles/colors";
// import styles from "./LaunchScreen.module.css";
// import { ConstellationCanvas } from "./ConstellationCanvas";

// const NAME_SUFFIX = "ohan Raj";
// const TYPE_SPEED = 36;

// const NOISE_SVG =
//   "data:image/svg+xml;utf8," +
//   encodeURIComponent(
//     `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`,
//   );

// const TIMING = {
//   INITIAL_HOLD: 700,
//   POST_TYPE_PAUSE: 100,
//   ROLE_FADE: 320,
//   TAGLINE_DELAY: 180,
//   TAGLINE_FADE: 320,
//   LOADING_DELAY: 180,
//   LOADING_HOLD: 400,
//   EXIT_FADE: 600,
// };

// export function LaunchScreen({ onReveal, onComplete }) {
//   const [phase, setPhase] = useState("initial");
//   const [typedChars, setTypedChars] = useState(0);
//   const [mounted, setMounted] = useState(true);
//   const timers = useRef([]);

//   const schedule = (fn, delay) => {
//     const id = setTimeout(fn, delay);
//     timers.current.push(id);
//     return id;
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     schedule(() => {
//       setPhase("typing");
//       setTypedChars(0);
//     }, TIMING.INITIAL_HOLD);

//     return () => {
//       document.body.style.overflow = "";
//       timers.current.forEach(clearTimeout);
//     };
//   }, []);

//   useEffect(() => {
//     if (phase !== "typing") return;

//     if (typedChars < NAME_SUFFIX.length) {
//       const id = setTimeout(() => setTypedChars((c) => c + 1), TYPE_SPEED);
//       return () => clearTimeout(id);
//     }

//     const id = schedule(() => setPhase("role"), TIMING.POST_TYPE_PAUSE);
//     return () => clearTimeout(id);
//   }, [phase, typedChars]);

//   useEffect(() => {
//     if (phase !== "role") return;
//     const id = schedule(
//       () => setPhase("tagline"),
//       TIMING.ROLE_FADE + TIMING.TAGLINE_DELAY,
//     );
//     return () => clearTimeout(id);
//   }, [phase]);

//   useEffect(() => {
//     if (phase !== "tagline") return;
//     const id = schedule(
//       () => setPhase("loading"),
//       TIMING.TAGLINE_FADE + TIMING.LOADING_DELAY,
//     );
//     return () => clearTimeout(id);
//   }, [phase]);

//   useEffect(() => {
//     if (phase !== "loading") return;
//     const id = schedule(() => setPhase("exit"), TIMING.LOADING_HOLD);
//     return () => clearTimeout(id);
//   }, [phase]);

//   useEffect(() => {
//     if (phase !== "exit") return;
//     onReveal?.();
//     const id = schedule(() => {
//       setMounted(false);
//       onComplete?.();
//     }, TIMING.EXIT_FADE);
//     return () => clearTimeout(id);
//   }, [phase, onReveal, onComplete]);

//   if (!mounted) return null;

//   const showRole =
//     phase === "role" ||
//     phase === "tagline" ||
//     phase === "loading" ||
//     phase === "exit";
//   const showTagline =
//     phase === "tagline" || phase === "loading" || phase === "exit";
//   const showLoading = phase === "loading" || phase === "exit";
//   const isTyping = phase === "typing";
//   const isInitial = phase === "initial";

//   return (
//     <div
//       className={`${styles.overlay} ${phase === "exit" ? styles.overlayExit : ""}`}
//       aria-hidden={phase === "exit"}
//       aria-label="Loading portfolio"
//     >
//       <div className={styles.bg} aria-hidden="true">
//         <div className={`hero-grid ${styles.grid}`} />
//         <div className={`blob-1 ${styles.blobMint}`} />
//         <div className={`blob-2 ${styles.blobGold}`} />
//         <ConstellationCanvas />
//         <div className={styles.centerGlow} />

//         <div
//           className={styles.noise}
//           style={{ backgroundImage: `url("${NOISE_SVG}")` }}
//         />
//         <div className={styles.vignette} />
//       </div>

//       <div className={styles.content}>
//         <div className={styles.contentHalo} aria-hidden="true" />
//         <div className={styles.nameBlock}>
//           {isInitial ? (
//             <span className={styles.nameInitial}>
//               <span className={styles.bracket}>&lt;</span>
//               <span className={styles.nameInitialText}>RR</span>
//               <span className={styles.bracket}>/&gt;</span>
//             </span>
//           ) : (
//             <span>
//               <span className={styles.bracket}>&lt;</span>
//               <span className={styles.nameText}>
//                 R{NAME_SUFFIX.slice(0, typedChars)}
//               </span>
//               {isTyping && typedChars < NAME_SUFFIX.length && (
//                 <span className={`${styles.loadingCursor} cursor-blink`}>
//                   |
//                 </span>
//               )}
//               <span className={styles.bracket}>/&gt;</span>
//             </span>
//           )}
//         </div>

//         <p className={`${styles.role} ${showRole ? styles.roleVisible : ""}`}>
//           Backend Engineer
//         </p>

//         <p
//           className={`${styles.tagline} ${showTagline ? styles.taglineVisible : ""}`}
//         >
//           Building <span className={styles.taglineAccent}>scalable APIs</span>.
//           <br />
//           Crafting{" "}
//           <span className={styles.taglineAccent}>reliable systems</span>.
//         </p>

//         <p
//           className={`${styles.loading} ${showLoading ? styles.loadingVisible : ""}`}
//         >
//           Launching Portfolio
//           <span className={styles.loadingDots} />
//           <span className={styles.loadingCursor}>|</span>
//         </p>

//         <div
//           className={`${styles.loadingBar} ${showLoading ? styles.loadingBarVisible : ""}`}
//           aria-hidden="true"
//         >
//           <div className={styles.loadingBarFill} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from "react";
// import { C } from "../../styles/colors";
// import styles from "./LaunchScreen.module.css";
// import { ConstellationCanvas } from "./ConstellationCanvas";

// const NAME_SUFFIX = "ohan Raj";
// const TYPE_SPEED = 36;

// const BOOT_LOG = [
//   "Node.js runtime initialized",
//   "Express server connected",
//   "Database pool ready",
// ];
// const BOOT_LINE_GAP = 180; // ms between each boot log line appearing

// const NOISE_SVG =
//   "data:image/svg+xml;utf8," +
//   encodeURIComponent(
//     `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`,
//   );

// const TIMING = {
//   INITIAL_HOLD: 700,
//   POST_TYPE_PAUSE: 100,
//   ROLE_FADE: 320,
//   TAGLINE_DELAY: 180,
//   TAGLINE_FADE: 320,
//   BOOT_LOG_HOLD: 260,
//   LOADING_DELAY: 180,
//   LOADING_HOLD: 400,
//   EXIT_FADE: 600,
// };

// export function LaunchScreen({ onReveal, onComplete }) {
//   const [phase, setPhase] = useState("initial");
//   const [typedChars, setTypedChars] = useState(0);
//   const [bootLineCount, setBootLineCount] = useState(0);
//   const [mounted, setMounted] = useState(true);
//   const timers = useRef([]);

//   const schedule = (fn, delay) => {
//     const id = setTimeout(fn, delay);
//     timers.current.push(id);
//     return id;
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     schedule(() => {
//       setPhase("typing");
//       setTypedChars(0);
//     }, TIMING.INITIAL_HOLD);

//     return () => {
//       document.body.style.overflow = "";
//       timers.current.forEach(clearTimeout);
//     };
//   }, []);

//   useEffect(() => {
//     if (phase !== "typing") return;

//     if (typedChars < NAME_SUFFIX.length) {
//       const id = setTimeout(() => setTypedChars((c) => c + 1), TYPE_SPEED);
//       return () => clearTimeout(id);
//     }

//     const id = schedule(() => setPhase("role"), TIMING.POST_TYPE_PAUSE);
//     return () => clearTimeout(id);
//   }, [phase, typedChars]);

//   useEffect(() => {
//     if (phase !== "role") return;
//     const id = schedule(
//       () => setPhase("tagline"),
//       TIMING.ROLE_FADE + TIMING.TAGLINE_DELAY,
//     );
//     return () => clearTimeout(id);
//   }, [phase]);

//   useEffect(() => {
//     if (phase !== "tagline") return;

//     if (bootLineCount < BOOT_LOG.length) {
//       const id = setTimeout(
//         () => setBootLineCount((c) => c + 1),
//         bootLineCount === 0 ? TIMING.TAGLINE_DELAY : BOOT_LINE_GAP,
//       );
//       return () => clearTimeout(id);
//     }

//     const id = schedule(() => setPhase("loading"), TIMING.BOOT_LOG_HOLD);
//     return () => clearTimeout(id);
//   }, [phase, bootLineCount]);

//   useEffect(() => {
//     if (phase !== "loading") return;
//     const id = schedule(() => setPhase("exit"), TIMING.LOADING_HOLD);
//     return () => clearTimeout(id);
//   }, [phase]);

//   useEffect(() => {
//     if (phase !== "exit") return;
//     onReveal?.();
//     const id = schedule(() => {
//       setMounted(false);
//       onComplete?.();
//     }, TIMING.EXIT_FADE);
//     return () => clearTimeout(id);
//   }, [phase, onReveal, onComplete]);

//   if (!mounted) return null;

//   const showRole =
//     phase === "role" ||
//     phase === "tagline" ||
//     phase === "loading" ||
//     phase === "exit";
//   const showLoading = phase === "loading" || phase === "exit";
//   const isTyping = phase === "typing";
//   const isInitial = phase === "initial";

//   return (
//     <div
//       className={`${styles.overlay} ${phase === "exit" ? styles.overlayExit : ""}`}
//       aria-hidden={phase === "exit"}
//       aria-label="Loading portfolio"
//     >
//       <div className={styles.bg} aria-hidden="true">
//         <div className={`hero-grid ${styles.grid}`} />
//         <div className={`blob-1 ${styles.blobMint}`} />
//         <div className={`blob-2 ${styles.blobGold}`} />
//         <ConstellationCanvas />
//         <div className={styles.centerGlow} />

//         <div
//           className={styles.noise}
//           style={{ backgroundImage: `url("${NOISE_SVG}")` }}
//         />
//         <div className={styles.vignette} />
//       </div>

//       <div className={styles.content}>
//         <div className={styles.contentHalo} aria-hidden="true" />
//         <div className={styles.nameBlock}>
//           {isInitial ? (
//             <span className={styles.nameInitial}>
//               <span className={styles.bracket}>&lt;</span>
//               <span className={styles.nameInitialText}>RR</span>
//               <span className={styles.bracket}>/&gt;</span>
//             </span>
//           ) : (
//             <span>
//               <span className={styles.bracket}>&lt;</span>
//               <span className={styles.nameText}>
//                 R{NAME_SUFFIX.slice(0, typedChars)}
//               </span>
//               {isTyping && typedChars < NAME_SUFFIX.length && (
//                 <span className={`${styles.loadingCursor} cursor-blink`}>
//                   |
//                 </span>
//               )}
//               <span className={styles.bracket}>/&gt;</span>
//             </span>
//           )}
//         </div>

//         <p className={`${styles.role} ${showRole ? styles.roleVisible : ""}`}>
//           Backend Engineer
//         </p>

//         <div className={styles.bootLog} aria-hidden="true">
//           {BOOT_LOG.map((line, i) => (
//             <p
//               key={line}
//               className={`${styles.bootLine} ${i < bootLineCount ? styles.bootLineVisible : ""}`}
//             >
//               <span className={styles.bootCheck}>✓</span> {line}
//             </p>
//           ))}
//         </div>

//         <p
//           className={`${styles.loading} ${showLoading ? styles.loadingVisible : ""}`}
//         >
//           Launching Portfolio
//           <span className={styles.loadingDots} />
//           <span className={styles.loadingCursor}>|</span>
//         </p>

//         <div
//           className={`${styles.loadingBar} ${showLoading ? styles.loadingBarVisible : ""}`}
//           aria-hidden="true"
//         >
//           <div className={styles.loadingBarFill} />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { C } from "../../styles/colors";
import styles from "./LaunchScreen.module.css";
import { ConstellationCanvas } from "./ConstellationCanvas";

const NAME_SUFFIX = "ohan Raj";
const TYPE_SPEED = 36;

const ROLE_WORDS = ["Backend Engineer", "API Architect", "Problem Solver"];
const ROLE_WORD_INTERVAL = 280; // ms each word stays before cross-fading to next

const BOOT_LOG = [
  "Node.js runtime initialized",
  "Express server connected",
  "Database pool ready",
];
const BOOT_LINE_GAP = 180; // ms between each boot log line appearing

const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`,
  );

const TIMING = {
  INITIAL_HOLD: 700,
  POST_TYPE_PAUSE: 100,
  ROLE_HOLD: 320,
  BOOT_LOG_DELAY: 180,
  BOOT_LOG_HOLD: 320,
  LOADING_HOLD: 420,
  EXIT_FADE: 600,
};

export function LaunchScreen({ onReveal, onComplete }) {
  const [phase, setPhase] = useState("initial");
  const [typedChars, setTypedChars] = useState(0);
  const [roleWordIndex, setRoleWordIndex] = useState(0);
  const [bootLineCount, setBootLineCount] = useState(0);
  const [mounted, setMounted] = useState(true);
  const timers = useRef([]);

  const schedule = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timers.current.push(id);
    return id;
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    schedule(() => {
      setPhase("typing");
      setTypedChars(0);
    }, TIMING.INITIAL_HOLD);

    return () => {
      document.body.style.overflow = "";
      timers.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;

    if (typedChars < NAME_SUFFIX.length) {
      const id = setTimeout(() => setTypedChars((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(id);
    }

    const id = schedule(() => {
      setRoleWordIndex(0);
      setPhase("role");
    }, TIMING.POST_TYPE_PAUSE);
    return () => clearTimeout(id);
  }, [phase, typedChars]);

  useEffect(() => {
    if (phase !== "role") return;

    if (roleWordIndex < ROLE_WORDS.length - 1) {
      const id = setTimeout(
        () => setRoleWordIndex((i) => i + 1),
        ROLE_WORD_INTERVAL,
      );
      return () => clearTimeout(id);
    }

    const id = schedule(() => {
      setBootLineCount(0);
      setPhase("bootlog");
    }, TIMING.ROLE_HOLD);
    return () => clearTimeout(id);
  }, [phase, roleWordIndex]);

  useEffect(() => {
    if (phase !== "bootlog") return;

    if (bootLineCount < BOOT_LOG.length) {
      const id = setTimeout(
        () => setBootLineCount((c) => c + 1),
        bootLineCount === 0 ? TIMING.BOOT_LOG_DELAY : BOOT_LINE_GAP,
      );
      return () => clearTimeout(id);
    }

    const id = schedule(() => setPhase("loading"), TIMING.BOOT_LOG_HOLD);
    return () => clearTimeout(id);
  }, [phase, bootLineCount]);

  useEffect(() => {
    if (phase !== "loading") return;
    const id = schedule(() => setPhase("exit"), TIMING.LOADING_HOLD);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    onReveal?.();
    const id = schedule(() => {
      setMounted(false);
      onComplete?.();
    }, TIMING.EXIT_FADE);
    return () => clearTimeout(id);
  }, [phase, onReveal, onComplete]);

  if (!mounted) return null;

  const PHASES_ORDER = [
    "initial",
    "typing",
    "role",
    "bootlog",
    "loading",
    "exit",
  ];
  const atOrPast = (p) =>
    PHASES_ORDER.indexOf(phase) >= PHASES_ORDER.indexOf(p);

  const showRole = atOrPast("role");
  const showBootLog = atOrPast("bootlog");
  const showLoading = atOrPast("loading");
  const isTyping = phase === "typing";
  const isInitial = phase === "initial";

  return (
    <div
      className={`${styles.overlay} ${phase === "exit" ? styles.overlayExit : ""}`}
      aria-hidden={phase === "exit"}
      aria-label="Loading portfolio"
    >
      <div className={styles.bg} aria-hidden="true">
        <div className={`hero-grid ${styles.grid}`} />
        <div className={`blob-1 ${styles.blobMint}`} />
        <div className={`blob-2 ${styles.blobGold}`} />
        <ConstellationCanvas />
        <div className={styles.centerGlow} />

        <div
          className={styles.noise}
          style={{ backgroundImage: `url("${NOISE_SVG}")` }}
        />
        <div className={styles.vignette} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentHalo} aria-hidden="true" />
        <div className={styles.nameBlock}>
          {isInitial ? (
            <span className={styles.nameInitial}>
              <span className={styles.bracket}>&lt;</span>
              <span className={styles.nameInitialText}>RR</span>
              <span className={styles.bracket}>/&gt;</span>
            </span>
          ) : (
            <span>
              <span className={styles.bracket}>&lt;</span>
              <span className={styles.nameText}>
                R{NAME_SUFFIX.slice(0, typedChars)}
              </span>
              {isTyping && typedChars < NAME_SUFFIX.length && (
                <span className={`${styles.loadingCursor} cursor-blink`}>
                  |
                </span>
              )}
              <span className={styles.bracket}>/&gt;</span>
            </span>
          )}
        </div>

        <p className={`${styles.role} ${showRole ? styles.roleVisible : ""}`}>
          <span key={roleWordIndex} className={styles.roleWord}>
            {ROLE_WORDS[roleWordIndex]}
          </span>
        </p>

        <div className={styles.bootLog} aria-hidden="true">
          {BOOT_LOG.map((line, i) => (
            <p
              key={line}
              className={`${styles.bootLine} ${showBootLog && i < bootLineCount ? styles.bootLineVisible : ""}`}
            >
              <span className={styles.bootCheck}>✓</span> {line}
            </p>
          ))}
        </div>

        <p
          className={`${styles.loading} ${showLoading ? styles.loadingVisible : ""}`}
        >
          Launching Portfolio
          <span className={styles.loadingDots} />
          <span className={styles.loadingCursor}>|</span>
        </p>

        <div
          className={`${styles.loadingBar} ${showLoading ? styles.loadingBarVisible : ""}`}
          aria-hidden="true"
        >
          <div className={styles.loadingBarFill} />
        </div>
      </div>
    </div>
  );
}
