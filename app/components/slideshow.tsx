"use client";

import { useEffect, useState } from "react";

type SlideshowProps = {
  images: string[];
  interval?: number;        // ms between slides (default 4000)
  alt?: string;
  className?: string;
};

export default function Slideshow({ images, interval = 4000, alt = "", className = "" }: SlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return; // nothing to rotate
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) {
    // Friendly placeholder if you haven't added images yet
    return (
      <div className={`relative h-full w-full rounded-xl border border-white/10 bg-white/5 grid place-items-center ${className}`}>
        <span className="text-sm text-white/60">Add images to see a slideshow</span>
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-xl ${className}`}>
      {images.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  );
}
