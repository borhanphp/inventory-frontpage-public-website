import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe2,
  MonitorSmartphone,
  ScanBarcode,
  ShoppingCart,
  Warehouse
} from 'lucide-react';

function InventoryVisual() {
  const rows = [
    ['Basmati Rice 5kg', 'Dhaka DC', 'A-03-2', 1240, 'ok'],
    ['Soybean Oil 5L', 'Chattogram', 'B-11-1', 86, 'low'],
    ['Detergent 1kg', 'Dhaka DC', 'C-02-4', 530, 'ok'],
    ['Tea 400g', 'Sylhet', 'A-07-3', 12, 'out']
  ];
  const badge = {
    ok: 'bg-emerald-50 text-emerald-700',
    low: 'bg-amber-50 text-amber-700',
    out: 'bg-rose-50 text-rose-700'
  };
  const label = { ok: 'In stock', low: 'Reorder', out: 'Critical' };
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <Warehouse className="h-4 w-4 text-brand-600" aria-hidden />
          <p className="text-sm font-semibold text-slate-900">Stock by location</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          <ScanBarcode className="h-3.5 w-3.5" aria-hidden /> Scan
        </span>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs text-slate-500">
          <tr>
            <th className="px-5 py-2 font-medium">Product</th>
            <th className="hidden px-3 py-2 font-medium sm:table-cell">Warehouse</th>
            <th className="hidden px-3 py-2 font-medium sm:table-cell">Bin</th>
            <th className="px-3 py-2 text-right font-medium">On hand</th>
            <th className="px-5 py-2 text-right font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([p, w, b, q, s]) => (
            <tr key={p} className="border-t border-slate-100">
              <td className="px-5 py-3 font-medium text-slate-800">{p}</td>
              <td className="hidden px-3 py-3 text-slate-500 sm:table-cell">{w}</td>
              <td className="hidden px-3 py-3 font-mono text-xs text-slate-500 sm:table-cell">{b}</td>
              <td className="px-3 py-3 text-right tabular-nums text-slate-800">{q.toLocaleString()}</td>
              <td className="px-5 py-3 text-right">
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge[s]}`}>{label[s]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between bg-brand-50 px-5 py-3 text-xs">
        <span className="text-brand-800">2 products below reorder point</span>
        <span className="font-semibold text-brand-700">Create purchase order →</span>
      </div>
    </div>
  );
}

function ChannelsVisual() {
  const channels = [
    { icon: ShoppingCart, name: 'Sales team', value: '412 orders', tone: 'from-emerald-400 to-emerald-600' },
    { icon: MonitorSmartphone, name: 'POS · 4 branches', value: '2,906 sales', tone: 'from-amber-400 to-amber-600' },
    { icon: Globe2, name: 'Online store', value: '688 orders', tone: 'from-cyan-400 to-cyan-600' },
    { icon: Bot, name: 'Tara AI agent', value: '184 orders', tone: 'from-violet-400 to-violet-600' }
  ];
  return (
    <div className="relative">
      <div className="grid gap-3 sm:grid-cols-2">
        {channels.map(({ icon: Icon, name, value, tone }) => (
          <div key={name} className="card p-5">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-sm`}>
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-4 text-sm text-slate-500">{name}</p>
            <p className="font-display text-2xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
      <div className="card mt-3 flex items-center gap-4 p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
          Z
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">One stock pool · one ledger</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="flex h-2">
              <span className="w-[10%] bg-emerald-500" />
              <span className="w-[69%] bg-amber-400" />
              <span className="w-[16%] bg-cyan-500" />
              <span className="w-[5%] bg-violet-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LedgerVisual() {
  const lines = [
    ['Accounts Receivable', '12,500.00', ''],
    ['Sales Revenue', '', '11,250.00'],
    ['VAT Payable', '', '1,250.00'],
    ['Cost of Goods Sold', '7,800.00', ''],
    ['Inventory', '', '7,800.00']
  ];
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Journal JE-2291</p>
          <p className="text-xs text-slate-500">Auto-posted from invoice INV-1042</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Balanced</span>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-xs text-slate-500">
          <tr>
            <th className="px-5 py-2 text-left font-medium">Account</th>
            <th className="px-3 py-2 text-right font-medium">Debit</th>
            <th className="px-5 py-2 text-right font-medium">Credit</th>
          </tr>
        </thead>
        <tbody className="tabular-nums">
          {lines.map(([a, d, c]) => (
            <tr key={a} className="border-t border-slate-100">
              <td className="px-5 py-2.5 text-slate-700">{a}</td>
              <td className="px-3 py-2.5 text-right text-slate-800">{d}</td>
              <td className="px-5 py-2.5 text-right text-slate-800">{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 text-center">
        {[
          ['P&L', 'Live'],
          ['Balance sheet', 'Live'],
          ['Period', 'Open']
        ].map(([k, v]) => (
          <div key={k} className="px-3 py-3">
            <p className="text-[11px] text-slate-500">{k}</p>
            <p className="text-sm font-semibold text-brand-700">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const showcases = [
  {
    eyebrow: 'Inventory & warehouses',
    title: 'Know exactly what you have, where it is, and what it is worth',
    body: 'Real-time stock across every warehouse, zone, and bin — with batch and serial tracking, scheduled cycle counts, and reorder planning that drafts purchase orders before you run out.',
    points: [
      'Multi-warehouse transfers with audit trail',
      'FIFO & weighted-average valuation, landed costs',
      'Barcode scanning from any phone',
      'Drop-ship, cross-dock, consignment, and RMA'
    ],
    links: [
      { href: '/modules/inventory', label: 'Inventory' },
      { href: '/modules/purchase', label: 'Purchase' }
    ],
    Visual: InventoryVisual
  },
  {
    eyebrow: 'Sell on every channel',
    title: 'Sales team, shop counter, website, and chat — one stock pool',
    body: 'Quotations and orders for B2B, an offline-ready POS for your branches, a branded online store, and Tara, the AI agent selling on WhatsApp and Messenger. Every channel reserves the same stock, so you never oversell.',
    points: [
      'Customer price lists, discounts, and blanket orders',
      'Courier booking with Pathao, Steadfast, and RedX',
      'Online payments via SSLCommerz, bKash, and Nagad',
      'COD fraud scoring before parcels leave'
    ],
    links: [
      { href: '/modules/sales', label: 'Sales' },
      { href: '/modules/pos', label: 'POS' },
      { href: '/modules/ecommerce', label: 'E-commerce' },
      { href: '/modules/ai-agent', label: 'Tara AI agent' }
    ],
    Visual: ChannelsVisual
  },
  {
    eyebrow: 'Accounting that keeps itself',
    title: 'Every transaction posts to the books — automatically',
    body: 'Invoices, bills, payments, stock movements, and payroll create balanced journal entries the moment they happen. Your P&L and balance sheet are always current, not a month-end project.',
    points: [
      'Receivables, payables, dunning, and bank reconciliation',
      'Multi-currency with FX revaluation',
      'Budgets, cost centers, fixed assets, and depreciation',
      'Tax codes, tax returns, and locked periods'
    ],
    links: [
      { href: '/modules/accounting', label: 'Accounting' },
      { href: '/modules/custom-invoicing', label: 'Custom Invoicing' }
    ],
    Visual: LedgerVisual
  }
];

export default function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-20 bg-slate-50 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The platform</span>
          <h2 className="section-title mt-5">
            One system. <span className="text-gradient-brand">Zero re-typing.</span>
          </h2>
          <p className="section-lead mt-5">
            Most businesses glue together a POS, a store plugin, a spreadsheet for stock, and separate accounting
            software. Zeeventory replaces the patchwork with one connected workspace.
          </p>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {showcases.map(({ eyebrow, title, body, points, links, Visual }, i) => (
            <div key={eyebrow} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                    >
                      {l.label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-200/50 via-transparent to-emerald-200/40 blur-2xl" />
                <div className="relative">
                  <Visual />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
