import {
  PackageSearch,
  ShoppingCart,
  Store,
  Calculator,
  Users,
  Briefcase,
  Warehouse,
  BarChart3,
  Truck,
  ScanBarcode,
  ClipboardList,
  Package,
  ArrowLeftRight,
  AlertTriangle,
  FileText,
  Receipt,
  BadgeDollarSign,
  Target,
  Mail,
  UserPlus,
  PieChart,
  Clock,
  GraduationCap,
  Palmtree,
  DollarSign,
  KanbanSquare,
  GanttChart,
  ListChecks,
  Bell,
  Layers,
  Repeat,
  FileEdit,
  Globe2,
  Paintbrush,
  Tags,
  ShoppingBag,
  CreditCard,
  BookOpen,
  Scale,
  Landmark,
  TrendingUp,
  Coins,
  Lock,
  ShoppingBasket,
  FileSearch,
  PackageCheck,
  Factory,
  Ship,
  MonitorSmartphone,
  Printer,
  WifiOff,
  Building2,
  Bot,
  MessagesSquare,
  ShieldAlert,
  Megaphone,
  Share2,
  LineChart,
  MousePointerClick,
  Link2,
  Search,
  Headphones,
  MessageCircle,
  Workflow,
  Timer,
  Gauge,
  Send,
  ListTodo
} from 'lucide-react';

/**
 * Every module that ships in the Zeeventory platform.
 * `features` are the six headline capabilities shown as cards;
 * `highlights` lists the rest of what is in the module so nothing is hidden.
 */
export const modules = [
  {
    slug: 'inventory',
    name: 'Inventory',
    icon: PackageSearch,
    color: 'teal',
    category: 'Operations',
    tagline: 'Full visibility across every warehouse, shelf, and SKU',
    description:
      'Track products from receiving to shipment with real-time stock levels, multi-warehouse transfers, batch and serial tracking, and scheduled cycle counts. Zeeventory gives your team one source of truth for what you have, where it is, and what it is worth.',
    features: [
      {
        icon: Warehouse,
        title: 'Multi-warehouse management',
        desc: 'Organize stock across unlimited locations, zones, and bins. Transfer between warehouses with full audit trails and smart warehouse routing.'
      },
      {
        icon: ScanBarcode,
        title: 'Batch, lot & serial tracking',
        desc: 'Assign batch numbers or unique serials with expiry dates for full traceability from supplier to customer.'
      },
      {
        icon: ClipboardList,
        title: 'Scheduled cycle counts',
        desc: 'Plan recurring partial counts without shutting down operations. Variances are flagged and posted on approval.'
      },
      {
        icon: Package,
        title: 'Picking, packing & scanning',
        desc: 'Generated pick lists, packing stations, and barcode scanning from any phone or handheld — tied straight into deliveries.'
      },
      {
        icon: TrendingUp,
        title: 'Forecasting & auto-reorder',
        desc: 'Demand forecasts and reorder planning raise purchase suggestions before you run out, per product and per warehouse.'
      },
      {
        icon: Coins,
        title: 'Valuation & landed cost',
        desc: 'FIFO and weighted-average valuation, landed costs spread across receipts, and period close for clean month-end numbers.'
      }
    ],
    highlights: [
      'Product kits & bundles',
      'Brands & categories',
      'Units of measure & conversions',
      'Stock reservations',
      'Stock adjustments with approvals',
      'Low-stock alerts',
      'Drop-shipping',
      'Cross-docking',
      'Consignment stock',
      'Returns (RMA)',
      'Quality inspections',
      'Warehouse worker app & tasks',
      'Inventory reports'
    ],
    useCases: [
      'Wholesale distributors managing thousands of SKUs across multiple warehouses',
      'Manufacturers tracking raw materials through production into finished goods',
      'Retailers needing real-time stock accuracy for in-store and online channels',
      'Teams replacing spreadsheet-based inventory with a proper system'
    ]
  },
  {
    slug: 'sales',
    name: 'Sales',
    icon: ShoppingCart,
    color: 'emerald',
    category: 'Operations',
    tagline: 'From quote to delivery in one connected workflow',
    description:
      'Manage the complete sales cycle — quotations, orders, approvals, picking, delivery, invoicing, and payment — without switching tools. Every order is checked against real inventory so your team never oversells.',
    features: [
      {
        icon: FileText,
        title: 'Quotations & sales orders',
        desc: 'Send quotations that convert to orders with one click. Track every order from draft through fulfilled.'
      },
      {
        icon: Truck,
        title: 'Delivery management',
        desc: 'Generate delivery notes and shipping labels, book couriers, and track status from warehouse to doorstep.'
      },
      {
        icon: Receipt,
        title: 'Invoicing & payments',
        desc: 'Invoice from orders or deliveries, record partial payments, and follow up on outstanding balances.'
      },
      {
        icon: BadgeDollarSign,
        title: 'Price lists & discounts',
        desc: 'Customer-specific price lists, volume tiers, and promotional rates that apply automatically on every order.'
      },
      {
        icon: Repeat,
        title: 'Blanket orders & returns',
        desc: 'Long-term agreements released in batches, plus returns that flow back into stock and credit notes.'
      },
      {
        icon: BarChart3,
        title: 'Sales reports & analytics',
        desc: 'Revenue by period, product, customer, and sales rep — with trend charts your team can act on.'
      }
    ],
    highlights: [
      'Backorder handling',
      'Order timeline',
      'Approval workflows',
      'Customer & supplier directory',
      'Customer statements',
      'PDF invoices by email',
      'Customer invoice portal',
      'Sales settings & numbering'
    ],
    useCases: [
      'B2B teams that need formal quotations before converting to orders',
      'Field sales reps who check stock and place orders from the mobile app',
      'Operations teams fulfilling orders across multiple warehouses',
      'Finance teams that want invoices generated automatically from deliveries'
    ]
  },
  {
    slug: 'purchase',
    name: 'Purchase',
    icon: ShoppingBasket,
    color: 'sky',
    category: 'Operations',
    tagline: 'Buy smarter, from requisition to supplier payment',
    description:
      'Run procurement end to end: requisitions, RFQs, supplier quotations, purchase orders, goods receipts, bills, and payments. Three-way matching and landed costs keep your costs accurate, and MRP tells you what to buy before production needs it.',
    features: [
      {
        icon: ListTodo,
        title: 'Requisitions & approvals',
        desc: 'Teams request what they need; the approval matrix routes each request to the right manager by amount and department.'
      },
      {
        icon: FileSearch,
        title: 'RFQs & supplier quotations',
        desc: 'Send RFQs to multiple suppliers, compare quotations side by side, and convert the winner into a purchase order.'
      },
      {
        icon: PackageCheck,
        title: 'Goods receipts (GRN)',
        desc: 'Receive full or partial deliveries, run quality checks, and update stock instantly in the right warehouse.'
      },
      {
        icon: Scale,
        title: 'Three-way matching',
        desc: 'Purchase order, receipt, and bill are matched automatically so you only pay for what you ordered and received.'
      },
      {
        icon: Ship,
        title: 'Imports & landed costs',
        desc: 'Track import shipments and spread freight, duty, and clearing charges across items for true unit costs.'
      },
      {
        icon: Factory,
        title: 'MRP & subcontracting',
        desc: 'Material requirements planning and subcontracted production orders keep manufacturing supplied on time.'
      }
    ],
    highlights: [
      'Blanket purchase orders',
      'Purchase returns',
      'Supplier bills & payments',
      'Vendor credits',
      'Purchase reminders',
      'Purchase analytics',
      'Supplier performance reports'
    ],
    useCases: [
      'Importers who need true landed cost per unit',
      'Manufacturers planning raw-material purchases from production demand',
      'Companies enforcing spend approval before anything is ordered',
      'Finance teams that want bills matched to receipts automatically'
    ]
  },
  {
    slug: 'pos',
    name: 'Point of Sale',
    icon: MonitorSmartphone,
    color: 'amber',
    category: 'Commerce',
    tagline: 'Fast checkout for every branch, online or offline',
    description:
      'A touch-friendly POS for retail counters and showrooms. Sell from any branch with shared stock, keep selling when the internet drops, and close every shift with a clean cash count — all posting straight into inventory and accounting.',
    features: [
      {
        icon: Building2,
        title: 'Multi-branch selling',
        desc: 'Set up branches with their own registers, staff, and warehouses while stock and reports stay centralized.'
      },
      {
        icon: WifiOff,
        title: 'Offline mode',
        desc: 'Keep ringing up sales when the connection drops. Transactions sync automatically once you are back online.'
      },
      {
        icon: Printer,
        title: 'Hardware support',
        desc: 'Barcode scanners, receipt printers, cash drawers, and weighing scales over USB, network, Bluetooth, or serial.'
      },
      {
        icon: Clock,
        title: 'Sessions & shift close',
        desc: 'Open and close cash sessions per cashier with expected vs counted cash and variance reporting.'
      },
      {
        icon: CreditCard,
        title: 'Split & mixed payments',
        desc: 'Accept cash, card, and mobile wallets in a single sale, with change calculation and receipt printing.'
      },
      {
        icon: BarChart3,
        title: 'Transaction history',
        desc: 'Search every sale by branch, cashier, or customer. Reprint receipts and process returns from the counter.'
      }
    ],
    highlights: [
      'Barcode & weight-embedded barcodes',
      'Customer lookup at checkout',
      'Discounts at the counter',
      'Real-time stock deduction',
      'Branch-level reports',
      'POS on the mobile app'
    ],
    useCases: [
      'Retail chains running several shops from one stock pool',
      'Showrooms that sell in person and online from the same inventory',
      'Grocery and hardware stores selling by weight',
      'Shops with unreliable internet that cannot afford a stalled till'
    ]
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    icon: Store,
    color: 'cyan',
    category: 'Commerce',
    tagline: 'A branded storefront connected to your real inventory',
    description:
      'Launch an online store that sells from the same stock your warehouse ships. Web orders arrive as ERP sales orders, couriers are booked from the order screen, and abandoned carts are followed up automatically.',
    features: [
      {
        icon: Globe2,
        title: 'Hosted storefront',
        desc: 'A fast, mobile-ready store on your own subdomain or custom domain — no separate platform to maintain.'
      },
      {
        icon: Paintbrush,
        title: 'Themes & custom pages',
        desc: 'Brand colors, logo, banners, collections, and your own content pages, edited without code.'
      },
      {
        icon: CreditCard,
        title: 'Checkout & payments',
        desc: 'Online payment through SSLCommerz, bKash, and Nagad, plus cash on delivery with confirmation calls.'
      },
      {
        icon: Truck,
        title: 'Courier integration',
        desc: 'Book Pathao, Steadfast, and RedX parcels from the order and sync delivery status back automatically.'
      },
      {
        icon: ShieldAlert,
        title: 'Fraud detection',
        desc: 'Every order gets a risk score — high values, address mismatches, failed payments, throwaway emails — and risky ones are held for review.'
      },
      {
        icon: ShoppingBag,
        title: 'Orders live in the ERP',
        desc: 'Web orders become sales orders with channel tags — reserved stock, picking, and invoicing included.'
      }
    ],
    highlights: [
      'Abandoned cart recovery',
      'Coupons & promotions',
      'Product collections',
      'Customer reviews',
      'Web-only pricing',
      'Customer accounts',
      'Parcel tracking',
      'Product recommendations',
      'Shopping mobile app'
    ],
    useCases: [
      'Brands selling direct-to-consumer alongside wholesale',
      'Retailers adding online sales without double-entering stock',
      'COD-heavy businesses that need courier booking and fraud checks',
      'Teams replacing a disconnected store plugin with one system'
    ]
  },
  {
    slug: 'ai-agent',
    name: 'Tara AI Sales Agent',
    icon: Bot,
    color: 'violet',
    category: 'Commerce',
    tagline: 'Shows products, applies coupons, takes orders and follows up — 24/7',
    description:
      'Tara answers your customers on Messenger, WhatsApp, email and your website chat in Bangla, English or Banglish. It finds products even when they are misspelled, sends product photos, asks for size and colour, applies your coupons, takes the order straight into the ERP, and reminds customers who go quiet halfway through. Fraud checks and hand-off to your team are built in.',
    features: [
      {
        icon: ShoppingCart,
        title: 'Closes the sale in chat',
        desc: 'Checks live stock and prices, collects every delivery detail in one message, confirms the total and places a real ERP order.'
      },
      {
        icon: Search,
        title: 'Understands how customers type',
        desc: 'Bangla, English and Banglish, with typos: "punjabi", "panjabi" and "পাঞ্জাবি" all find the same product.'
      },
      {
        icon: Share2,
        title: 'Sends product photos',
        desc: 'Shows pictures with name and price on Messenger, WhatsApp and website chat, and handles sizes and colours with their own price and stock.'
      },
      {
        icon: BadgeDollarSign,
        title: 'Coupons and add-ons',
        desc: 'Applies your web-store coupons with the same rules as checkout, and suggests one item customers often buy together.'
      },
      {
        icon: Repeat,
        title: 'Wins back quiet customers',
        desc: 'Sends one friendly reminder when a customer goes quiet mid-order, inside the 24-hour reply window, and counts the orders it recovers.'
      },
      {
        icon: Gauge,
        title: 'Efficiency scorecard',
        desc: 'Chat-to-order conversion, share handled without your team, typical reply time, recovered revenue and AI usage per order.'
      }
    ],
    highlights: [
      'One inbox for website, Messenger, WhatsApp and email',
      'Order status and courier tracking answers',
      'Customers can cancel unpacked orders',
      'COD fraud scoring with hold and block limits',
      'Hand-off to your team with a summary',
      '"Ask me first" approval mode',
      'Order value and quantity limits',
      'Auto-send low-risk orders to the courier',
      'Choose your AI provider (Claude, ChatGPT, Gemini and more)',
      'Test chat before going live'
    ],
    useCases: [
      'Social-commerce sellers flooded with Messenger and WhatsApp inquiries',
      'Fashion shops selling many sizes and colours from photos',
      'Stores that want to capture orders outside business hours',
      'Small teams that cannot staff chat around the clock'
    ]
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    icon: Calculator,
    color: 'blue',
    category: 'Finance',
    tagline: 'Double-entry books that update as your business runs',
    description:
      'Every sale, purchase, payment, and stock movement posts to the general ledger automatically. Reconcile banks, manage receivables and payables, handle multiple currencies, and close periods with confidence.',
    features: [
      {
        icon: BookOpen,
        title: 'General ledger & journals',
        desc: 'A configurable chart of accounts with automatic postings from operations and manual journal entries when you need them.'
      },
      {
        icon: Receipt,
        title: 'Receivables & payables',
        desc: 'Track what customers owe and what you owe suppliers, with ageing, dunning reminders, and vendor credits.'
      },
      {
        icon: Landmark,
        title: 'Banking & reconciliation',
        desc: 'Manage bank and cash accounts, record transfers, and reconcile statements line by line.'
      },
      {
        icon: Coins,
        title: 'Multi-currency & FX',
        desc: 'Transact in any currency with exchange rates, realized gains and losses, and period-end FX revaluation.'
      },
      {
        icon: PieChart,
        title: 'Financial statements',
        desc: 'Profit & loss, balance sheet, trial balance, and cash flow — filterable by cost center and period.'
      },
      {
        icon: Lock,
        title: 'Period locks & audit',
        desc: 'Fiscal years, locked periods, and a full audit trail so closed books stay closed.'
      }
    ],
    highlights: [
      'Tax codes & tax returns',
      'Budgets with spend control',
      'Cost centers',
      'Fixed assets & automatic depreciation',
      'Dunning letters',
      'Expense & finance portals'
    ],
    useCases: [
      'Businesses that want books updated as orders ship, not at month-end',
      'Importers and exporters dealing in several currencies',
      'Finance teams enforcing budgets per department or project',
      'Companies preparing for audits with locked periods and trails'
    ]
  },
  {
    slug: 'crm',
    name: 'CRM',
    icon: Target,
    color: 'rose',
    category: 'Customers',
    tagline: 'Relationships tied to orders and revenue, not just contacts',
    description:
      'Capture leads, work deals through your pipeline, and support customers after the sale — with every email, call, WhatsApp message, and ticket in one place, linked to real orders and invoices.',
    features: [
      {
        icon: UserPlus,
        title: 'Leads & deals pipeline',
        desc: 'Score and assign leads, then move deals through custom stages with forecasting by stage and owner.'
      },
      {
        icon: Mail,
        title: 'Email, SMS & WhatsApp',
        desc: 'Talk to customers on the channels they use, with conversation history logged on the contact.'
      },
      {
        icon: Workflow,
        title: 'Workflow automation',
        desc: 'Trigger follow-ups, assignments, and updates automatically when records change.'
      },
      {
        icon: Headphones,
        title: 'Helpdesk tickets',
        desc: 'Track support requests with priorities and SLAs, backed by a searchable knowledge base.'
      },
      {
        icon: FileEdit,
        title: 'Proposals',
        desc: 'Build branded proposals with pricing tables and track when prospects open them.'
      },
      {
        icon: Globe2,
        title: 'Landing pages & web forms',
        desc: 'Publish landing pages that feed leads straight into your pipeline with source tracking.'
      }
    ],
    highlights: [
      'Accounts & contacts',
      'Calendar & call logs',
      'Segments',
      'Sales forecast',
      'Custom fields',
      'Email sequences',
      'Visitor tracking',
      'Recycle bin & audit log',
      'CRM reports'
    ],
    useCases: [
      'B2B sales teams running a structured pipeline',
      'Support teams that need ticket history next to order history',
      'Businesses selling over WhatsApp and SMS',
      'Teams that want leads from landing pages without extra tools'
    ]
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    color: 'fuchsia',
    category: 'Customers',
    tagline: 'Plan, publish, and measure campaigns that drive sales',
    description:
      'Schedule social posts, track ad performance, and attribute revenue back to the campaigns that earned it. Marketing sits on top of your real order data, so you see return on ad spend — not just clicks.',
    features: [
      {
        icon: Share2,
        title: 'Social publishing',
        desc: 'Plan and schedule posts to Facebook, Instagram, and LinkedIn from a shared content calendar.'
      },
      {
        icon: LineChart,
        title: 'Ads analytics',
        desc: 'Pull spend and results from Meta and Google Ads into one dashboard next to your sales.'
      },
      {
        icon: MousePointerClick,
        title: 'Attribution',
        desc: 'Connect orders to the campaign, ad, and UTM source that brought the customer in.'
      },
      {
        icon: Target,
        title: 'Pixels & Conversions API',
        desc: 'Send server-side purchase events to Meta for accurate tracking even when browsers block pixels.'
      },
      {
        icon: Search,
        title: 'Keyword research',
        desc: 'Find search terms and volumes to plan content and ad campaigns.'
      },
      {
        icon: Link2,
        title: 'UTM builder & coupons',
        desc: 'Generate tagged links and campaign coupons so every promotion is measurable.'
      }
    ],
    highlights: ['Campaign management', 'Content calendar', 'Marketing integrations', 'Campaign coupons'],
    useCases: [
      'E-commerce brands spending on Meta and Google Ads',
      'Teams that want ROAS based on real orders, not platform estimates',
      'Marketers juggling several social accounts',
      'Founders who need one view of spend versus revenue'
    ]
  },
  {
    slug: 'hrm',
    name: 'HRM & Payroll',
    icon: Users,
    color: 'orange',
    category: 'People & Work',
    tagline: 'People management that scales with your headcount',
    description:
      'Manage employees from hiring to payroll. Attendance, shifts, leave, loans, training, and performance live in one place, and employees serve themselves through the portal and the Zeeventory HRM mobile app.',
    features: [
      {
        icon: Users,
        title: 'Employee records',
        desc: 'Departments, designations, documents, and organization charts in a single employee directory.'
      },
      {
        icon: Clock,
        title: 'Attendance & shifts',
        desc: 'Clock in from the mobile app, schedule shifts and rosters, and track overtime automatically.'
      },
      {
        icon: Palmtree,
        title: 'Leave & holidays',
        desc: 'Leave policies, balances, approvals, and a company holiday calendar.'
      },
      {
        icon: DollarSign,
        title: 'Payroll & loans',
        desc: 'Run payroll with allowances and deductions, manage employee loans, and issue payslips.'
      },
      {
        icon: UserPlus,
        title: 'Recruitment & onboarding',
        desc: 'Post jobs, track candidates, and onboard new hires with checklists and self-registration links.'
      },
      {
        icon: GraduationCap,
        title: 'Performance & training',
        desc: 'Goals, reviews, and training programs that help people grow.'
      }
    ],
    highlights: ['Employee self-service portal', 'HRM mobile app', 'HR dashboard', 'HR reports', 'HR settings & policies'],
    useCases: [
      'Growing companies replacing paper attendance and spreadsheet payroll',
      'Businesses with shift-based staff across multiple sites',
      'Teams that want employees to request leave from their phones',
      'HR managers who need headcount and payroll reports on demand'
    ]
  },
  {
    slug: 'projects',
    name: 'Projects',
    icon: Briefcase,
    color: 'indigo',
    category: 'People & Work',
    tagline: 'Plan, track, and deliver work on time',
    description:
      'Organize work with Kanban boards, Gantt timelines, and sprints. Log time, balance workload across the team, and report on progress — connected to the customers and invoices behind each project.',
    features: [
      {
        icon: KanbanSquare,
        title: 'Kanban boards',
        desc: 'Drag tasks across custom columns to visualize progress at a glance.'
      },
      {
        icon: GanttChart,
        title: 'Gantt & timeline views',
        desc: 'Plan schedules with dependencies, milestones, and critical-path visibility.'
      },
      {
        icon: Layers,
        title: 'Sprints',
        desc: 'Run agile sprints with backlogs, sprint goals, and velocity tracking.'
      },
      {
        icon: Timer,
        title: 'Time tracking',
        desc: 'Log hours against tasks and projects for billing and profitability analysis.'
      },
      {
        icon: Gauge,
        title: 'Workload balancing',
        desc: 'See who is over- or under-allocated and rebalance before deadlines slip.'
      },
      {
        icon: Bell,
        title: 'Notifications & reports',
        desc: 'Real-time updates on assignments and status changes, plus project progress reports.'
      }
    ],
    highlights: ['Subtasks & checklists', 'Multiple saved views', 'Project settings', 'Mobile access'],
    useCases: [
      'Service teams delivering client projects',
      'Agencies tracking billable hours',
      'Product teams running sprints',
      'Operations teams coordinating installations and rollouts'
    ]
  },
  {
    slug: 'custom-invoicing',
    name: 'Custom Invoicing',
    icon: FileText,
    color: 'lime',
    category: 'Finance',
    tagline: 'Flexible billing for services, retainers, and one-offs',
    description:
      'Bill for anything that does not fit a sales order — services, retainers, subscriptions, or ad-hoc charges. Design templates, send estimates, automate recurring invoices, and get paid through a customer portal.',
    features: [
      {
        icon: FileEdit,
        title: 'Invoice templates',
        desc: 'Design branded templates with your logo, custom fields, and line-item layouts.'
      },
      {
        icon: ClipboardList,
        title: 'Estimates',
        desc: 'Send estimates that convert into invoices in one click once the customer approves.'
      },
      {
        icon: Repeat,
        title: 'Recurring billing',
        desc: 'Schedule weekly, monthly, or yearly invoices that are generated and emailed automatically.'
      },
      {
        icon: Send,
        title: 'Email & PDF delivery',
        desc: 'Send invoices as PDFs by email with a secure link to view and pay online.'
      },
      {
        icon: Globe2,
        title: 'Customer & collection portals',
        desc: 'Customers view and pay invoices from a portal; collectors record payments from a shared link.'
      },
      {
        icon: BarChart3,
        title: 'Billing analytics',
        desc: 'Track revenue, outstanding balances, and overdue invoices at a glance.'
      }
    ],
    highlights: ['Invoicing settings', 'Payment tracking', 'Posts to accounting'],
    useCases: [
      'Consultants and agencies billing for services',
      'Businesses with monthly retainers or subscriptions',
      'Companies collecting payments in the field',
      'Teams that need invoices outside the sales-order flow'
    ]
  }
];

export const moduleCategories = ['Operations', 'Commerce', 'Finance', 'Customers', 'People & Work'];

export function getModuleBySlug(slug) {
  return modules.find((m) => m.slug === slug) ?? null;
}

export function getAllModuleSlugs() {
  return modules.map((m) => m.slug);
}
