import { CheckCircle2, Layers, RefreshCw, Truck } from 'lucide-react';

const bullets = [
  'Real-time stock across warehouses with transfers and adjustments',
  'Sales orders, picking, and delivery tracking in one timeline',
  'Optional online storefront with branded theme and web pricing',
  'Accounting, CRM, HR, and projects available as your org grows'
];

export default function ProductSection() {
  return (
    <section id="product" className="scroll-mt-24 border-b border-slate-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Product</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              From first SKU to your first online order — without duct tape
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Zeeventory is built for operators who need accuracy today and room to add modules tomorrow.
              Start with inventory and sales; turn on ecommerce when you are ready for a public catalog.
            </p>
            <ul className="mt-8 space-y-4">
              {bullets.map((text) => (
                <li key={text} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/20 to-teal-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl">
              <div className="border-b border-slate-200 bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs font-medium text-slate-500">Zeeventory · Dashboard</span>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Stock health</p>
                      <p className="text-xs text-slate-500">On-hand vs committed</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">+12%</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Deliveries</p>
                      <p className="text-xs text-slate-500">Route-ready shipments</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">Live</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Store sync</p>
                      <p className="text-xs text-slate-500">Web orders → ERP</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
