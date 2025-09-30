"use client";
import * as React from "react";

export type Topic = {
  id: string;
  title: string;
  body: string;
};

function clsx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export default function RotatingTopicsCard({
  topics,
  intervalMs = 5500,
  title = "Programs & Events",
}: {
  topics: Topic[];
  intervalMs?: number;
  title?: string;
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || topics.length <= 1) return;
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5 shadow-2xl min-h-[28rem]">
        {/* Left: vertical list */}
        <div className="flex flex-col text-lg lg:text-xl">
          {topics.map((t, idx) => {
            const active = idx === activeIdx;
            return (
              <button
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                className={clsx(
                  "group text-left px-8 py-6 transition-colors outline-none",
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
        <div className="p-10 lg:p-14">
          <div className="text-sm uppercase tracking-wider text-white/60">
            {topics[activeIdx]?.title}
          </div>
          <h3 className="mt-2 text-3xl lg:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
          <p className="mt-6 text-lg lg:text-xl text-white/90 leading-relaxed">
            {topics[activeIdx]?.body}
          </p>
        </div>
      </div>
    </div>
  );
}
