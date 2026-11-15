import { workflow } from '@/lib/site';

export default function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-dark">Order to cash</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Follow one order through the whole business
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Each step hands its data to the next. Nobody re-enters a customer, a price, or a quantity.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent lg:block"
          />
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">
          {workflow.map((w, i) => (
            <li key={w.step} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-400/30 bg-slate-900 font-display text-lg font-bold text-brand-300 shadow-lg shadow-brand-500/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 font-display text-base font-semibold text-white">{w.step}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">{w.module}</p>
              <p className="mt-2 text-sm leading-snug text-slate-400">{w.desc}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
