"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Logo, MenuIcon, CloseIcon, ChevronDown, ArrowRight, WhatsAppIcon } from "@/components/icons";
import { MegaServiceIcon } from "@/components/mega-service-icon";
import { megaMenuGroups, services } from "@/lib/services";
import { mainNav, siteConfig, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const megaScrollRef = useRef<HTMLDivElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openServices = () => {
    cancelClose();
    setDesktopServicesOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    // Grace period so users can move from the trigger into the panel without
    // the menu vanishing mid-motion.
    closeTimer.current = setTimeout(() => setDesktopServicesOpen(false), 140);
  };

  useEffect(() => () => cancelClose(), []);

  /**
   * Next's router treats a link to the route you are already on as a no-op, so
   * clicking the logo or the current nav item after scrolling left the page
   * exactly where it was. From the visitor's side the header looked broken.
   * Take the click over ourselves and return to the top.
   */
  const backToTopIfCurrent = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href !== pathname) return;
    event.preventDefault();
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
    document.body.classList.remove("hide-site-cursor");
  }, [pathname]);

  useEffect(() => {
    const lock = mobileOpen || desktopServicesOpen;
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflowY;
    if (lock) {
      document.body.style.overflow = "hidden";
      html.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflow = prevBody;
      html.style.overflowY = prevHtml;
    };
  }, [mobileOpen, desktopServicesOpen]);

  useEffect(() => {
    if (!desktopServicesOpen) return;
    const panel = megaPanelRef.current;
    const scroller = megaScrollRef.current;
    if (!panel || !scroller) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      scroller.scrollTop += event.deltaY;
    };

    panel.addEventListener("wheel", onWheel, { passive: false });
    return () => panel.removeEventListener("wheel", onWheel);
  }, [desktopServicesOpen]);

  useEffect(() => {
    if (!desktopServicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [desktopServicesOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      onMouseEnter={() => document.body.classList.add("hide-site-cursor")}
      onMouseLeave={() => document.body.classList.remove("hide-site-cursor")}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-navy-950/92 backdrop-blur-xl"
          : "border-b border-transparent bg-navy-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-[72px] lg:gap-4">
          <Link
            href="/"
            onClick={backToTopIfCurrent("/")}
            className="min-w-0 shrink text-white"
            aria-label={`${siteConfig.name} home`}
          >
            <Logo />
            <span className="sr-only">{siteConfig.name} home</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                    onFocus={openServices}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        scheduleClose();
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={backToTopIfCurrent(item.href)}
                      aria-expanded={desktopServicesOpen}
                      className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                        isActive(item.href) ? "text-brand-300" : "text-slate-200 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${desktopServicesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {desktopServicesOpen && (
                      <div
                        ref={megaPanelRef}
                        className="fixed left-1/2 top-16 z-40 w-[min(74rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 lg:top-[72px]"
                        onMouseEnter={openServices}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="flex max-h-[min(74vh,44rem)] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#07111f] shadow-[0_32px_80px_-32px_rgba(0,0,0,0.88)]">
                          <div ref={megaScrollRef} className="services-mega-scroll min-h-0 flex-1">
                            <div className="grid items-start gap-x-0 gap-y-6 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
                              {megaMenuGroups.map((group) => (
                                <div
                                  key={group.title}
                                  className="min-w-0 lg:px-3.5 lg:[&:nth-child(4n+1)]:pl-1 lg:[&:nth-child(4n)]:pr-1 lg:[&:not(:nth-child(4n))]:border-r lg:[&:not(:nth-child(4n))]:border-white/[0.07]"
                                >
                                  <p className="mb-2.5 px-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
                                    {group.title}
                                  </p>
                                  <ul>
                                    {group.slugs.map((slug) => {
                                      const service = services.find((entry) => entry.slug === slug);
                                      if (!service) return null;
                                      return (
                                        <li key={slug}>
                                          <Link
                                            href={`/services/${service.slug}`}
                                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-white/[0.06]"
                                          >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-brand-300 ring-1 ring-white/10">
                                              <MegaServiceIcon slug={service.slug} className="h-4 w-4" />
                                            </span>
                                            <span className="truncate text-sm font-medium text-slate-100">
                                              {service.shortTitle}
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-6 py-3.5">
                            <p className="text-sm text-slate-400">Not sure which service fits? We will map it on a call.</p>
                            <div className="flex gap-2">
                              <Link
                                href="/services"
                                className="rounded-lg border border-white/12 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-400/50"
                              >
                                All services
                              </Link>
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
                              >
                                Get a quote <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={backToTopIfCurrent(item.href)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-brand-300" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Halo lives on a wrapper: the button itself clips its light sweep.
                Surface styling lives in .cta-surface, which is a deep emerald
                ramp so the white label clears AA. */}
            <span
              className="cta-halo relative inline-flex rounded-xl"
              style={{ "--cta-halo-color": "rgba(28, 168, 48, 0.5)" } as CSSProperties}
            >
              <Link
                href="/contact"
                className="cta-live cta-surface group inline-flex items-center gap-2 rounded-xl px-4.5 py-2.5 text-sm font-bold tracking-tight text-white transition-all hover:-translate-y-0.5"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_7px_rgba(255,255,255,0.95)]" />
                </span>
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2 lg:hidden">
            {/* Primary CTA replaces the WhatsApp shortcut that used to sit here.
                The label and the ornaments are responsive because this bar is
                tight: on a 375px screen only about 169px is left once the
                wordmark and the menu button are placed, so below sm the dot
                and arrow are dropped and the label is shortened. WhatsApp is
                still available inside the mobile menu. */}
            <span
              className="cta-halo relative inline-flex shrink-0 rounded-xl"
              style={{ "--cta-halo-color": "rgba(28, 168, 48, 0.5)" } as CSSProperties}
            >
              <Link
                href="/contact"
                className="cta-live cta-surface group inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2.5 text-[0.7rem] font-bold tracking-tight text-white sm:gap-2 sm:px-4 sm:text-sm"
              >
                <span className="relative hidden h-2 w-2 sm:flex" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_7px_rgba(255,255,255,0.95)]" />
                </span>
                <span className="sm:hidden">Discuss Project</span>
                <span className="hidden sm:inline">Discuss Your Project</span>
                <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:block" />
              </Link>
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-transparent text-white"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="min-h-[calc(100dvh-4rem)] max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="container-page space-y-1 py-5">
            {mainNav.map((item) => {
              if (item.label === "Services") {
                return (
                  <div key={item.href} className="rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/services"
                        onClick={backToTopIfCurrent("/services")}
                        className="flex-1 px-4 py-3 text-base font-medium text-white"
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((open) => !open)}
                        className="px-4 py-3 text-slate-300"
                        aria-expanded={mobileServicesOpen}
                        aria-label="Toggle services list"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <ul className="border-t border-white/10 p-2">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                            >
                              <MegaServiceIcon slug={service.slug} className="h-4 w-4" />
                              {service.shortTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={backToTopIfCurrent(item.href)}
                  className={`block rounded-xl border border-white/10 px-4 py-3 text-base font-medium ${
                    isActive(item.href) ? "text-brand-300" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <Link
                href="/contact"
                className="cta-live cta-surface inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold tracking-tight text-white"
              >
                <span>Discuss Your Project</span> <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <p className="pt-3 text-center text-xs text-slate-400">
              {siteConfig.email} · {siteConfig.phoneDisplay}
            </p>
          </nav>
        </div>
      )}
    
      
    </header>
  );
}
