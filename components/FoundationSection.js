import { platformFeatures } from '@/lib/site';

export default function FoundationSection() {
  return (
    <section id="security" className="scroll-mt-20 relative overflow-hidden bg-slate-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-500/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow-dark">Built for control</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Enterprise-grade foundations, small-business simplicity
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Every module shares the same permissions, approvals, audit trail, and settings — so you configure
            control once and it applies everywhere.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-slate-950 p-6 transition hover:bg-slate-900">
              <Icon className="h-6 w-6 text-brand-400 transition group-hover:scale-110" aria-hidden />
              <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
