import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DEMO_URL, SIGNUP_URL } from '@/lib/links';

export default function CTABand({
  title = 'Ready to run your business from one place?',
  body = 'Start a 14-day free trial with every module switched on. No credit card, no setup fee — just sign up and invite your team.',
  primaryLabel = 'Start your free trial'
}) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 px-6 py-16 text-center shadow-2xl shadow-brand-900/30 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-100">{body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={SIGNUP_URL} className="btn-light px-8 py-4 text-brand-800">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={DEMO_URL} className="btn-ghost-dark px-8 py-4">
              Book a demo
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-100">
            {['All 12 modules', 'Web + 3 mobile apps', 'Cancel any time'].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-300" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
