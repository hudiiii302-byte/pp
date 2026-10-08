"use client";

import { useEffect, useRef } from "react";
import { media } from "@/lib/media";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";

export function HomeHeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.muted = true;
    const play = node.play();
    if (play) play.catch(() => undefined);
  }, []);

  return (
    <div className="animate-reveal relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          poster={media.teamOffice}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="WordbitX product and engineering team at work"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/15 to-navy-950/25" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-300">Live delivery floor</p>
            <p className="mt-1 text-sm font-medium text-white">Design, engineering and launch — one team, accounts you own.</p>
          </div>
          <span className="hidden rounded-full border border-white/20 bg-navy-950/60 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur sm:inline-flex">
            Worldwide overlap hours
          </span>
        </div>
      </div>
    </div>
  );
}
