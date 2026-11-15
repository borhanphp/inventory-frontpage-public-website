import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Sparkles } from 'lucide-react';
import { modules, getModuleBySlug, getAllModuleSlugs } from '@/lib/modules';
import { getColor } from '@/lib/colors';
import { SIGNUP_URL } from '@/lib/links';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';

export function generateStaticParams() {
  return getAllModuleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};
  return {
    title: `${mod.name} — Zeeventory`,
    description: mod.description,
    openGraph: {
      title: `${mod.name} Module — Zeeventory`,
      description: mod.tagline
    }
  };
}

export default function ModuleDetailPage({ params }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) notFound();

  const c = getColor(mod.color);
  const Icon = mod.icon;

  const idx = modules.findIndex((m) => m.slug === mod.slug);
  const prevMod = modules[(idx - 1 + modules.length) % modules.length];
  const nextMod = modules[(idx + 1) % modules.length];

  // Same-category modules first, then fill with the rest
  const related = [
    ...modules.filter((m) => m.slug !== mod.slug && m.category === mod.category),
    ...modules.filter((m) => m.slug !== mod.slug && m.category !== mod.category)
  ].slice(0, 4);

  const total = mod.features.length + (mod.highlights?.length || 0);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${c.hero} pb-20 pt-32 md:pb-28 md:pt-40`}>
          <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:radial-gradient(ellipse_70%_70%_at_30%_20%,black,transparent)]" />
          <div className={`pointer-events-none absolute -left-20 -top-20 h-[420px] w-[420px] rounded-full ${c.glow} blur-[120px]`} />

          <div className="container-x relative">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              All modules
            </Link>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4">
                  <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${c.tile} text-white shadow-xl ring-1 ring-white/20`}>
                    <Icon className="h-8 w-8" aria-hidden />
                  </span>
                  <span className={`text-sm font-semibold uppercase tracking-wider ${c.textLight}`}>{mod.category}</span>
                </div>
                <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {mod.name}
                </h1>
                <p className="mt-4 max-w-2xl text-xl leading-relaxed text-white/80">{mod.tagline}</p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">{mod.description}</p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href={SIGNUP_URL} className="btn-light">
                    Try {mod.name} free
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a href="#capabilities" className="btn-ghost-dark">
                    See all {total} capabilities
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">At a glance</p>
                  <ul className="mt-4 space-y-3">
                    {mod.features.map((f) => (
                      <li key={f.title} className="flex items-center gap-3 text-sm text-white/90">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                          <f.icon className={`h-3.5 w-3.5 ${c.textLight}`} aria-hidden />
                        </span>
                        {f.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section id="capabilities" className="scroll-mt-20 bg-white py-20 md:py-28">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className={`text-sm font-semibold uppercase tracking-wider ${c.text}`}>Capabilities</p>
              <h2 className="section-title mt-3">Everything your team needs in {mod.name}</h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mod.features.map(({ icon: FeatIcon, title, desc }) => (
                <div
                  key={title}
                  className={`group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${c.hoverBorder}`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.soft} ${c.text} transition ${c.softHover}`}
                  >
                    <FeatIcon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>

            {mod.highlights?.length > 0 && (
              <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-9">
                <div className="flex items-center gap-2">
                  <Sparkles className={`h-5 w-5 ${c.text}`} aria-hidden />
                  <h3 className="font-display text-lg font-semibold text-slate-900">Also included</h3>
                </div>
                <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {mod.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-slate-700">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${c.text}`} aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wider ${c.text}`}>Use cases</p>
              <h2 className="section-title mt-3">Built for teams like yours</h2>
              <p className="section-lead mt-4">
                {mod.name} is designed for real operational workflows. These are the teams that get the most from it.
              </p>
            </div>
            <ul className="grid gap-4">
              {mod.useCases.map((uc) => (
                <li key={uc} className="card flex gap-4 p-5 text-slate-700">
                  <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${c.text}`} aria-hidden />
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related modules */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-x">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Better together</p>
              <h2 className="section-title mt-3">Works with every other module</h2>
              <p className="section-lead mx-auto mt-4 max-w-2xl">
                Zeeventory modules share customers, products, stock, and the ledger. Add more as you grow.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(({ slug, name, icon: OtherIcon, tagline, color }) => {
                const oc = getColor(color);
                return (
                  <Link
                    key={slug}
                    href={`/modules/${slug}`}
                    className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${oc.hoverBorder}`}
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${oc.tile} text-white shadow-md`}>
                      <OtherIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <nav className="border-y border-slate-200 bg-slate-50" aria-label="Module navigation">
          <div className="container-x flex items-stretch divide-x divide-slate-200">
            <Link href={`/modules/${prevMod.slug}`} className="flex flex-1 items-center gap-3 py-8 pr-6 transition hover:text-brand-700">
              <ArrowLeft className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Previous</p>
                <p className="mt-1 font-display font-semibold text-slate-900">{prevMod.name}</p>
              </div>
            </Link>
            <Link
              href={`/modules/${nextMod.slug}`}
              className="flex flex-1 items-center justify-end gap-3 py-8 pl-6 text-right transition hover:text-brand-700"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Next</p>
                <p className="mt-1 font-display font-semibold text-slate-900">{nextMod.name}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
            </Link>
          </div>
        </nav>

        <CTABand
          title={`Ready to put ${mod.name} to work?`}
          body={`${mod.name} is included in every Zeeventory plan. Start a 14-day free trial with every module switched on.`}
          primaryLabel={`Get started with ${mod.name}`}
        />
      </main>
      <SiteFooter />
    </>
  );
}
