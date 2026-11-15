import { integrationNames, stats } from '@/lib/site';

export default function IntegrationStrip() {
  const row = [...integrationNames, ...integrationNames];
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-x py-12">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col text-center">
              <dt className="order-2 mt-1 text-sm text-slate-500">{s.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                <span className="text-gradient-brand">{s.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-slate-100 py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Works with the services you already use
        </p>
        <div className="marquee relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-3">
            {row.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= integrationNames.length}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 py-2 font-display text-sm font-semibold text-slate-600"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
