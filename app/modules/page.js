import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { moduleCategories, modules } from '@/lib/modules';
import { getColor } from '@/lib/colors';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Modules — Zeeventory',
  description:
    'Explore all 12 Zeeventory modules: Inventory, Sales, Purchase, Point of Sale, E-commerce, AI Sales Agent, Accounting, CRM, Marketing, HRM & Payroll, Projects, and Custom Invoicing.',
  openGraph: {
    title: 'Zeeventory Modules',
    description:
      'Enable only the modules your team needs. From inventory and POS to accounting and HR — built to work together.'
  }
};

function slugId(cat) {
  return cat.toLowerCase().replace(/[^a-z]+/g, '-');
}

export default function ModulesPage() {
  const featureCount = modules.reduce((n, m) => n + m.features.length + (m.highlights?.length || 0), 0);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" />
          <div className="container-x relative text-center">
            <span className="eyebrow-dark">Modules</span>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              12 modules. <span className="text-gradient">One connected business.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Turn on what you need today and add the rest as you grow. Every module shares the same customers,
              products, stock, and ledger.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {moduleCategories.map((cat) => (
                <a
                  key={cat}
                  href={`#${slugId(cat)}`}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-400/50 hover:bg-white/10"
                >
                  {cat}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">{featureCount}+ capabilities listed across all modules</p>
          </div>
        </section>

        {/* Module groups */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container-x space-y-20">
            {moduleCategories.map((cat) => (
              <div key={cat} id={slugId(cat)} className="scroll-mt-24">
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-2xl font-bold text-slate-900">{cat}</h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {modules
                    .filter((m) => m.category === cat)
                    .map(({ slug, name, icon: Icon, color, tagline, description, features }) => {
                      const c = getColor(color);
                      return (
                        <Link
                          key={slug}
                          href={`/modules/${slug}`}
                          className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${c.hoverBorder}`}
                        >
                          <div
                            className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${c.glow} opacity-40 blur-3xl transition group-hover:opacity-80`}
                          />
                          <div className="relative flex items-start gap-4">
                            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${c.tile} text-white shadow-lg`}>
                              <Icon className="h-7 w-7" aria-hidden />
                            </span>
                            <div>
                              <h3 className="font-display text-xl font-bold text-slate-900">{name}</h3>
                              <p className={`mt-1 text-sm font-medium ${c.text}`}>{tagline}</p>
                            </div>
                          </div>
                          <p className="relative mt-5 text-sm leading-relaxed text-slate-600">{description}</p>
                          <ul className="relative mt-5 grid flex-1 gap-2 sm:grid-cols-2">
                            {features.map((f) => (
                              <li key={f.title} className="flex gap-2 text-sm text-slate-700">
                                <Check className={`mt-0.5 h-4 w-4 shrink-0 ${c.text}`} aria-hidden />
                                {f.title}
                              </li>
                            ))}
                          </ul>
                          <span className={`relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}`}>
                            Explore {name}
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                          </span>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABand
          title="Start with what you need. Add modules as you grow."
          body="Every plan includes all 12 modules. Turn them on from Settings whenever your team is ready — your data is already connected."
        />
      </main>
      <SiteFooter />
    </>
  );
}
