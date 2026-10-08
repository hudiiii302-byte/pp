import Link from "next/link";
import { SamePageTopLink } from "@/components/same-page-top-link";
import Script from "next/script";
import { Logo, MailIcon, PhoneIcon, GlobeIcon, SocialIcon, WhatsAppIcon, ArrowRight } from "@/components/icons";
import { getServices } from "@/lib/services";
import { industries } from "@/lib/industries";
import { markets } from "@/lib/markets";
import { legalNav, mainNav, siteConfig, usWhatsappLink, whatsappLink } from "@/lib/site";
import { NewsletterForm } from "@/components/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();
  const footerServices = getServices([
    "web-development",
    "ecommerce-shopify",
    "ecommerce-development",
    "mobile-app-development",
    "custom-software-development",
    "pos-software",
    "seo-services",
    "digital-marketing",
  ]);

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SamePageTopLink href="/" className="inline-block text-white" aria-label={`${siteConfig.name} home`}>
              <Logo size="lg" />
              <span className="sr-only">{siteConfig.name} home</span>
            </SamePageTopLink>
            <p className="mt-2 text-[0.7rem] leading-relaxed tracking-wide text-slate-500">
              {siteConfig.legalDisplayName}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              WordbitX is a Pakistan-based software development company serving businesses worldwide. We build custom software, websites,
              mobile apps and business systems.
            </p>
            <div className="mt-5 flex gap-2.5">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  /**
                   * rel="me" claims these profiles as the same identity as this
                   * site. Paired with the sameAs list in the Organization schema
                   * it is the standard way to tell search engines that the new
                   * LinkedIn page — not the abandoned "WordBitx Tech." one the
                   * data aggregators still republish — is the official account.
                   */
                  rel="me noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${social.label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-brand-400/50 hover:text-brand-300"
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <NewsletterForm />
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Quick Links</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-slate-400 transition-colors hover:text-brand-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/software-house" className="text-slate-400 transition-colors hover:text-brand-300">
                    Cities in Pakistan
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="text-slate-400 transition-colors hover:text-brand-300">
                    How we work
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hiring-live-chip">
                    We&apos;re Hiring
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 transition-colors hover:text-brand-300">
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Services</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-slate-400 transition-colors hover:text-brand-300"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Industries &amp; Markets</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {industries.slice(0, 5).map((industry) => (
                  <li key={industry.slug}>
                    <Link href={`/industries/${industry.slug}`} className="text-slate-400 transition-colors hover:text-brand-300">
                      {industry.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/industries" className="text-slate-400 transition-colors hover:text-brand-300">
                    All industries
                  </Link>
                </li>
                {markets.slice(0, 4).map((market) => (
                  <li key={market.slug}>
                    <Link href={`/global/${market.slug}`} className="text-slate-400 transition-colors hover:text-brand-300">
                      {market.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/global" className="text-slate-400 transition-colors hover:text-brand-300">
                    All markets
                  </Link>
                </li>
                <li>
                  <Link href="/topics" className="text-slate-400 transition-colors hover:text-brand-300">
                    Software topics
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 transition-colors hover:text-brand-300">
                    Guides &amp; comparisons
                  </Link>
                </li>
                <li>
                  <Link href="/technologies" className="text-slate-400 transition-colors hover:text-brand-300">
                    Technologies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

         <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
           <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 text-sm">
             <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/10 text-brand-300">
               <MailIcon className="h-4.5 w-4.5" />
             </span>
             <span>
               <span className="block text-xs uppercase tracking-wide text-slate-500">Email</span>
               <span className="text-slate-200 transition-colors group-hover:text-brand-300">{siteConfig.email}</span>
             </span>
           </a>
           <a href={`tel:${siteConfig.phoneRaw}`} className="group flex items-center gap-3 text-sm">
             <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/10 text-brand-300">
               <PhoneIcon className="h-4.5 w-4.5" />
             </span>
             <span>
               <span className="block text-xs uppercase tracking-wide text-slate-500">Pakistan</span>
               <span className="text-slate-200 transition-colors group-hover:text-brand-300">{siteConfig.phoneDisplay}</span>
             </span>
           </a>
           <div className="flex items-center gap-3 text-sm">
             <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
               <GlobeIcon className="h-4.5 w-4.5" />
             </span>
             <span>
               <span className="block text-xs uppercase tracking-wide text-slate-500">USA &amp; Intl</span>
               <span className="text-slate-200">{siteConfig.usPhoneDisplay}</span>
               <span className="mt-1 flex flex-wrap gap-x-3 text-xs font-semibold">
                 <a
                   href={usWhatsappLink()}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#25D366] hover:text-[#6ce59a]"
                 >
                   WhatsApp USA
                 </a>
                 <a href={`tel:${siteConfig.usPhoneRaw}`} className="text-slate-300 hover:text-white">
                   Call USA office
                 </a>
               </span>
             </span>
           </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/10 text-brand-300">
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-slate-500">WhatsApp Pakistan</span>
              <span className="text-slate-200 transition-colors group-hover:text-brand-300">{siteConfig.phoneDisplay}</span>
            </span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/10 text-brand-300">
              <GlobeIcon className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-slate-500">Address</span>
              <span className="text-slate-200">{siteConfig.addressDisplay}</span>
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <p className="text-slate-500">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            {/* DMCA protection badge. The artwork DMCA serves is dark, so on
                the navy-950 footer it has to sit on a light pill to be legible
                — the previous transparent, 70%-opacity version was effectively
                invisible. The pill also keeps the slot visible if the remote
                image is slow or blocked. DMCABadgeHelper is loaded lazily so a
                third-party script never sits in the critical path. */}
            <a
              href={`//www.dmca.com/Protection/Status.aspx?ID=${siteConfig.dmcaProtectionId}`}
              title="DMCA.com Protection Status"
              target="_blank"
              rel="noopener noreferrer"
              className="dmca-badge inline-flex shrink-0 items-center rounded-md bg-white px-2.5 py-1.5 ring-1 ring-white/20 transition-shadow hover:ring-brand-400/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://images.dmca.com/Badges/DMCA_logo-200w.png?ID=${siteConfig.dmcaProtectionId}`}
                alt="DMCA.com Protection Status"
                width={200}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-[22px] w-auto"
              />
            </a>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-500 transition-colors hover:text-brand-300">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-brand-400 transition-colors hover:text-brand-300"
              >
                Start a project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Script
        src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
        strategy="lazyOnload"
      />
    </footer>
  );
}
