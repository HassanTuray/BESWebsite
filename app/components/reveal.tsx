"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  from?: "up" | "down" | "left" | "right";
  delay?: number;                 // ms
  once?: boolean;                 // animate only the first time it appears
  threshold?: number | number[];  // portion visible before triggering
  rootMargin?: string;            // viewport margin; use negative bottom to delay
};

export default function Reveal({
  children,
  className = "",
  from = "up",
  delay = 0,
  once = false,
  threshold = 0.55,               // ~55% of the card must be visible
  rootMargin = "0px 0px -12% 0px" // shrink bottom of viewport window by 12%
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once)
            {
              obs.disconnect();
            } 
            
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  const hiddenTranslate =
    from === "up" ? "translate-y-10"
    : from === "down" ? "-translate-y-10"
    : from === "left" ? "translate-x-10"
    : "-translate-x-10";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTranslate}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
