import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { moduleCategories, modules } from '@/lib/modules';
import { getColor } from '@/lib/colors';

export default function ModulesSection() {
  return (
    <section id="modules" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">12 modules</span>
            <h2 className="section-title mt-5">Everything a growing business runs on</h2>
            <p className="section-lead mt-5">
              Switch on the modules you need today and add the rest as you grow. They already share
              customers, products, and the ledger — so there is nothing to integrate.
            </p>
          </div>
          <Link href="/modules" className="btn-primary shrink-0">
            Explore all modules
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 space-y-10">
          {moduleCategories.map((cat) => {
            const items = modules.filter((m) => m.category === cat);
            return (
              <div key={cat}>
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{cat}</h3>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(({ slug, name, tagline, icon: Icon, color, features }) => {
                    const c = getColor(color);
                    return (
                      <Link
                        key={slug}
                        href={`/modules/${slug}`}
                        className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${c.hoverBorder}`}
                      >
                        <div
                          className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${c.glow} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`}
                        />
                        <div className="relative flex items-center gap-4">
                          <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.tile} text-white shadow-md`}>
                            <Icon className="h-6 w-6" aria-hidden />
                          </span>
                          <div>
                            <h4 className="font-display text-lg font-semibold text-slate-900">{name}</h4>
                            <p className="text-sm text-slate-500">{tagline}</p>
                          </div>
                        </div>
                        <ul className="relative mt-5 flex flex-wrap gap-1.5">
                          {features.slice(0, 4).map((f) => (
                            <li key={f.title} className={`rounded-md ${c.soft} px-2 py-1 text-xs font-medium text-slate-700`}>
                              {f.title}
                            </li>
                          ))}
                        </ul>
                        <span className={`relative mt-5 inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}>
                          Learn more
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
