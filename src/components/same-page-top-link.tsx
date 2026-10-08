"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

/**
 * A link that returns you to the top when it points at the page you are
 * already on.
 *
 * Next's router treats navigation to the current route as a no-op, so clicking
 * the logo after scrolling down does nothing at all — the page stays exactly
 * where it was and the header reads as broken. Anywhere else the link behaves
 * like an ordinary `next/link`.
 *
 * The header has its own copy of this logic because it also needs to close the
 * mobile menu; this component exists for server components, which cannot carry
 * an onClick of their own.
 */
export function SamePageTopLink({
  href,
  className,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (href !== pathname) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <Link href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
