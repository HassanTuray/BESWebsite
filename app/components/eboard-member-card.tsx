"use client";

import Image from "next/image";
import * as React from "react";
import Card from "./card";

type EboardMemberNodeProps = {
  photo: string;            // e.g. "/members/jane.png"
  alt?: string;             // accessible alt for the image
  name: string;             // member name
  year: string;             // e.g. "Senior"
  position: string;         // e.g. "President"
  major: string;            // e.g. "Computer Engineering"
  size?: "sm" | "md" | "lg"; // base avatar size (hover grows it)
  className?: string;       // extra classes for the outer wrapper
};

const sizeMap: Record<NonNullable<EboardMemberNodeProps["size"]>, string> = {
  sm: "h-16 w-16",  // 64px
  md: "h-20 w-20",  // 80px
  lg: "h-24 w-24",  // 96px
};

export default function EboardMemberNode({
  photo,
  alt,
  name,
  year,
  position,
  major,
  size = "md",
  className = "",
}: EboardMemberNodeProps) {
  const avatarSize = sizeMap[size];

  return (
    <div
      // "group" lets child elements react to hover/focus on the wrapper
      className={[
        "group relative mx-auto flex w-full max-w-[14rem] flex-col items-center",
        "overflow-visible", // important so the scaled avatar isn't clipped
        className,
      ].join(" ")}
      tabIndex={0} // keyboard focus shows the same effect
    >
      {/* Avatar */}
      <div
        className={[
          "relative overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-md shadow-black/20",
          avatarSize,
          // smooth motion (rise + gentle scale) on hover/focus
          "transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
          "group-hover:-translate-y-2 group-hover:scale-[1.1]",
          "group-focus-visible:-translate-y-2 group-focus-visible:scale-[1.10]",
          // motion safety
          "motion-reduce:transition-none motion-reduce:group-hover:transform-none",
        ].join(" ")}
        aria-hidden={false}
      >
        <Image
          src={photo}
          alt={alt ?? `${position}`}
          fill
          className="object-cover"
          sizes="96px"
          priority={false}
        />
      </div>

      {/* Info panel (reveals on hover/focus) */}
      <div
        className={[
          "mt-3 w-full text-center text-sm text-white/90",
          // fade + expand
          "opacity-0 max-h-0 overflow-hidden",
          "transition-all duration-400 ease-out",
          "group-hover:opacity-100 group-hover:max-h-40",
          "group-focus-visible:opacity-100 group-focus-visible:max-h-40",
          // subtle divider line above when visible
          "relative",
        ].join(" ")}
      >
        <div className="mx-auto mb-2 h-px w-10 bg-white/15 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-center" />
        <div className="font-semibold">{name}</div>
        <div className="font-semibold">{position}</div>
        <div className="text-white/80">{year}</div>
        <div className="text-white/70">{major}</div>
      </div>
    </div>
  );
}
