/**
 * Inline SVG flags for the six market cards.
 *
 * Deliberately not emoji flags: Windows ships no emoji flag glyphs at all, so
 * 🇵🇰 renders as the letters "PK" for a large share of desktop visitors. And
 * deliberately not a flag package or a CDN — six shapes do not justify a
 * dependency or a third-party request on every page view.
 *
 * These are simplified at display size (about 24px wide), not heraldically
 * exact: the Union Jack diagonals are symmetric rather than counter-changed,
 * and star counts are reduced where they would turn to mud.
 */

type FlagProps = { className?: string };

const frame = "overflow-hidden rounded-[3px] ring-1 ring-black/10";

function Svg({ className, children }: FlagProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`${frame} ${className ?? "h-4 w-6"}`}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function Pakistan({ className }: FlagProps) {
  return (
    <Svg className={className}>
      <rect width="24" height="16" fill="#01411C" />
      <rect width="6" height="16" fill="#fff" />
      <circle cx="15.1" cy="8.4" r="4" fill="#fff" />
      <circle cx="16.6" cy="7.2" r="3.6" fill="#01411C" />
      <path d="m17.9 4.3.5 1.3 1.4.1-1.1.9.4 1.3-1.2-.8-1.2.8.4-1.3-1.1-.9 1.4-.1z" fill="#fff" />
    </Svg>
  );
}

function Usa({ className }: FlagProps) {
  return (
    <Svg className={className}>
      <rect width="24" height="16" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 16) / 13} width="24" height={16 / 13} fill="#B22234" />
      ))}
      <rect width="10.2" height={(16 / 13) * 7} fill="#3C3B6E" />
      {[1.6, 4.1, 6.6].map((y) =>
        [1.5, 3.6, 5.7, 7.8].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.52" fill="#fff" />),
      )}
      {[2.85, 5.35].map((y) =>
        [2.55, 4.65, 6.75, 8.85].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.52" fill="#fff" />),
      )}
    </Svg>
  );
}

/** Shared by the UK flag and the Australian canton. */
function UnionJack({ w = 24, h = 16 }: { w?: number; h?: number }) {
  const d = `M0 0 L${w} ${h} M${w} 0 L0 ${h}`;
  const cross = `M${w / 2} 0 V${h} M0 ${h / 2} H${w}`;
  const k = w / 24;
  return (
    <>
      <rect width={w} height={h} fill="#012169" />
      <path d={d} stroke="#fff" strokeWidth={3.4 * k} />
      <path d={d} stroke="#C8102E" strokeWidth={1.7 * k} />
      <path d={cross} stroke="#fff" strokeWidth={5.4 * k} />
      <path d={cross} stroke="#C8102E" strokeWidth={3.2 * k} />
    </>
  );
}

function Uk({ className }: FlagProps) {
  return (
    <Svg className={className}>
      <UnionJack />
    </Svg>
  );
}

function Uae({ className }: FlagProps) {
  return (
    <Svg className={className}>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.34" fill="#00732F" />
      <rect y="10.66" width="24" height="5.34" fill="#000" />
      <rect width="6" height="16" fill="#FF0000" />
    </Svg>
  );
}

function Canada({ className }: FlagProps) {
  return (
    <Svg className={className}>
      <rect width="24" height="16" fill="#fff" />
      <rect width="6" height="16" fill="#D80621" />
      <rect x="18" width="6" height="16" fill="#D80621" />
      <path
        d="M12 3.1l.78 2.21c.1.27.37.26.57.14l1.33-.73-.47 2.2c-.1.3.1.47.38.38l1.82-.4-.47 1.15c-.05.17 0 .3.17.38l1.9 1.03-3.14 1.53c-.2.1-.28.27-.2.47l.28.96-2.86-.5c-.2-.02-.37.1-.37.3l.1 2.18h-.6l.1-2.18c0-.2-.17-.32-.37-.3l-2.86.5.28-.96c.08-.2 0-.37-.2-.47L5.99 9.46l1.9-1.03c.17-.08.22-.21.17-.38l-.47-1.15 1.82.4c.28.09.48-.08.38-.38l-.47-2.2 1.33.73c.2.12.47.13.57-.14L12 3.1z"
        fill="#D80621"
      />
    </Svg>
  );
}

function Australia({ className }: FlagProps) {
  return (
    <Svg className={className}>
      <rect width="24" height="16" fill="#00247D" />
      <svg x="0" y="0" width="12" height="8" viewBox="0 0 12 8">
        <UnionJack w={12} h={8} />
      </svg>
      {/* Commonwealth Star, then a reduced Southern Cross on the fly */}
      <circle cx="6" cy="12" r="1.5" fill="#fff" />
      <circle cx="17.5" cy="3.4" r="0.75" fill="#fff" />
      <circle cx="20.4" cy="7.2" r="0.95" fill="#fff" />
      <circle cx="16.4" cy="8.6" r="0.75" fill="#fff" />
      <circle cx="18.6" cy="12.6" r="0.85" fill="#fff" />
      <circle cx="18.9" cy="9.9" r="0.45" fill="#fff" />
    </Svg>
  );
}

const flags: Record<string, (props: FlagProps) => React.ReactElement> = {
  pakistan: Pakistan,
  usa: Usa,
  uk: Uk,
  uae: Uae,
  canada: Canada,
  australia: Australia,
};

/** Renders nothing for an unknown slug rather than a broken placeholder. */
export function FlagIcon({ slug, className }: { slug: string; className?: string }) {
  const Flag = flags[slug];
  if (!Flag) return null;
  return <Flag className={className} />;
}
