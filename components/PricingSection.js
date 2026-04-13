import { Check } from 'lucide-react';
import { appPath } from '@/lib/links';

const tiers = [
  {
    name: 'Starter',
    price: 'Free trial',
    blurb: 'Explore core inventory and sales with your team.',
    features: ['Guided onboarding', 'Inventory & warehouses', 'Sales orders', 'Email support'],
    cta: 'Start trial',
    highlighted: false
  },
  {
    name: 'Growth',
    price: 'Talk to us',
    blurb: 'E-commerce, accounting, and advanced workflows.',
    features: [
      'Everything in Starter',
      'Online storefront & branding',
      'Role-based access',
      'Deliveries & fulfillment',
      'Priority support options'
    ],
    cta: 'Open app',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Multi-entity, integrations, and dedicated success.',
    features: ['Custom domains & SLAs', 'API access', 'Volume pricing', 'Solutions architect'],
    cta: 'Contact sales',
    highlighted: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-slate-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Start small. Scale the stack when revenue justifies it.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Final billing depends on your plan and modules — use the app to see current offers for your organization.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.highlighted
                  ? 'border-brand-500 bg-gradient-to-b from-brand-50 to-white shadow-xl shadow-brand-500/10 ring-2 ring-brand-500'
                  : 'border-slate-200 bg-slate-50/50'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{tier.blurb}</p>
              <p className="mt-6 font-display text-3xl font-bold text-slate-900">{tier.price}</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.name === 'Enterprise' ? 'mailto:sales@zeeventory.com' : appPath('/login')}
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  tier.highlighted
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
