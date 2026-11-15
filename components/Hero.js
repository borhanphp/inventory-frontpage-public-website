import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, PlayCircle, Sparkles, Truck } from 'lucide-react';
import DashboardMock from '@/components/DashboardMock';
import { SIGNUP_URL } from '@/lib/links';

const assurances = ['14-day free trial', 'No credit card required', 'Set up in minutes'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 md:pb-28 md:pt-40">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-emerald-500/15 blur-[100px]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/modules/ai-agent"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-xs font-medium text-slate-300 backdrop-blur transition hover:border-brand-400/40"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-2 py-0.5 text-[11px] font-semibold text-white">
              <Sparkles className="h-3 w-3" aria-hidden /> New
            </span>
            Meet Tara: the AI agent that sells on WhatsApp &amp; Messenger
            <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" aria-hidden />
          </Link>

          <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Run your entire business <span className="text-gradient">from one place</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Zeeventory is the all-in-one cloud ERP for inventory, sales, purchasing, POS, online store,
            accounting, CRM, HR, and projects — connected so every sale updates stock, books, and customers
            at once.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={SIGNUP_URL} className="btn-primary bg-brand-500 px-7 py-4 hover:bg-brand-400">
              Start your free trial
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#platform" className="btn-ghost-dark px-7 py-4">
              <PlayCircle className="h-4 w-4" aria-hidden />
              Take the tour
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            {assurances.map((a) => (
              <li key={a} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* product visual */}
        <div className="relative mx-auto mt-16 max-w-6xl md:mt-20">
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-[2.5rem] bg-gradient-to-b from-brand-500/20 via-brand-500/5 to-transparent blur-2xl" />
          <div className="relative">
            <DashboardMock />
          </div>

          {/* floating notifications */}
          <div className="absolute -left-6 top-24 hidden w-64 animate-float rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur xl:block">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                <Bot className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Tara created SO-1040</p>
                <p className="mt-0.5 text-[11px] text-slate-400">via WhatsApp · stock reserved</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 bottom-16 hidden w-64 animate-float-slow rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur xl:block">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                <Truck className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">SO-1042 delivered</p>
                <p className="mt-0.5 text-[11px] text-slate-400">Pathao · invoice posted to ledger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
