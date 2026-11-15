import { industries } from '@/lib/site';

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Who it&rsquo;s for</span>
          <h2 className="section-title mt-5">Shaped around how you actually work</h2>
          <p className="section-lead mt-5">
            Start from the module mix that fits your business today. Change it whenever you like.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, desc, modules }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-100 opacity-60 transition group-hover:scale-150" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-slate-900">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              <ul className="relative mt-5 flex flex-wrap gap-1.5">
                {modules.map((m) => (
                  <li key={m} className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-800">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
