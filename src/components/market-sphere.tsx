import type { CSSProperties } from "react";
import { markets } from "@/lib/markets";

/**
 * Wireframe sphere built from a Fibonacci point distribution, with each point
 * joined to its three nearest neighbours. The geometry is precomputed and
 * inlined so nothing is calculated at runtime and the section stays a server
 * component with zero client JavaScript.
 *
 * Each point is [x, y, depth]; depth is the normalised z (0 = far, 1 = near)
 * and drives only dot size, stroke weight and opacity, which is what sells a
 * flat projection as a three dimensional object.
 */
const SPHERE_POINTS: [number, number, number][] = [
  [0,100,0.5],[-18.4,96.8,0.58],[3.1,93.7,0.33],[25.9,90.5,0.67],[-48,87.3,0.46],[45.6,84.1,0.35],
  [-15.2,81,0.78],[-29,77.8,0.22],[62.6,74.6,0.61],[-64.7,71.4,0.63],[31,68.3,0.17],[22.7,65.1,0.86],
  [-67.9,61.9,0.3],[79,58.7,0.41],[-47.8,55.6,0.84],[-10.9,52.4,0.08],[66.6,49.2,0.78],[-88.7,46,0.52],
  [64,42.9,0.18],[-4.2,39.7,0.96],[-59.6,36.5,0.14],[93.4,33.3,0.56],[-78.3,30.2,0.77],[21.1,27,0.03],
  [48.3,23.8,0.92],[-93.2,20.6,0.35],[89.4,17.5,0.29],[-38.2,14.3,0.96],[-33.6,11.1,0.03],[88.2,7.9,0.73],
  [-96.6,4.8,0.63],[54.1,1.6,0.08],[16.9,-1.6,0.99],[-79,-4.8,0.19],[99.3,-7.9,0.46],[-67.5,-11.1,0.86],
  [0.5,-14.3,0.01],[66.2,-17.5,0.86],[-97.4,-20.6,0.45],[77.4,-23.8,0.21],[-17.2,-27,0.97],
  [-50.8,-30.2,0.1],[90.9,-33.3,0.62],[-82.8,-36.5,0.71],[31.9,-39.7,0.07],[34.1,-42.9,0.92],
  [-80.2,-46,0.31],[83.2,-49.2,0.37],[-43.1,-52.4,0.87],[-17.5,-55.6,0.09],[66,-58.7,0.73],
  [-77.9,-61.9,0.55],[49.2,-65.1,0.21],[2.7,-68.3,0.87],[-49.1,-71.4,0.25],[66.5,-74.6,0.52],
  [-48.5,-77.8,0.7],[8.1,-81,0.21],[30.7,-84.1,0.72],[-47.5,-87.3,0.45],[37.1,-90.5,0.4],
  [-10.8,-93.7,0.67],[-10.4,-96.8,0.39],[0,-100,0.5]
];

const SPHERE_LINKS: [number, number][] = [
  [0,1],[0,2],[0,3],[1,4],[1,6],[2,7],[2,5],[3,8],[3,11],[4,9],[4,12],[5,10],[5,13],[6,14],[6,11],[7,15],
  [7,12],[8,16],[8,13],[9,17],[9,14],[10,18],[10,15],[11,19],[12,20],[13,21],[14,22],[15,23],[15,28],
  [16,24],[16,29],[17,25],[17,30],[18,26],[18,31],[19,27],[19,32],[20,28],[20,33],[21,29],[21,34],[22,30],
  [22,35],[23,31],[23,36],[24,32],[24,37],[25,33],[25,38],[26,34],[26,39],[27,35],[27,40],[28,36],[28,41],
  [29,37],[29,42],[30,38],[30,43],[31,39],[31,44],[32,40],[33,41],[34,42],[35,43],[36,44],[37,45],[38,46],
  [39,47],[40,48],[41,49],[42,50],[43,51],[44,52],[45,53],[45,32],[46,54],[46,33],[47,55],[47,34],[48,56],
  [48,35],[49,57],[49,54],[50,58],[50,55],[51,59],[51,56],[52,57],[52,60],[53,58],[53,48],[54,59],[55,60],
  [56,61],[57,62],[58,61],[59,62],[60,63],[61,63],[62,63]
];

function SphereMesh({ className }: { className?: string }) {
  return (
    <svg viewBox="-112 -112 224 224" className={className} aria-hidden="true">
      <g>
        {SPHERE_LINKS.map(([a, b], i) => {
          const p = SPHERE_POINTS[a];
          const q = SPHERE_POINTS[b];
          const depth = (p[2] + q[2]) / 2;
          return (
            <line
              key={i}
              x1={p[0]}
              y1={p[1]}
              x2={q[0]}
              y2={q[1]}
              stroke="currentColor"
              strokeWidth={0.35 + depth * 0.5}
              opacity={0.1 + depth * 0.33}
            />
          );
        })}
      </g>
      <g>
        {SPHERE_POINTS.map(([x, y, depth], i) => (
          <circle key={i} cx={x} cy={y} r={0.9 + depth * 1.7} fill="currentColor" opacity={0.25 + depth * 0.6} />
        ))}
      </g>
    </svg>
  );
}

/* Where each badge sits around the sphere, plus its own drift timing. The
   durations are all different so the group never bobs in unison. */
const BADGE_SLOTS = [
  { pos: "left-[1%] top-[9%]", delay: "0s", duration: "7.5s" },
  { pos: "right-[0%] top-[19%]", delay: "-2.4s", duration: "9s" },
  { pos: "left-[-3%] top-[45%]", delay: "-4.1s", duration: "8.2s" },
  { pos: "right-[-2%] top-[55%]", delay: "-1.2s", duration: "10.5s" },
  { pos: "left-[11%] bottom-[7%]", delay: "-5.6s", duration: "8.8s" },
  { pos: "right-[9%] bottom-[13%]", delay: "-3.3s", duration: "9.6s" },
];

/**
 * The sphere is now the artwork for the Markets section rather than a section
 * of its own. It previously carried its own "WordbitX is trusted to deliver
 * excellence worldwide" heading, which sat three sections away from the trust
 * orbit and opened with the same four words. The text lives in the Markets
 * heading now; this exports only the visual.
 */
export function MarketSphere() {
  const badges = markets.slice(0, BADGE_SLOTS.length);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(26rem,calc(100vw-2.5rem))]">
      <div className="absolute inset-[10%] rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />
      <SphereMesh className="sphere-spin absolute inset-[10%] text-brand-300" />
      <SphereMesh className="sphere-spin-rev absolute inset-[10%] text-sky-300/45" />

      {badges.map((market, i) => {
        const slot = BADGE_SLOTS[i];
        return (
          <span
            key={market.slug}
            className={`trust-float absolute ${slot.pos} inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-white/12 bg-navy-900/85 px-2.5 py-1.5 text-[0.65rem] font-semibold text-white shadow-[0_14px_34px_-18px_rgba(0,0,0,0.9)] backdrop-blur sm:gap-2 sm:px-3 sm:py-2 sm:text-xs`}
            style={{ "--float-delay": slot.delay, "--float-duration": slot.duration } as CSSProperties}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400 shadow-[0_0_8px_rgba(46,194,67,0.9)]" />
            {market.country}
          </span>
        );
      })}
    </div>
  );
}
