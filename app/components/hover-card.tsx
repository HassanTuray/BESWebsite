// app/components/hover-card.tsx
export default function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      tabIndex={0}
      className={[
        // base look
        "rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10",
        "shadow-lg shadow-black/20",
        // smooth motion (rise + gentle scale)
        "transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
        "hover:-translate-y-1 hover:scale-[1.03]",
        "focus-visible:-translate-y-1 focus-visible:scale-[1.03]",
        // accessibility: respect reduced motion
        "motion-reduce:transition-none motion-reduce:hover:transform-none",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
