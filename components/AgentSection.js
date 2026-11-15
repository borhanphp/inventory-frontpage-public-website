import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, Globe, Mail, MessageCircle, MessageSquare, PackageCheck } from 'lucide-react';

const channels = [
  { icon: Globe, label: 'Website chat' },
  { icon: MessageCircle, label: 'Messenger' },
  { icon: MessageSquare, label: 'WhatsApp' },
  { icon: Mail, label: 'Email' }
];

const points = [
  'Understands Bangla, English and Banglish, even with typos',
  'Sends product photos, sizes and colours from your live catalogue',
  'Creates real sales orders — reserved and ready to ship',
  'Applies your coupons and follows up when customers go quiet',
  'Flags conversations that need a human, with fraud badges'
];

export default function AgentSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-500/15 blur-[120px]" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
            <Bot className="h-3.5 w-3.5" aria-hidden /> Tara · AI Sales Agent
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Meet Tara, the salesperson who never sleeps
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Customers message at midnight asking for prices, stock, and delivery times. The Zeeventory agent
            replies instantly on every channel and turns those chats into orders in your ERP.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" aria-hidden />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {channels.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
              >
                <Icon className="h-4 w-4 text-violet-300" aria-hidden />
                {label}
              </span>
            ))}
          </div>

          <Link
            href="/modules/ai-agent"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
          >
            Meet Tara
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* chat mock */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-2xl bg-white">
              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-600 text-white">
                  <Bot className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">Tara · Your shop</p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MessageSquare className="h-3 w-3" aria-hidden /> WhatsApp · replies instantly
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                  Online
                </span>
              </div>

              <div className="space-y-3 bg-slate-50 px-5 py-6 text-sm">
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-brand-600 px-4 py-2.5 text-white">
                  Do you have the 5L soybean oil? I need 3.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-slate-700 shadow-sm ring-1 ring-slate-100">
                  Yes! 86 in stock. 3 × 5L Soybean Oil = ৳2,670, plus ৳60 delivery in Dhaka. Shall I place the
                  order for cash on delivery?
                </div>
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-brand-600 px-4 py-2.5 text-white">
                  Yes please, same address as last time.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-slate-700 shadow-sm ring-1 ring-slate-100">
                  <p>Done ✅ Your order is confirmed.</p>
                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                    <PackageCheck className="h-5 w-5 text-brand-600" aria-hidden />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900">Order SO-1040 · ৳2,730</p>
                      <p className="text-slate-500">Delivery in 1–2 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-[11px] uppercase tracking-wider text-slate-500">In the ERP</p>
            <p className="text-sm font-semibold text-white">SO-1040 · stock reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
