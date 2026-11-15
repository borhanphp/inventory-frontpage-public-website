import {
  ShieldCheck,
  KeyRound,
  GitPullRequestArrow,
  History,
  Languages,
  Coins,
  Upload,
  Zap,
  Building2,
  Ruler,
  Smartphone,
  Users,
  ShoppingBag,
  FileText,
  Wallet,
  Receipt,
  UserCircle,
  Landmark,
  Boxes,
  Factory,
  Store,
  Briefcase,
  Bell,
  Cloud
} from 'lucide-react';

export const SALES_EMAIL = 'sales@zeeventory.com';
export const SUPPORT_EMAIL = 'support@zeeventory.com';

/** Headline numbers — all describe the product itself, not customers. */
export const stats = [
  { value: '12', label: 'Integrated modules' },
  { value: '150+', label: 'Built-in features' },
  { value: '3', label: 'Mobile apps' },
  { value: '14 days', label: 'Free trial, all features' }
];

/** Order-to-cash flow shown on the home page. */
export const workflow = [
  { step: 'Lead', module: 'CRM', desc: 'Captured from a landing page, chat, or call' },
  { step: 'Quotation', module: 'Sales', desc: 'Priced from the customer’s price list' },
  { step: 'Order', module: 'Sales', desc: 'Stock reserved in the right warehouse' },
  { step: 'Pick & pack', module: 'Inventory', desc: 'Pick list generated, items scanned' },
  { step: 'Delivery', module: 'Sales', desc: 'Courier booked, tracking synced' },
  { step: 'Invoice', module: 'Sales', desc: 'Emailed as PDF with a pay link' },
  { step: 'Payment', module: 'Accounting', desc: 'Posted to the ledger automatically' }
];

export const integrationGroups = [
  {
    title: 'Couriers',
    desc: 'Book parcels and sync delivery status from the order screen.',
    items: ['Pathao', 'Steadfast', 'RedX']
  },
  {
    title: 'Payments',
    desc: 'Collect online payments on the storefront and in the app.',
    items: ['SSLCommerz', 'bKash', 'Nagad', 'Paddle']
  },
  {
    title: 'Messaging',
    desc: 'Talk to customers where they already are.',
    items: ['WhatsApp', 'Messenger', 'Twilio SMS', 'Gmail']
  },
  {
    title: 'Marketing & ads',
    desc: 'Publish, track, and attribute campaigns to real orders.',
    items: ['Meta Ads', 'Google Ads', 'Facebook', 'Instagram', 'LinkedIn', 'Meta Conversions API']
  }
];

export const integrationNames = integrationGroups.flatMap((g) => g.items);

export const mobileApps = [
  {
    icon: Smartphone,
    name: 'Zeeventory',
    audience: 'For managers & staff',
    desc: 'The ERP in your pocket: dashboard, sales, POS, inventory, warehouses, purchasing, deliveries, finance, projects, and support.',
    points: ['Barcode scanning with the camera', 'Take orders and sell from POS', 'Approve and track deliveries']
  },
  {
    icon: Users,
    name: 'Zeeventory HRM',
    audience: 'For employees',
    desc: 'Employee self-service: clock in and out, request leave, check shifts, and view payslips.',
    points: ['Mobile attendance', 'Leave requests & balances', 'Payslips & profile']
  },
  {
    icon: ShoppingBag,
    name: 'Shopping app',
    audience: 'For your customers',
    desc: 'A mobile shopping experience powered by your storefront catalog, prices, and stock.',
    points: ['Browse and order', 'Track orders', 'Customer profile']
  }
];

export const portals = [
  { icon: FileText, name: 'Invoice portal', desc: 'Customers view and pay invoices through a secure link.' },
  { icon: Wallet, name: 'Collection portal', desc: 'Field collectors record customer payments on the go.' },
  { icon: Receipt, name: 'Expense portal', desc: 'Staff submit expenses with receipts for approval.' },
  { icon: Landmark, name: 'Finance portal', desc: 'Share financial views with partners and accountants.' },
  { icon: UserCircle, name: 'Employee portal', desc: 'Self-service HR for leave, attendance, and payslips.' }
];

export const platformFeatures = [
  {
    icon: KeyRound,
    title: 'Roles & permissions',
    desc: 'Fine-grained access per module and action. Give each person exactly what their job needs.'
  },
  {
    icon: GitPullRequestArrow,
    title: 'Approval matrix',
    desc: 'Route orders, purchases, adjustments, and expenses to approvers by amount and department.'
  },
  {
    icon: History,
    title: 'Audit trail',
    desc: 'Who changed what and when — across accounting, CRM, inventory, and admin.'
  },
  {
    icon: Building2,
    title: 'Multi-company & branches',
    desc: 'Separate organizations, branches, and warehouses with consolidated reporting.'
  },
  {
    icon: Coins,
    title: 'Multi-currency',
    desc: 'Price, invoice, and report in multiple currencies with exchange-rate handling.'
  },
  {
    icon: Languages,
    title: 'Multi-language & RTL',
    desc: 'Use the app in English, Arabic, or Urdu with full right-to-left layouts.'
  },
  {
    icon: Ruler,
    title: 'Units of measure',
    desc: 'Buy in cartons, stock in boxes, sell in pieces — conversions handled for you.'
  },
  {
    icon: Upload,
    title: 'Bulk import',
    desc: 'Bring products, customers, suppliers, and opening stock in from spreadsheets.'
  },
  {
    icon: Bell,
    title: 'Real-time updates',
    desc: 'Live notifications and dashboards that refresh as orders and stock change.'
  },
  {
    icon: Zap,
    title: 'API access',
    desc: 'Connect your own tools through the REST API on Professional and Enterprise plans.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'Email verification, hashed passwords, token-based sessions, and per-organization data isolation.'
  },
  {
    icon: Cloud,
    title: 'Cloud hosted',
    desc: 'Nothing to install. Sign in from any browser; files are stored in managed cloud storage.'
  }
];

export const industries = [
  {
    icon: Boxes,
    title: 'Wholesale & distribution',
    desc: 'Multi-warehouse stock, customer price lists, credit sales, deliveries, and receivables.',
    modules: ['Inventory', 'Sales', 'Purchase', 'Accounting']
  },
  {
    icon: Store,
    title: 'Retail & e-commerce',
    desc: 'POS in every branch, an online store, couriers, and Tara, the AI agent, answering customers.',
    modules: ['POS', 'E-commerce', 'Tara AI', 'Marketing']
  },
  {
    icon: Factory,
    title: 'Manufacturing & import',
    desc: 'MRP, subcontracting, landed costs, batch tracking, and quality inspections.',
    modules: ['Purchase', 'Inventory', 'Accounting']
  },
  {
    icon: Briefcase,
    title: 'Services & agencies',
    desc: 'Pipelines, projects, time tracking, recurring invoices, and HR in one place.',
    modules: ['CRM', 'Projects', 'Custom Invoicing', 'HRM']
  }
];

/** Mirrors the plan limits in backend/models/Subscription.js. */
export const plans = [
  {
    key: 'free',
    name: 'Free',
    price: 0,
    blurb: 'Try the essentials with a single user.',
    limits: { users: '1', products: '100', customers: '50' },
    customBranding: false,
    apiAccess: false,
    support: 'Help center',
    cta: 'Start free'
  },
  {
    key: 'basic',
    name: 'Basic',
    price: 19,
    blurb: 'Core inventory and sales for small teams.',
    limits: { users: '3', products: '1,000', customers: '500' },
    customBranding: false,
    apiAccess: false,
    support: 'Email support',
    cta: 'Start 14-day trial'
  },
  {
    key: 'professional',
    name: 'Professional',
    price: 49,
    blurb: 'For growing teams that need more capacity.',
    limits: { users: '10', products: '5,000', customers: '2,000' },
    customBranding: true,
    apiAccess: true,
    support: 'Priority support',
    cta: 'Start 14-day trial',
    highlighted: true
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    price: 249,
    blurb: 'Unlimited scale with dedicated support.',
    limits: { users: 'Unlimited', products: 'Unlimited', customers: 'Unlimited' },
    customBranding: true,
    apiAccess: true,
    support: 'Dedicated success manager',
    cta: 'Contact sales'
  }
];

export const faqs = [
  {
    q: 'What exactly is Zeeventory?',
    a: 'Zeeventory is a cloud ERP that runs inventory, sales, purchasing, point of sale, an online store, accounting, CRM, marketing, HR and payroll, and projects in one connected system. A sale updates stock, the ledger, and the customer record at the same time — no re-typing between tools.'
  },
  {
    q: 'Do I have to use every module?',
    a: 'No. Turn on only the modules your team needs and add others later. Your data is already connected, so enabling a new module does not require any migration.'
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every new workspace starts with a 14-day free trial of all features. No card is required to start, and there is also a Free plan for a single user.'
  },
  {
    q: 'Is Zeeventory only for e-commerce?',
    a: 'No. Many teams use it purely for wholesale, distribution, or retail with POS. The storefront and Tara, the AI sales agent, are optional — switch them on when you want to sell online.'
  },
  {
    q: 'Which couriers and payment gateways are supported?',
    a: 'Pathao, Steadfast, and RedX for courier booking and tracking; SSLCommerz, bKash, and Nagad for online payments; and Paddle for subscription billing. Cash on delivery is supported with confirmation and fraud checks.'
  },
  {
    q: 'Are there mobile apps?',
    a: 'Yes — three. The Zeeventory app for managers and staff (sales, POS, inventory, deliveries, finance), the Zeeventory HRM app for employee self-service, and a shopping app for your customers. The web app is also fully responsive.'
  },
  {
    q: 'Can the POS work without internet?',
    a: 'Yes. POS keeps selling offline and syncs transactions once the connection is back. It supports barcode scanners, receipt printers, cash drawers, and weighing scales.'
  },
  {
    q: 'Can we use our own domain for the store?',
    a: 'Yes. Run on a subdomain we provide or connect your own domain with DNS verification.'
  },
  {
    q: 'Which languages and currencies are supported?',
    a: 'The app is available in English, Arabic, and Urdu with right-to-left layouts. Accounting supports multiple currencies with exchange rates and FX revaluation.'
  },
  {
    q: 'Can I import my existing data?',
    a: 'Yes. Import products, customers, suppliers, and opening stock from spreadsheets. Every module also exports to CSV, Excel, or PDF.'
  },
  {
    q: 'How is my data kept secure?',
    a: 'Each organization’s data is isolated, access is controlled by roles and permissions, sensitive actions go through approvals, and the audit trail records every change.'
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes. Upgrade or downgrade from the Subscription page in the app at any time. Limits on users, products, and customers adjust with your plan.'
  }
];
