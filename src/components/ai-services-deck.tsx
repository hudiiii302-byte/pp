import type { ReactNode } from "react";

export function AiServicesDeck({ children }: { children: ReactNode }) {
  return (
    <section
      id="services"
      className="defer-paint relative overflow-hidden bg-navy-950 py-12 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/18 blur-[140px]" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sky-500/12 blur-[130px]" aria-hidden="true" />
      <div className="container-page relative z-10">{children}</div>
    </section>
  );
}
