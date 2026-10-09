import type { SVGProps } from "react";
import type { IconName } from "@/lib/types";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const serviceIcons: Record<IconName, (props: IconProps) => React.ReactElement> = {
  web: (props) => (
    <Base {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M2.5 8.5h19" />
      <circle cx="5.6" cy="6.2" r="0.6" fill="currentColor" />
      <circle cx="7.8" cy="6.2" r="0.6" fill="currentColor" />
      <path d="m9.5 12.5-2 2.2 2 2.2M14.5 12.5l2 2.2-2 2.2" />
    </Base>
  ),
  mobile: (props) => (
    <Base {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.5h3" />
      <path d="M11 18.5h2" />
    </Base>
  ),
  software: (props) => (
    <Base {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.8 5.5l-3.6 13" />
    </Base>
  ),
  ai: (props) => (
    <Base {...props}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="3" />
      <path d="M10 10.5h4v3h-4z" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </Base>
  ),
  ecommerce: (props) => (
    <Base {...props}>
      <path d="M3 4h2.2l2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.55L20.6 8H6.2" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </Base>
  ),
  pos: (props) => (
    <Base {...props}>
      <rect x="4" y="2.8" width="16" height="12" rx="2" />
      <path d="M7.5 6.5h9M7.5 10h5" />
      <path d="M3 18.2h18a0 0 0 0 1 0 0v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z" />
    </Base>
  ),
  design: (props) => (
    <Base {...props}>
      <path d="M12 2.8 3.5 7.4v9.2L12 21.2l8.5-4.6V7.4Z" />
      <path d="M12 12v9.2M12 12l8.5-4.6M12 12 3.5 7.4" />
    </Base>
  ),
  marketing: (props) => (
    <Base {...props}>
      <path d="M3.5 10.5v3a1.5 1.5 0 0 0 1.5 1.5h2l6 4.2V6.3l-6 4.2H5a1.5 1.5 0 0 0-1.5 1.5Z" />
      <path d="M17.5 8.5a5 5 0 0 1 0 7M20 6a8.5 8.5 0 0 1 0 12" />
    </Base>
  ),
  seo: (props) => (
    <Base {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
      <path d="M7.8 11.8 9.9 9.2l2 2 2.4-3.2" />
    </Base>
  ),
  aso: (props) => (
    <Base {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="m12 8.4 1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4Z" />
    </Base>
  ),
  wordpress: (props) => (
    <Base {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="m6.2 8.4 3.4 9.2 2-5.6M13.1 18l3.2-8.6c.3-.9.2-1.7-.3-2.4" />
      <path d="M4.2 9.6h6.3M13.4 9.6h6.3" />
    </Base>
  ),
  crm: (props) => (
    <Base {...props}>
      <path d="M3.5 20.5v-2.2a3.5 3.5 0 0 1 3.5-3.5h2a3.5 3.5 0 0 1 3.5 3.5v2.2" />
      <circle cx="8" cy="8.2" r="3" />
      <path d="M14.8 20.5v-1.8a3.4 3.4 0 0 1 2.6-3.3" />
      <path d="M16.6 12.2a2.8 2.8 0 1 0 0-5.6" />
      <path d="M19 15.2a3.4 3.4 0 0 1 1.6 2.9v2.4" />
    </Base>
  ),
  game: (props) => (
    <Base {...props}>
      <path d="M7.2 7.5h9.6a4.2 4.2 0 0 1 4.1 3.3l.9 4.3a2.6 2.6 0 0 1-4.6 2.1l-1.3-1.7H8.1L6.8 17.2a2.6 2.6 0 0 1-4.6-2.1l.9-4.3a4.2 4.2 0 0 1 4.1-3.3Z" />
      <path d="M7 11v2.4M5.8 12.2h2.4M15.6 11.4h.01M17.8 13.2h.01" />
    </Base>
  ),
  inventory: (props) => (
    <Base {...props}>
      <path d="M3.2 7.6 12 3.2l8.8 4.4v8.8L12 20.8l-8.8-4.4Z" />
      <path d="M3.2 7.6 12 12l8.8-4.4M12 12v8.8" />
      <path d="M7.6 5.4 16.4 9.8v3.4" />
    </Base>
  ),
  devops: (props) => (
    <Base {...props}>
      <path d="M7 18.5a4 4 0 0 1-.6-7.96 5.5 5.5 0 0 1 10.7-1.3A3.9 3.9 0 0 1 17.8 18.5Z" />
      <path d="M12 11.5v5.5M9.8 14.2 12 11.9l2.2 2.3" />
    </Base>
  ),
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Component = serviceIcons[name];
  return <Component className={className} />;
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={2}>
      <path d="m4.5 12.5 4.8 4.8 10-11" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2.4" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Base>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.4 3.6h3l1.5 3.7-2 1.4a11.5 11.5 0 0 0 5.4 5.4l1.4-2 3.7 1.5v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.4 5.8a2 2 0 0 1 2-2.2Z" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18A15 15 0 0 1 12 3Z" />
    </Base>
  );
}

/** Friendly robot mark used by the AI chat assistant. */
export function RobotIcon(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <Base className={`assist-robot ${className ?? ""}`} {...rest}>
      <g className="assist-robot-antenna">
        <path d="M12 8V5.6" />
        <circle cx="12" cy="4.2" r="1.1" fill="currentColor" stroke="none" />
      </g>
      <rect x="6.5" y="8" width="11" height="10.5" rx="3.2" />
      <g className="assist-robot-eyes">
        <path d="M9.7 12.2h.01M14.3 12.2h.01" strokeWidth={2.4} />
      </g>
      <path d="M9.6 15.2c1.5 1 3.3 1 4.8 0" />
      <path d="M4.4 12v3M19.6 12v3" />
    </Base>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.69 8.24-8.23 8.24Zm4.52-6.17c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={1.8}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={1.8}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Base {...props} strokeWidth={2}>
      <path d="m6 9.5 6 6 6-6" />
    </Base>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.2 16.2 4.3 4.3" />
    </Base>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.2 13.8 9l5.8 1.8-5.8 1.8L12 18.4 10.2 12.6 4.4 10.8 10.2 9Z" />
      <path d="M18.5 3.5v3M20 5h-3" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2.8 4.8 5.6v5.6c0 4.4 3 8.2 7.2 9.6 4.2-1.4 7.2-5.2 7.2-9.6V5.6Z" />
      <path d="m9 12 2.2 2.2 4-4.4" />
    </Base>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5Z" />
      <path d="m4 12 8 4.3 8-4.3M4 16.4l8 4.3 8-4.3" />
    </Base>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.3 2" />
    </Base>
  );
}

export function socialPath(icon: string) {
  switch (icon) {
    case "linkedin":
      return "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.44-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z";
    case "facebook":
      return "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z";
    case "instagram":
      return "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z";
    case "github":
      return "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z";
    case "tiktok":
      return "M19.6 5.9a4.9 4.9 0 0 1-3.5-1.5A4.9 4.9 0 0 1 14.7 2h-3.3v13.7a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.7a6 6 0 1 0 5.2 6V9.2a8.2 8.2 0 0 0 5 1.7V7.6a4.9 4.9 0 0 1-.1-1.7Z";
    case "x":
    case "twitter":
      return "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z";
    case "youtube":
      return "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z";
    default:
      return "";
  }
}

export function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d={socialPath(icon)} />
    </svg>
  );
}

/** Industry-specific premium icons used by the "Sector knowledge" grid. */
export const industryIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  retail: (props) => (
    <Base {...props}>
      <rect x="3" y="2.8" width="18" height="12.5" rx="2.5" />
      <path d="M6.5 6.3h7M6.5 9.8h4.5" />
      <path d="M2.8 15.3h18.4v3.4a2 2 0 0 1-2 2H4.8a2 2 0 0 1-2-2Z" />
    </Base>
  ),
  "real-estate": (props) => (
    <Base {...props}>
      <path d="M3.5 21V9.8L12 3l8.5 6.8V21" />
      <path d="M2.5 21h19" />
      <rect x="9.5" y="12.5" width="5" height="8.5" />
      <path d="M12 3v5" />
    </Base>
  ),
  healthcare: (props) => (
    <Base {...props}>
      <rect x="3" y="6" width="18" height="15" rx="2.5" />
      <path d="M8.5 6V4.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V6" />
      <path d="M12 10v6M9 13h6" />
    </Base>
  ),
  pharmacy: (props) => (
    <Base {...props}>
      <g transform="rotate(-30 12 12)">
        <rect x="3.2" y="8.8" width="17.6" height="6.4" rx="3.2" />
        <path d="M12 8.8v6.4" />
      </g>
      <path d="m8.9 10.6 2.1 1.2" strokeWidth={1.6} />
    </Base>
  ),
  education: (props) => (
    <Base {...props}>
      <path d="m12 4 10 4.5L12 13 2 8.5Z" />
      <path d="M6.5 10.8v4.7c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.7" />
      <path d="M22 8.5V14" />
    </Base>
  ),
  logistics: (props) => (
    <Base {...props}>
      <path d="M2.5 5.5h12v11h-12Z" />
      <path d="M14.5 9h4l3 3.4v4.1h-7Z" />
      <circle cx="6.5" cy="17.5" r="1.9" />
      <circle cx="17.5" cy="17.5" r="1.9" />
    </Base>
  ),
  ecommerce: (props) => (
    <Base {...props}>
      <path d="M3 4h2.2l2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.55L20.6 8H6.2" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </Base>
  ),
  hospitality: (props) => (
    <Base {...props}>
      <path d="M4 21V9.5L12 3l8 6.5V21" />
      <path d="M2.5 21h19" />
      <path d="M9 21v-6.5h6V21" />
      <path d="M12 6.5v2.5" />
    </Base>
  ),
  finance: (props) => (
    <Base {...props}>
      <path d="M3.5 20.5v-2.2a3.5 3.5 0 0 1 3.5-3.5h2a3.5 3.5 0 0 1 3.5 3.5v2.2" />
      <circle cx="8" cy="8.2" r="3" />
      <path d="M14.5 20.5v-1.6a3.3 3.3 0 0 1 2.5-3.2" />
      <path d="M16.3 12.4a2.7 2.7 0 1 0 0-5.4" />
      <path d="M19 15.4a3.3 3.3 0 0 1 1.5 2.9v2.2" />
    </Base>
  ),
};

export function IndustryIcon({ name, className }: { name: string; className?: string }) {
  const Component = industryIcons[name] ?? industryIcons.retail;
  return <Component className={className} />;
}

export function Logo({
  className,
  compact = false,
  secondaryTagline = "SMC – Pvt. Ltd.",
  size = "md",
}: {
  className?: string;
  compact?: boolean;
  tagline?: string;
  secondaryTagline?: string;
  size?: "md" | "lg";
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex w-max items-end gap-1.5 whitespace-nowrap leading-none ${className ?? ""}`}>
      <span
        className={`font-bold tracking-[-0.02em] text-white ${
          size === "lg" ? "text-[1.75rem]" : compact ? "text-[1.15rem]" : "text-[1.22rem] sm:text-[1.35rem]"
        }`}
      >
        Wordbit<span className="text-[#1ca830]">X</span>
      </span>
      {!compact && secondaryTagline ? (
        <>
          <span className="mb-0.5 h-2.5 w-px shrink-0 bg-white/25 sm:h-3" aria-hidden="true" />
          <span
            className={`mb-0.5 font-semibold uppercase tracking-[0.08em] text-slate-400 ${
              size === "lg" ? "text-[0.62rem]" : "text-[0.48rem] sm:text-[0.55rem]"
            }`}
          >
            {secondaryTagline}
          </span>
        </>
      ) : null}
    </span>
  );
}

/**
 * Verified rosette, used beside the founder's name.
 *
 * It is always rendered as a link to the real profile rather than as a bare
 * decoration, so the mark points at something a visitor can actually check.
 * It must never be presented as a platform-issued badge (Meta, LinkedIn, X)
 * that nobody has granted us — on a site whose worst audit finding was
 * unverifiable claims, a fake verification tick is the last thing to add.
 */
export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.68 2.63 13.43 1.75 12 1.75s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.64 9.33 1.75 10.57 1.75 12s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34Z"
      />
      <path fill="#fff" d="m10.54 16.4-3.6-3.6 1.4-1.4 2.2 2.2 5.6-5.6 1.4 1.4-7 7Z" />
    </svg>
  );
}
