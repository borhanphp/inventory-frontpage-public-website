import { Check, Minus, Sparkles } from 'lucide-react';
import { appPath, SIGNUP_URL } from '@/lib/links';
import { plans, SALES_EMAIL } from '@/lib/site';

const rows = [
  { label: 'Users', get: (p) => p.limits.users },
  { label: 'Products', get: (p) => p.limits.products },
  { label: 'Customers', get: (p) => p.limits.customers },
  { label: 'All 12 modules', get: () => true },
  { label: 'Mobile apps & portals', get: () => true },
  { label: 'Custom branding', get: (p) => p.customBranding },
  { label: 'API access', get: (p) => p.apiAccess },
  { label: 'Support', get: (p) => p.support }
];

function Cell({ value }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-accent-600" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto h-5 w-5 text-slate-300" aria-label="Not included" />;
  return <span className="font-medium text-slate-800">{value}</span>;
}

function ctaHref(plan) {
  return plan.key === 'enterprise' ? `mailto:${SALES_EMAIL}` : SIGNUP_URL;
}

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-[120px]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title mt-5">Simple pricing that grows with you</h2>
          <p className="section-lead mt-5">
            Every plan includes all 12 modules, the mobile apps, and the portals. Plans differ only in how many
            users, products, and customers you manage. Start with a 14-day free trial of everything.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative flex flex-col rounded-3xl p-7 transition ${
                plan.highlighted
                  ? 'bg-slate-950 text-white shadow-2xl shadow-brand-900/30 ring-1 ring-brand-500/50 xl:-my-4 xl:py-11'
                  : 'border border-slate-200 bg-white shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-500/20 to-transparent" />
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    <Sparkles className="h-3 w-3" aria-hidden /> Most popular
                  </span>
                </>
              )}
              <div className="relative flex flex-1 flex-col">
                <h3 className={`font-display text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-600'}`}>{plan.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl font-bold tracking-tight ${
                      plan.highlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-slate-400' : 'text-slate-500'}>/month</span>
                </p>

                <ul className={`mt-8 flex-1 space-y-3 text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-700'}`}>
                  {[
                    `${plan.limits.users} ${plan.limits.users === '1' ? 'user' : 'users'}`,
                    `${plan.limits.products} products`,
                    `${plan.limits.customers} customers`,
                    'All 12 modules',
                    plan.customBranding && 'Custom branding',
                    plan.apiAccess && 'API access',
                    plan.support
                  ]
                    .filter(Boolean)
                    .map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-brand-400' : 'text-accent-600'}`}
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                </ul>

                <a
                  href={ctaHref(plan)}
                  className={`mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-400'
                      : 'border border-slate-300 bg-white text-slate-900 hover:border-brand-400 hover:text-brand-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* comparison */}
        <div className="mt-20 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-sm">
            <caption className="sr-only">Plan comparison</caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left font-display text-base font-semibold text-slate-900">Compare plans</th>
                {plans.map((p) => (
                  <th
                    key={p.key}
                    className={`px-4 py-4 text-center font-display font-semibold ${
                      p.highlighted ? 'text-brand-700' : 'text-slate-900'
                    }`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-slate-100 last:border-0">
                  <th scope="row" className="px-6 py-3.5 text-left font-medium text-slate-600">
                    {r.label}
                  </th>
                  {plans.map((p) => (
                    <td key={p.key} className={`px-4 py-3.5 text-center ${p.highlighted ? 'bg-brand-50/50' : ''}`}>
                      <Cell value={r.get(p)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Prices in USD, billed monthly. Taxes may apply. Upgrade, downgrade, or cancel any time from the app.
        </p>
      </div>
    </section>
  );
}
