/**
 * Brand visuals are authored as inline SVG React components rather than binary
 * image files. They are part of the source code, so they always travel with the
 * repository (no `public/` binary assets required), stay crisp at any density
 * and add virtually nothing to page weight.
 */

export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 760"
      className={className}
      role="img"
      aria-label="Abstract illustration of a WordBitX analytics dashboard, mobile application and code editor connected by cloud infrastructure"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#061128" />
          <stop offset="55%" stopColor="#050d21" />
          <stop offset="100%" stopColor="#030814" />
        </linearGradient>
        <linearGradient id="hv-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#61d171" />
          <stop offset="100%" stopColor="#1ca830" />
        </linearGradient>
        <linearGradient id="hv-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6fb8ff" />
          <stop offset="100%" stopColor="#2a6fd6" />
        </linearGradient>
        <linearGradient id="hv-card" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#0e1e3d" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#081428" stopOpacity="0.95" />
        </linearGradient>
        <pattern id="hv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" fill="none" stroke="#94afd6" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
        <filter id="hv-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hv-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#000000" floodOpacity="0.55" />
        </filter>
      </defs>

      <rect width="800" height="760" rx="28" fill="url(#hv-bg)" />
      <rect width="800" height="760" rx="28" fill="url(#hv-grid)" />
      <circle cx="140" cy="120" r="150" fill="#1ca830" opacity="0.18" filter="url(#hv-glow)" />
      <circle cx="670" cy="620" r="140" fill="#2a6fd6" opacity="0.16" filter="url(#hv-glow)" />

      {/* connection lines */}
      <g stroke="url(#hv-green)" strokeWidth="1.5" opacity="0.5" fill="none">
        <path d="M170 300 C 230 240, 300 250, 340 210" strokeDasharray="5 7" />
        <path d="M620 250 C 560 300, 520 330, 470 330" strokeDasharray="5 7" />
        <path d="M250 560 C 320 540, 380 520, 430 470" strokeDasharray="5 7" />
      </g>

      {/* main dashboard card */}
      <g filter="url(#hv-soft)">
        <rect x="150" y="180" width="430" height="290" rx="20" fill="url(#hv-card)" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="150" y="180" width="430" height="46" rx="20" fill="#ffffff" fillOpacity="0.04" />
        <circle cx="178" cy="203" r="5" fill="#ff5f57" opacity="0.85" />
        <circle cx="196" cy="203" r="5" fill="#febc2e" opacity="0.85" />
        <circle cx="214" cy="203" r="5" fill="#28c840" opacity="0.85" />
        <rect x="242" y="197" width="120" height="12" rx="6" fill="#ffffff" fillOpacity="0.14" />

        {/* KPI tiles */}
        <rect x="176" y="248" width="118" height="62" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <rect x="190" y="264" width="46" height="8" rx="4" fill="#ffffff" fillOpacity="0.22" />
        <rect x="190" y="282" width="72" height="12" rx="6" fill="url(#hv-green)" />
        <rect x="306" y="248" width="118" height="62" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <rect x="320" y="264" width="40" height="8" rx="4" fill="#ffffff" fillOpacity="0.22" />
        <rect x="320" y="282" width="60" height="12" rx="6" fill="url(#hv-blue)" />
        <rect x="436" y="248" width="118" height="62" rx="12" fill="#ffffff" fillOpacity="0.05" />
        <rect x="450" y="264" width="52" height="8" rx="4" fill="#ffffff" fillOpacity="0.22" />
        <rect x="450" y="282" width="46" height="12" rx="6" fill="#ffffff" fillOpacity="0.35" />

        {/* chart */}
        <rect x="176" y="326" width="378" height="122" rx="12" fill="#ffffff" fillOpacity="0.04" />
        <g>
          <rect x="200" y="404" width="20" height="28" rx="5" fill="#2a6fd6" opacity="0.75" />
          <rect x="234" y="386" width="20" height="46" rx="5" fill="#2a6fd6" opacity="0.75" />
          <rect x="268" y="396" width="20" height="36" rx="5" fill="#2a6fd6" opacity="0.75" />
          <rect x="302" y="368" width="20" height="64" rx="5" fill="url(#hv-green)" />
          <rect x="336" y="378" width="20" height="54" rx="5" fill="#2a6fd6" opacity="0.75" />
          <rect x="370" y="352" width="20" height="80" rx="5" fill="url(#hv-green)" />
          <rect x="404" y="366" width="20" height="66" rx="5" fill="#2a6fd6" opacity="0.75" />
          <rect x="438" y="344" width="20" height="88" rx="5" fill="url(#hv-green)" />
          <rect x="472" y="358" width="20" height="74" rx="5" fill="#2a6fd6" opacity="0.75" />
          <rect x="506" y="336" width="20" height="96" rx="5" fill="url(#hv-green)" />
        </g>
        <path
          d="M210 400 L244 382 L278 392 L312 362 L346 372 L380 346 L414 360 L448 338 L482 352 L516 330"
          fill="none"
          stroke="#61d171"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <circle cx="516" cy="330" r="5" fill="#61d171" />
      </g>

      {/* phone mockup */}
      <g filter="url(#hv-soft)">
        <rect x="592" y="230" width="148" height="286" rx="26" fill="url(#hv-card)" stroke="#ffffff" strokeOpacity="0.14" />
        <rect x="646" y="244" width="40" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.2" />
        <rect x="608" y="266" width="116" height="66" rx="12" fill="url(#hv-green)" opacity="0.85" />
        <rect x="620" y="286" width="52" height="8" rx="4" fill="#04231a" fillOpacity="0.5" />
        <rect x="620" y="302" width="76" height="8" rx="4" fill="#04231a" fillOpacity="0.35" />
        <rect x="608" y="344" width="116" height="14" rx="7" fill="#ffffff" fillOpacity="0.12" />
        <rect x="608" y="368" width="86" height="14" rx="7" fill="#ffffff" fillOpacity="0.1" />
        <rect x="608" y="398" width="54" height="54" rx="12" fill="#ffffff" fillOpacity="0.07" />
        <rect x="670" y="398" width="54" height="54" rx="12" fill="#ffffff" fillOpacity="0.07" />
        <rect x="620" y="418" width="30" height="6" rx="3" fill="#61d171" opacity="0.8" />
        <rect x="682" y="418" width="30" height="6" rx="3" fill="#6fb8ff" opacity="0.8" />
        <rect x="636" y="476" width="60" height="8" rx="4" fill="#ffffff" fillOpacity="0.18" />
      </g>

      {/* code card */}
      <g filter="url(#hv-soft)">
        <rect x="70" y="486" width="330" height="192" rx="18" fill="url(#hv-card)" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="96" cy="510" r="4" fill="#61d171" />
        <rect x="110" y="505" width="70" height="9" rx="4.5" fill="#ffffff" fillOpacity="0.16" />
        <g fill="#ffffff">
          <rect x="94" y="534" width="34" height="8" rx="4" fillOpacity="0.35" />
          <rect x="136" y="534" width="86" height="8" rx="4" fill="#61d171" fillOpacity="0.9" />
          <rect x="230" y="534" width="46" height="8" rx="4" fillOpacity="0.2" />
          <rect x="108" y="556" width="60" height="8" rx="4" fill="#6fb8ff" fillOpacity="0.85" />
          <rect x="176" y="556" width="110" height="8" rx="4" fillOpacity="0.2" />
          <rect x="108" y="578" width="42" height="8" rx="4" fillOpacity="0.28" />
          <rect x="158" y="578" width="74" height="8" rx="4" fill="#61d171" fillOpacity="0.7" />
          <rect x="122" y="600" width="96" height="8" rx="4" fillOpacity="0.2" />
          <rect x="226" y="600" width="52" height="8" rx="4" fill="#6fb8ff" fillOpacity="0.6" />
          <rect x="94" y="622" width="30" height="8" rx="4" fillOpacity="0.35" />
          <rect x="132" y="622" width="118" height="8" rx="4" fillOpacity="0.18" />
          <rect x="94" y="644" width="18" height="8" rx="4" fillOpacity="0.3" />
        </g>
      </g>

      {/* cloud node */}
      <g opacity="0.95">
        <circle cx="470" cy="596" r="46" fill="#1ca830" fillOpacity="0.12" stroke="#61d171" strokeOpacity="0.35" />
        <path
          d="M450 604a13 13 0 0 1-2-25.8 18 18 0 0 1 34.8-4.2A12.7 12.7 0 0 1 484 604Z"
          fill="none"
          stroke="#61d171"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </g>
      <g opacity="0.9">
        <circle cx="566" cy="668" r="30" fill="#2a6fd6" fillOpacity="0.14" stroke="#6fb8ff" strokeOpacity="0.35" />
        <path d="M556 668h20M566 658v20" stroke="#6fb8ff" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <circle cx="702" cy="150" r="8" fill="#61d171" opacity="0.8" />
      <circle cx="96" cy="330" r="6" fill="#6fb8ff" opacity="0.7" />
      <circle cx="640" cy="120" r="4" fill="#ffffff" opacity="0.4" />
      <circle cx="120" cy="700" r="4" fill="#ffffff" opacity="0.3" />
    </svg>
  );
}

export function WorkflowVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 700"
      className={className}
      role="img"
      aria-label="Illustration of the WordBitX delivery model connecting design, development, cloud infrastructure and mobile release"
    >
      <defs>
        <linearGradient id="wf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#07142e" />
          <stop offset="100%" stopColor="#040b1b" />
        </linearGradient>
        <linearGradient id="wf-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#61d171" />
          <stop offset="100%" stopColor="#1ca830" />
        </linearGradient>
        <pattern id="wf-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0H0v44" fill="none" stroke="#94afd6" strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
        <filter id="wf-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="24" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="wf-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      <rect width="800" height="700" rx="28" fill="url(#wf-bg)" />
      <rect width="800" height="700" rx="28" fill="url(#wf-grid)" />
      <circle cx="660" cy="120" r="130" fill="#1ca830" opacity="0.16" filter="url(#wf-glow)" />
      <circle cx="150" cy="580" r="120" fill="#2a6fd6" opacity="0.14" filter="url(#wf-glow)" />

      {/* orbit ring */}
      <ellipse cx="400" cy="350" rx="250" ry="152" fill="none" stroke="#61d171" strokeOpacity="0.22" strokeDasharray="6 9" />
      <ellipse cx="400" cy="350" rx="160" ry="98" fill="none" stroke="#6fb8ff" strokeOpacity="0.16" strokeDasharray="4 8" />

      {/* centre core */}
      <g filter="url(#wf-shadow)">
        <circle cx="400" cy="350" r="76" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.14" />
        <circle cx="400" cy="350" r="52" fill="none" stroke="url(#wf-green)" strokeWidth="2.5" />
        <path
          d="m386 336-14 14 14 14M414 336l14 14-14 14M406 328l-12 44"
          fill="none"
          stroke="#61d171"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* four capability nodes */}
      {[
        { x: 400, y: 132, label: "Design", d: "M-11 6 0-10 11 6Z M-11 6h22" },
        { x: 648, y: 350, label: "Cloud", d: "M-12 6a8 8 0 0 1-1-15.6A11 11 0 0 1 8.4-12 7.8 7.8 0 0 1 9 6Z" },
        { x: 400, y: 568, label: "Mobile", d: "M-7-12h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3Z M-2 8h4" },
        { x: 152, y: 350, label: "Engineering", d: "M-4-11-11 0l7 11M4-11 11 0 4 11" },
      ].map((node) => (
        <g key={node.label} filter="url(#wf-shadow)">
          <circle cx={node.x} cy={node.y} r="46" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.14" />
          <circle cx={node.x} cy={node.y} r="46" fill="#1ca830" fillOpacity="0.06" />
          <g transform={`translate(${node.x} ${node.y - 6})`}>
            <path d={node.d} fill="none" stroke="#61d171" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x={node.x}
            y={node.y + 26}
            textAnchor="middle"
            fill="#c8d6ea"
            fontSize="12"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="600"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* flow dots */}
      <circle cx="400" cy="198" r="5" fill="#61d171" />
      <circle cx="582" cy="350" r="5" fill="#6fb8ff" />
      <circle cx="400" cy="502" r="5" fill="#61d171" />
      <circle cx="218" cy="350" r="5" fill="#6fb8ff" />

      {/* side panels */}
      <g filter="url(#wf-shadow)">
        <rect x="56" y="88" width="168" height="96" rx="16" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="76" y="110" width="60" height="8" rx="4" fill="#ffffff" fillOpacity="0.2" />
        <rect x="76" y="128" width="104" height="10" rx="5" fill="url(#wf-green)" />
        <rect x="76" y="150" width="80" height="8" rx="4" fill="#ffffff" fillOpacity="0.14" />
      </g>
      <g filter="url(#wf-shadow)">
        <rect x="574" y="524" width="176" height="104" rx="16" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="596" y="548" width="68" height="8" rx="4" fill="#ffffff" fillOpacity="0.2" />
        <g>
          <rect x="596" y="574" width="16" height="34" rx="4" fill="#2a6fd6" opacity="0.7" />
          <rect x="620" y="562" width="16" height="46" rx="4" fill="url(#wf-green)" />
          <rect x="644" y="580" width="16" height="28" rx="4" fill="#2a6fd6" opacity="0.7" />
          <rect x="668" y="556" width="16" height="52" rx="4" fill="url(#wf-green)" />
          <rect x="692" y="570" width="16" height="38" rx="4" fill="#2a6fd6" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
}

export function AiNetworkVisual({ className = "" }: { className?: string }) {
  const layers = [
    { x: 190, ys: [230, 330, 430, 530] },
    { x: 330, ys: [190, 290, 390, 490, 590] },
    { x: 470, ys: [190, 290, 390, 490, 590] },
    { x: 610, ys: [280, 380, 480] },
  ];

  return (
    <svg
      viewBox="0 0 800 760"
      className={className}
      role="img"
      aria-label="Abstract neural network illustration representing WordBitX artificial intelligence solutions"
    >
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#061229" />
          <stop offset="100%" stopColor="#030813" />
        </linearGradient>
        <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#61d171" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#61d171" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6fb8ff" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="ai-node" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#a9f5d1" />
          <stop offset="100%" stopColor="#1ca830" />
        </radialGradient>
        <pattern id="ai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" fill="none" stroke="#94afd6" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
        <filter id="ai-glow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="22" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="760" rx="28" fill="url(#ai-bg)" />
      <rect width="800" height="760" rx="28" fill="url(#ai-grid)" />
      <circle cx="400" cy="380" r="230" fill="#1ca830" opacity="0.12" filter="url(#ai-glow)" />
      <circle cx="660" cy="180" r="110" fill="#2a6fd6" opacity="0.14" filter="url(#ai-glow)" />

      {/* connections */}
      <g stroke="url(#ai-line)" strokeWidth="1.2" fill="none">
        {layers.slice(0, -1).flatMap((layer, layerIndex) =>
          layer.ys.flatMap((y) =>
            layers[layerIndex + 1].ys.map((nextY) => (
              <line key={`${layerIndex}-${y}-${nextY}`} x1={layer.x} y1={y} x2={layers[layerIndex + 1].x} y2={nextY} />
            )),
          ),
        )}
      </g>

      {/* input / output rails */}
      <g stroke="#6fb8ff" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="5 7" fill="none">
        <path d="M92 300h64M92 380h64M92 460h64" />
        <path d="M646 340h66M646 420h66" />
      </g>

      {/* nodes */}
      {layers.map((layer, layerIndex) =>
        layer.ys.map((y) => (
          <g key={`n-${layerIndex}-${y}`}>
            <circle cx={layer.x} cy={y} r="16" fill="#081833" stroke="#61d171" strokeOpacity="0.35" />
            <circle cx={layer.x} cy={y} r="8" fill="url(#ai-node)" opacity={layerIndex === 3 ? 1 : 0.85} />
          </g>
        )),
      )}

      {/* highlighted path */}
      <g stroke="#61d171" strokeWidth="2.4" fill="none" opacity="0.95">
        <line x1="190" y1="330" x2="330" y2="290" />
        <line x1="330" y1="290" x2="470" y2="390" />
        <line x1="470" y1="390" x2="610" y2="380" />
      </g>

      {/* data chips */}
      <g>
        <rect x="60" y="120" width="150" height="60" rx="14" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="80" y="140" width="58" height="8" rx="4" fill="#ffffff" fillOpacity="0.22" />
        <rect x="80" y="156" width="94" height="8" rx="4" fill="#6fb8ff" fillOpacity="0.7" />
        <rect x="596" y="590" width="164" height="72" rx="14" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="616" y="612" width="52" height="8" rx="4" fill="#ffffff" fillOpacity="0.22" />
        <rect x="616" y="630" width="110" height="10" rx="5" fill="#61d171" />
        <rect x="52" y="592" width="150" height="72" rx="14" fill="#0b1c3a" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="72" y="614" width="46" height="8" rx="4" fill="#ffffff" fillOpacity="0.22" />
        <rect x="72" y="632" width="96" height="10" rx="5" fill="#6fb8ff" fillOpacity="0.75" />
      </g>

      <circle cx="716" cy="96" r="6" fill="#61d171" opacity="0.85" />
      <circle cx="120" cy="712" r="5" fill="#6fb8ff" opacity="0.7" />
      <circle cx="452" cy="700" r="4" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}
