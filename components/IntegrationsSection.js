import { CreditCard, Megaphone, MessagesSquare, Truck } from 'lucide-react';
import { integrationGroups } from '@/lib/site';

const icons = {
  Couriers: Truck,
  Payments: CreditCard,
  Messaging: MessagesSquare,
  'Marketing & ads': Megaphone
};

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="scroll-mt-20 bg-slate-50 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Integrations</span>
          <h2 className="section-title mt-5">Connected to the services you rely on</h2>
          <p className="section-lead mt-5">
            Book couriers, take payments, message customers, and measure ads without leaving Zeeventory. Need
            something else? Use the REST API on Professional and Enterprise plans.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {integrationGroups.map(({ title, desc, items }) => {
            const Icon = icons[title];
            return (
              <div key={title} className="card p-7 transition hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {items.map((name) => (
                    <li
                      key={name}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 font-display text-sm font-semibold text-slate-700"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
