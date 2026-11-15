import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { modules, getModuleBySlug, getAllModuleSlugs } from '@/lib/modules';
import { appPath } from '@/lib/links';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500',
    bgLight: 'bg-indigo-50',
    bgLighter: 'bg-indigo-100',
    text: 'text-indigo-600',
    textLight: 'text-brand-400',
    border: 'border-indigo-200',
    gradient: 'from-indigo-600 to-indigo-800',
    heroGradient: 'from-indigo-600 via-indigo-700 to-slate-900',
    ring: 'ring-indigo-500/20',
    shadow: 'shadow-brand-500/10'
  },
  emerald: {
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-50',
    bgLighter: 'bg-emerald-100',
    text: 'text-emerald-600',
    textLight: 'text-emerald-400',
    border: 'border-emerald-200',
    gradient: 'from-emerald-600 to-emerald-800',
    heroGradient: 'from-emerald-600 via-emerald-700 to-slate-900',
    ring: 'ring-emerald-500/20',
    shadow: 'shadow-emerald-500/10'
  },
  teal: {
    bg: 'bg-teal-500',
    bgLight: 'bg-teal-50',
    bgLighter: 'bg-teal-100',
    text: 'text-teal-600',
    textLight: 'text-teal-400',
    border: 'border-teal-200',
    gradient: 'from-teal-600 to-teal-800',
    heroGradient: 'from-teal-600 via-teal-700 to-slate-900',
    ring: 'ring-teal-500/20',
    shadow: 'shadow-teal-500/10'
  },
  amber: {
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-50',
    bgLighter: 'bg-amber-100',
    text: 'text-amber-600',
    textLight: 'text-amber-400',
    border: 'border-amber-200',
    gradient: 'from-amber-600 to-amber-800',
    heroGradient: 'from-amber-600 via-amber-700 to-slate-900',
    ring: 'ring-amber-500/20',
    shadow: 'shadow-amber-500/10'
  },
  violet: {
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-50',
    bgLighter: 'bg-violet-100',
    text: 'text-violet-600',
    textLight: 'text-violet-400',
    border: 'border-violet-200',
    gradient: 'from-violet-600 to-violet-800',
    heroGradient: 'from-violet-600 via-violet-700 to-slate-900',
    ring: 'ring-violet-500/20',
    shadow: 'shadow-violet-500/10'
  },
  rose: {
    bg: 'bg-rose-500',
    bgLight: 'bg-rose-50',
    bgLighter: 'bg-rose-100',
    text: 'text-rose-600',
    textLight: 'text-rose-400',
    border: 'border-rose-200',
    gradient: 'from-rose-600 to-rose-800',
    heroGradient: 'from-rose-600 via-rose-700 to-slate-900',
    ring: 'ring-rose-500/20',
    shadow: 'shadow-rose-500/10'
  },
  sky: {
    bg: 'bg-sky-500',
    bgLight: 'bg-sky-50',
    bgLighter: 'bg-sky-100',
    text: 'text-sky-600',
    textLight: 'text-sky-400',
    border: 'border-sky-200',
    gradient: 'from-sky-600 to-sky-800',
    heroGradient: 'from-sky-600 via-sky-700 to-slate-900',
    ring: 'ring-sky-500/20',
    shadow: 'shadow-sky-500/10'
  },
  orange: {
    bg: 'bg-orange-500',
    bgLight: 'bg-orange-50',
    bgLighter: 'bg-orange-100',
    text: 'text-orange-600',
    textLight: 'text-orange-400',
    border: 'border-orange-200',
    gradient: 'from-orange-600 to-orange-800',
    heroGradient: 'from-orange-600 via-orange-700 to-slate-900',
    ring: 'ring-orange-500/20',
    shadow: 'shadow-orange-500/10'
  }
};

export function generateStaticParams() {
  return getAllModuleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};
  return {
    title: `${mod.name} — Zeeventory`,
    description: mod.tagline,
    openGraph: {
      title: `${mod.name} Module — Zeeventory`,
      description: mod.description
    }
  };
}

export default function ModuleDetailPage({ params }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) notFound();

  const c = colorMap[mod.color] || colorMap.indigo;
  const Icon = mod.icon;

  const currentIdx = modules.findIndex((m) => m.slug === mod.slug);
  const prevMod = currentIdx > 0 ? modules[currentIdx - 1] : null;
  const nextMod = currentIdx < modules.length - 1 ? modules[currentIdx + 1] : null;

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${c.heroGradient} pb-20 pt-32 md:pb-28 md:pt-40`}>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              All modules
            </Link>

            <div className="mt-8 flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" aria-hidden />
              </div>
              <div>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {mod.name}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  {mod.tagline}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/60">
              {mod.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={appPath('/login')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-xl transition hover:bg-slate-100"
              >
                Try {mod.name}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore all modules
              </Link>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className={`text-sm font-semibold uppercase tracking-wider ${c.text}`}>
                Capabilities
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Everything your team needs in {mod.name}
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mod.features.map(({ icon: FeatIcon, title, desc }) => (
                <div
                  key={title}
                  className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:${c.border} hover:shadow-md`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bgLight} ${c.text} transition group-hover:${c.bgLighter}`}
                  >
                    <FeatIcon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${c.text}`}>
                  Use cases
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Built for teams like yours
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  {mod.name} is designed for real operational workflows. Here are some of the
                  teams that get the most value.
                </p>
              </div>
              <ul className="space-y-4">
                {mod.useCases.map((uc) => (
                  <li key={uc} className="flex gap-3 text-slate-700">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${c.text}`}
                      aria-hidden
                    />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Other modules */}
        <section className="border-t border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Explore more
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Works with every other module
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Zeeventory modules share data seamlessly. Enable what you need and add more as you grow.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {modules
                .filter((m) => m.slug !== mod.slug)
                .slice(0, 4)
                .map(({ slug, name, icon: OtherIcon, tagline }) => (
                  <Link
                    key={slug}
                    href={`/modules/${slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                      <OtherIcon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tagline}</p>
                  </Link>
                ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
              >
                View all modules
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-6xl items-stretch divide-x divide-slate-200">
            {prevMod ? (
              <Link
                href={`/modules/${prevMod.slug}`}
                className="flex flex-1 items-center gap-3 px-6 py-8 transition hover:bg-slate-100"
              >
                <ArrowLeft className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Previous
                  </p>
                  <p className="mt-1 font-display font-semibold text-slate-900">{prevMod.name}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextMod ? (
              <Link
                href={`/modules/${nextMod.slug}`}
                className="flex flex-1 items-center justify-end gap-3 px-6 py-8 text-right transition hover:bg-slate-100"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Next
                  </p>
                  <p className="mt-1 font-display font-semibold text-slate-900">{nextMod.name}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-teal-700 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Ready to put {mod.name} to work?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
              Sign in to your workspace or start a trial. {mod.name} is included in every
              Zeeventory plan.
            </p>
            <a
              href={appPath('/login')}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-700 shadow-xl transition hover:bg-slate-100"
            >
              Get started with {mod.name}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
