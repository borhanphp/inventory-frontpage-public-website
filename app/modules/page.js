import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { modules } from '@/lib/modules';
import { appPath } from '@/lib/links';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Modules — Zeeventory',
  description:
    'Explore every Zeeventory module: Inventory, Sales, E-commerce, Accounting, CRM, HRM, Projects, and Custom Invoicing.',
  openGraph: {
    title: 'Zeeventory Modules',
    description:
      'Enable only the modules your team needs. From inventory and sales to accounting and HR — built to work together.'
  }
};

const colorTextMap = {
  indigo: 'text-indigo-600',
  emerald: 'text-emerald-600',
  teal: 'text-teal-600',
  amber: 'text-amber-600',
  violet: 'text-violet-600',
  rose: 'text-rose-600',
  sky: 'text-sky-600',
  orange: 'text-orange-600'
};

const colorBgMap = {
  indigo: 'bg-indigo-50 group-hover:bg-indigo-100',
  emerald: 'bg-emerald-50 group-hover:bg-emerald-100',
  teal: 'bg-teal-50 group-hover:bg-teal-100',
  amber: 'bg-amber-50 group-hover:bg-amber-100',
  violet: 'bg-violet-50 group-hover:bg-violet-100',
  rose: 'bg-rose-50 group-hover:bg-rose-100',
  sky: 'bg-sky-50 group-hover:bg-sky-100',
  orange: 'bg-orange-50 group-hover:bg-orange-100'
};

export default function ModulesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Modules
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Pick what you need.{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-white to-teal-300 bg-clip-text text-transparent">
                Leave the rest off.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Every organization is different. Zeeventory lets you enable only the modules that
              match how your team works — no bloated suite, no wasted seats.
            </p>
          </div>
        </section>

        {/* Module grid */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {modules.map(({ slug, name, icon: Icon, color, tagline, description }) => (
                <Link
                  key={slug}
                  href={`/modules/${slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-brand-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl ${colorBgMap[color] || 'bg-brand-50'} ${colorTextMap[color] || 'text-brand-600'} transition`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-xl font-bold text-slate-900">{name}</h2>
                      <p className={`mt-1 text-sm font-medium ${colorTextMap[color] || 'text-brand-600'}`}>
                        {tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-teal-700 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Start with what you need. Add modules as you grow.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Every module works together seamlessly. Sign in to enable yours.
            </p>
            <a
              href={appPath('/login')}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-700 shadow-xl transition hover:bg-slate-100"
            >
              Open Zeeventory
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
