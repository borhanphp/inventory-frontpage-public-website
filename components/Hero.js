import {
  ArrowRight,
  BarChart3,
  Boxes,
  Globe2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { appPath } from '@/lib/links';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-indigo-200">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" aria-hidden />
          Inventory · Sales · Storefront · Accounting — one workspace
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          The operating system for{' '}
          <span className="bg-gradient-to-r from-indigo-300 via-white to-teal-300 bg-clip-text text-transparent">
            stock and revenue
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          Zeeventory connects warehouses, sales orders, deliveries, and your online store so your team
          stops reconciling spreadsheets and starts shipping faster.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={appPath('/login')}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-xl shadow-indigo-500/10 transition hover:bg-slate-100"
          >
            Get started
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#product"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            See how it works
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Boxes, label: 'Multi-warehouse inventory' },
            { icon: BarChart3, label: 'Sales & fulfillment' },
            { icon: Globe2, label: 'Built-in ecommerce' },
            { icon: ShieldCheck, label: 'Roles & audit-friendly' }
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
            >
              <Icon className="h-5 w-5 shrink-0 text-indigo-400" aria-hidden />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
