import { useState, useEffect } from "react";

/**
 * Types out `text` character by character.
 * Calls onDone() once finished so the parent can reveal the next line.
 */
export function TypedLine({ text, speed = 14, onDone, startDelay = 0 }) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;
    if (!text) { onDone && onDone(); return; }
    if (shown.length >= text.length) { onDone && onDone(); return; }
    const t = setTimeout(() => setShown(text.slice(0, shown.length + 1)), speed);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, shown]);

  return <>{shown}</>;
}
