"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

type SlideshowProps = {
  images: string[];
  interval?: number;        // ms between slides (default 4000)
  alt?: string;
  className?: string;
  contain?: boolean;
};

export default function Slideshow({ 
  images, 
  interval = 4000, 
  alt = "", 
  className = "", 
  contain = false 
}: SlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) {
      return;
    }

  
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  let objectContain = "object-cover";
  if(contain) {
    objectContain = "object-contain";
  }

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-xl ${className}`}>
      {images.map((src, i) => (
        <Image
          key={`${src}-${i}`}
          src={src}
          alt={alt}
          fill
          priority={i === 0} // eager loading for first image
          sizes="100vw"
          className={`absolute inset-0 ${contain ? "object-contain" : "object-cover"} transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
