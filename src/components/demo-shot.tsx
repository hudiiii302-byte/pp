"use client";

import { useState } from "react";

/**
 * Progressive screenshot layer for a showcase card.
 *
 * The branded frame underneath is pure CSS and is already painted in the first
 * HTML response, so the card looks complete instantly. The screenshot is
 * visible immediately; if it fails, it simply leaves the branded frame in
 * place.
 *
 * `priority` is used for the cards above the fold: those are fetched eagerly
 * with high fetch priority, everything else stays lazy and low priority.
 */
export function DemoShot({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      width={1800}
      height={1125}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      className="absolute inset-0 z-[3] h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
    />
  );
}
