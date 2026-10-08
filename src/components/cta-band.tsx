import { ButtonLink } from "@/components/ui";
import { WhatsAppIcon, MailIcon, PhoneIcon, GlobeIcon } from "@/components/icons";
import { siteConfig, usWhatsappLink, whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Let's build something your business can grow on",
  description = "Tell us about the product, system or campaign you have in mind. You will get an honest assessment, a scoped plan and a realistic timeline — not a sales pitch.",
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
  whatsappMessage,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="defer-paint bg-white py-12 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-navy-950 px-4 py-10 sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
          <div
            className="absolute -left-16 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-500/12 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">{description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={primaryHref} className="w-full sm:w-auto">
                  {primaryLabel}
                </ButtonLink>
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-brand-400/60 sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>

              <ol className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
                {[
                  { step: "01", label: "Discovery call", text: "20–30 minutes on goals, constraints and budget." },
                  { step: "02", label: "Written scope", text: "Milestones, deliverables and a realistic timeline." },
                  { step: "03", label: "Build & launch", text: "Weekly demos, then post-launch stabilisation." },
                ].map((item) => (
                  <li key={item.step} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-300">
                      {item.step}
                    </span>
                    <span className="mt-1.5 block text-sm font-semibold text-white">{item.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/12 text-brand-300">
                  <MailIcon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm">
                  <span className="block text-xs uppercase tracking-wide text-slate-500">Email us</span>
                  <span className="break-all text-slate-200 group-hover:text-brand-300 sm:break-normal">{siteConfig.email}</span>
                </span>
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="group flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/12 text-brand-300">
                  <PhoneIcon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm">
                  <span className="block text-xs uppercase tracking-wide text-slate-500">Call or WhatsApp (PK)</span>
                  <span className="text-slate-200 group-hover:text-brand-300">{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                  <GlobeIcon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm">
                  <span className="block text-xs uppercase tracking-wide text-slate-500">USA &amp; International</span>
                  <span className="text-slate-200">{siteConfig.usPhoneDisplay}</span>
                  <span className="mt-1 flex flex-wrap gap-x-3 text-xs font-semibold">
                    <a
                      href={usWhatsappLink(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#6ce59a]"
                    >
                      WhatsApp
                    </a>
                    <a href={`tel:${siteConfig.usPhoneRaw}`} className="text-slate-300 hover:text-white">
                      Call
                    </a>
                  </span>
                </span>
              </div>
              <p className="pt-1 text-xs leading-relaxed text-slate-400">
                Typical reply time: same business day. We work with clients across Pakistan, the UK, US, UAE and Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
