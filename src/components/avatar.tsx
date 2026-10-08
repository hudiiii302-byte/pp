"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Portrait with an automatic branded monogram fallback.
 */
export function Avatar({
  src,
  alt,
  initials,
  className = "",
  sizes = "(max-width: 768px) 100vw, 380px",
  priority = false,
}: {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(src) && !failed;
  const local = Boolean(src?.startsWith("/"));

  return (
    <div className={`relative overflow-hidden bg-navy-900 ${className}`}>
      {showPhoto ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={local}
          className="object-cover object-[center_18%]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ background: "linear-gradient(140deg, #10294f 0%, #0d1b34 55%, #071531 100%)" }}
          role="img"
          aria-label={alt}
        >
          <span className="flex flex-col items-center gap-3">
            <span className="flex h-24 w-24 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-400/10 text-3xl font-bold tracking-tight text-white">
              {initials}
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-slate-500">
              Photo coming soon
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
