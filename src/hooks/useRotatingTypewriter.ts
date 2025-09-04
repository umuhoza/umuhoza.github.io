import { useEffect, useState } from "react";

export interface TypewriterOptions {
  words: string[];
  typeSpeed?: number; // ms per character when typing
  deleteSpeed?: number; // ms per character when deleting
  holdDelay?: number; // ms to hold full word before deleting
  loop?: boolean;
}

export function useRotatingTypewriter({
  words,
  typeSpeed = 55,
  deleteSpeed = 35,
  holdDelay = 1800,
  loop = true,
}: TypewriterOptions) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // char position
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!words.length) return; // safety

    // Completed typing a word
    if (!deleting && subIndex === words[index].length) {
      const hold = setTimeout(() => setDeleting(true), holdDelay);
      return () => clearTimeout(hold);
    }

    // Finished deleting -> next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => {
        const next = prev + 1;
        if (next < words.length) return next;
        return loop ? 0 : prev; // stay on last if not looping
      });
      return; // wait for next tick
    }

    const timeout = setTimeout(
      () => {
        const nextSubIndex = subIndex + (deleting ? -1 : 1);
        setSubIndex(nextSubIndex);
        setDisplay(words[index].substring(0, nextSubIndex));
      },
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    index,
    deleting,
    words,
    typeSpeed,
    deleteSpeed,
    holdDelay,
    loop,
  ]);

  return display;
}

export default useRotatingTypewriter;
