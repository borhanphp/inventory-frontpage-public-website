import { CheckCircle2 } from 'lucide-react';
import { mobileApps, portals } from '@/lib/site';

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[260px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-brand-400/30 blur-3xl" />
      <div className="relative rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl">
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
        <div className="overflow-hidden rounded-[1.9rem] bg-slate-50">
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-5 pb-6 pt-10 text-white">
            <p className="text-xs text-brand-100">Today&rsquo;s sales</p>
            <p className="font-display text-2xl font-bold">৳ 84,250</p>
            <p className="text-xs text-brand-200">+14% vs yesterday</p>
          </div>
          <div className="-mt-4 grid grid-cols-3 gap-2 px-4">
            {['POS', 'Scan', 'Orders', 'Stock', 'Deliver', 'Finance'].map((t) => (
              <div key={t} className="rounded-xl bg-white py-3 text-center text-[11px] font-semibold text-slate-700 shadow-sm">
                <span className="mx-auto mb-1 block h-6 w-6 rounded-lg bg-brand-100" />
                {t}
              </div>
            ))}
          </div>
          <div className="space-y-2 px-4 pb-6 pt-4">
            {[
              ['SO-1042', 'Delivered', 'text-emerald-600'],
              ['SO-1041', 'Paid', 'text-emerald-600'],
              ['SO-1039', 'Picking', 'text-amber-600']
            ].map(([id, s, c]) => (
              <div key={id} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 text-xs shadow-sm">
                <span className="font-semibold text-slate-800">{id}</span>
                <span className={`font-semibold ${c}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppsSection() {
  return (
    <section id="apps" className="scroll-mt-20 overflow-hidden bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="eyebrow">Mobile apps &amp; portals</span>
            <h2 className="section-title mt-5">Your business, in every pocket</h2>
            <p className="section-lead mt-5">
              Three native apps and five secure portals put the right slice of Zeeventory in front of managers,
              employees, customers, and partners — without giving anyone more access than they need.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {mobileApps.map(({ icon: Icon, name, audience, desc, points }) => (
                <div key={name} className="card flex flex-col p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-md">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-base font-semibold text-slate-900">{name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{audience}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <ul className="mt-3 space-y-1.5">
                    {points.map((p) => (
                      <li key={p} className="flex gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent-600" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <PhoneMock />
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <p className="text-sm font-semibold text-slate-900">Self-service portals — shared by secure link</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portals.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
