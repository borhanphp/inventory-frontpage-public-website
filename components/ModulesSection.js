import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { modules } from '@/lib/modules';

export default function ModulesSection() {
  return (
    <section id="modules" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Modules</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Enable what you need. Leave the rest off until it earns a seat at the table.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Organizations pick a module mix that matches how they work — no bloated suite you pay for but never
            open.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ slug, name, tagline, icon: Icon }) => (
            <Link
              key={slug}
              href={`/modules/${slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{tagline}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
