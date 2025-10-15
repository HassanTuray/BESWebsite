"use client";
import * as React from "react";
import Card from "./card";

export type Topic = {
  id: string;
  title: string;
  body: string;
};

type RotatingTopicsCardProp = {
  topics: Topic[];
  children?: React.ReactNode;
  cardWrapper?: string;
  intervalMs?: number;
  title?: string;
}

function clsx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export default function RotatingTopicsCard(
  {topics, children, cardWrapper, intervalMs = 5500, title} : RotatingTopicsCardProp
) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    // if the cards are paused or there is only 1 card to show then do nothing
    if (paused || topics.length <= 1) {
      return;
    }

    // set an interval up. On a given interval rotate the topic cards
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % topics.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [paused, intervalMs, topics.length]);

  return (
    <div
      className="mx-auto max-w-full" // wider container
  
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    > 
      <Card
      cardWrapper={cardWrapper}
      >
        
        {/* Left: vertical list */}
        <div className="flex flex-col text-lg lg:text-xl">
          {topics.map((t, idx) => {
            const active = idx === activeIdx;
            return (
              <button
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                className={clsx(
                  "group text-left px-8 py-3 transition-colors outline-none",
                  active
                    ? ""
                    : ""
                )}
                aria-current={active ? "true" : "false"}
              >
                <span
                  className={clsx(
                    "font-bold tracking-wide transition-colors",
                    active
                      ? "bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent"
                      : "text-white/70 group-hover:text-white"
                  )}
                >
                  {t.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: content */}
        <div className="px-10 lg:px-14">
          <h3 className="mb-2 text-3xl lg:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
              {title}
            </span>
          </h3>

          <div className="text-sm uppercase tracking-wider text-white/60">
            {topics[activeIdx]?.title}
          </div>
          
          <p className="mt-6 text-2xl/10 text-white/80 leading-relaxed ">
            {topics[activeIdx]?.body}
          </p>
        </div>
        {children}
      </Card>
      
    </div>
  );
}
