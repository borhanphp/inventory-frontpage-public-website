import {
  BarChart3,
  Bot,
  Calculator,
  LayoutDashboard,
  MonitorSmartphone,
  PackageSearch,
  Search,
  ShoppingBasket,
  ShoppingCart,
  Store,
  Target,
  Users
} from 'lucide-react';

const side = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: PackageSearch, label: 'Inventory' },
  { icon: ShoppingCart, label: 'Sales' },
  { icon: ShoppingBasket, label: 'Purchase' },
  { icon: MonitorSmartphone, label: 'POS' },
  { icon: Store, label: 'E-commerce' },
  { icon: Bot, label: 'AI Agent' },
  { icon: Calculator, label: 'Accounting' },
  { icon: Target, label: 'CRM' },
  { icon: Users, label: 'HRM' }
];

const kpis = [
  { label: 'Revenue (30d)', value: '৳ 18.4L', delta: '+12.6%' },
  { label: 'Orders', value: '1,284', delta: '+8.1%' },
  { label: 'Stock value', value: '৳ 42.9L', delta: '+3.4%' },
  { label: 'Receivables', value: '৳ 6.2L', delta: '-4.0%' }
];

const bars = [38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 82, 95];

const orders = [
  { id: 'SO-1042', customer: 'Rahman Traders', channel: 'Web', status: 'Delivered', tone: 'emerald' },
  { id: 'SO-1041', customer: 'Nova Retail', channel: 'POS', status: 'Paid', tone: 'emerald' },
  { id: 'SO-1040', customer: 'Green Mart', channel: 'Agent', status: 'Shipped', tone: 'sky' },
  { id: 'SO-1039', customer: 'City Pharma', channel: 'Sales', status: 'Picking', tone: 'amber' }
];

const tone = {
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  sky: 'bg-sky-50 text-sky-700 ring-sky-200',
  amber: 'bg-amber-50 text-amber-700 ring-amber-200'
};

/** A static, illustrative rendering of the Zeeventory dashboard. */
export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 ring-1 ring-white/5">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="mx-auto hidden w-72 items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400 sm:flex">
          <Search className="h-3 w-3" aria-hidden /> app.zeeventory.com/dashboard
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-white/10 bg-slate-900 p-3 md:block">
          <div className="mb-4 flex items-center gap-2 px-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-[11px] font-bold text-white">
              Z
            </span>
            <span className="text-xs font-semibold text-white">Acme Distribution</span>
          </div>
          <ul className="space-y-0.5">
            {side.map(({ icon: Icon, label, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                  active ? 'bg-brand-500/15 font-semibold text-brand-300' : 'text-slate-400'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </aside>

        {/* content */}
        <div className="min-w-0 flex-1 bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-500">Good morning, Farhan</p>
              <p className="font-display text-sm font-bold text-slate-900">Business overview</p>
            </div>
            <span className="rounded-md bg-brand-700 px-2.5 py-1 text-[11px] font-semibold text-white">
              + New order
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-2.5">
                <p className="text-[10px] text-slate-500">{k.label}</p>
                <p className="mt-0.5 text-sm font-bold text-slate-900">{k.value}</p>
                <p className="text-[10px] font-semibold text-emerald-600">{k.delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 grid gap-2 lg:grid-cols-5">
            <div className="rounded-lg border border-slate-200 bg-white p-3 lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-slate-700">Sales by month</p>
                <BarChart3 className="h-3.5 w-3.5 text-slate-400" aria-hidden />
              </div>
              <div className="mt-3 flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i === bars.length - 1 ? 'bg-brand-600' : 'bg-brand-200'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 lg:col-span-2">
              <p className="text-[11px] font-semibold text-slate-700">Low stock</p>
              <ul className="mt-2 space-y-2">
                {[
                  ['Rice 25kg', 18],
                  ['Soybean oil 5L', 32],
                  ['Sugar 1kg', 55]
                ].map(([n, p]) => (
                  <li key={n}>
                    <div className="flex justify-between text-[10px] text-slate-600">
                      <span>{n}</span>
                      <span>{p}%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-slate-100">
                      <div
                        className={`h-1.5 rounded-full ${p < 25 ? 'bg-rose-500' : 'bg-amber-400'}`}
                        style={{ width: `${p}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-2 hidden rounded-lg border border-slate-200 bg-white sm:block">
            <p className="border-b border-slate-100 px-3 py-2 text-[11px] font-semibold text-slate-700">
              Recent orders
            </p>
            <table className="w-full text-left text-[10px]">
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-slate-50 last:border-0">
                    <td className="px-3 py-1.5 font-semibold text-brand-700">{o.id}</td>
                    <td className="px-3 py-1.5 text-slate-700">{o.customer}</td>
                    <td className="px-3 py-1.5 text-slate-500">{o.channel}</td>
                    <td className="px-3 py-1.5 text-right">
                      <span className={`rounded-full px-2 py-0.5 font-medium ring-1 ${tone[o.tone]}`}>{o.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
