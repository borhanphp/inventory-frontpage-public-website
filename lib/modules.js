import {
  PackageSearch,
  ShoppingCart,
  Store,
  Calculator,
  Users,
  Briefcase,
  LayoutGrid,
  CreditCard,
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
  Heart,
  Palmtree,
  DollarSign,
  KanbanSquare,
  GitBranch,
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
  CreditCard as CreditCardIcon,
  BookOpen,
  Scale,
  Landmark,
  TrendingUp,
  Coins,
  Lock
} from 'lucide-react';

export const modules = [
  {
    slug: 'inventory',
    name: 'Inventory',
    icon: PackageSearch,
    color: 'indigo',
    tagline: 'Full visibility across every warehouse, shelf, and SKU',
    description:
      'Track products from receiving to shipment with real-time stock levels, multi-warehouse transfers, batch and serial tracking, and cycle counts. Zeeventory inventory gives your team a single source of truth so nothing falls through the cracks.',
    features: [
      {
        icon: Warehouse,
        title: 'Multi-warehouse management',
        desc: 'Organize stock across unlimited locations, zones, and bin positions. Transfer between warehouses with full audit trails.'
      },
      {
        icon: ScanBarcode,
        title: 'Batch & serial tracking',
        desc: 'Assign batch numbers or unique serials to products for full traceability from supplier to customer.'
      },
      {
        icon: ClipboardList,
        title: 'Cycle counting',
        desc: 'Schedule and execute partial counts without shutting down operations. Discrepancies are flagged automatically.'
      },
      {
        icon: Package,
        title: 'Picking & packing',
        desc: 'Wave picking, single-order picking, and packing stations that connect directly to delivery workflows.'
      },
      {
        icon: ArrowLeftRight,
        title: 'Stock transfers & adjustments',
        desc: 'Move inventory between locations or adjust quantities with reason codes and approval workflows.'
      },
      {
        icon: AlertTriangle,
        title: 'Reorder alerts',
        desc: 'Set minimum stock thresholds per product and warehouse. Get notified before you run out.'
      }
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
    tagline: 'From quote to delivery in one connected workflow',
    description:
      'Manage the complete sales cycle — quotes, orders, approvals, picking, packing, and delivery — without switching tools. Every order is tied to real inventory so your team never oversells.',
    features: [
      {
        icon: FileText,
        title: 'Quotes & sales orders',
        desc: 'Create quotes that convert to orders with one click. Track status from draft through fulfilled.'
      },
      {
        icon: Truck,
        title: 'Delivery management',
        desc: 'Generate delivery notes, assign routes, and track shipment status from warehouse to customer.'
      },
      {
        icon: Receipt,
        title: 'Invoicing & payments',
        desc: 'Auto-generate invoices from fulfilled orders. Record partial payments and track outstanding balances.'
      },
      {
        icon: BarChart3,
        title: 'Sales reports',
        desc: 'Revenue by period, product, customer, and sales rep. Identify trends and act on real data.'
      },
      {
        icon: BadgeDollarSign,
        title: 'Pricing & discounts',
        desc: 'Set customer-specific pricing, volume discounts, and promotional rates that apply automatically.'
      },
      {
        icon: Users,
        title: 'Customer history',
        desc: 'See every quote, order, delivery, and payment for each customer in a single timeline.'
      }
    ],
    useCases: [
      'B2B teams that need formal quotes before converting to orders',
      'Sales reps in the field who need to check stock and place orders on the go',
      'Operations teams managing order fulfillment across multiple warehouses',
      'Finance teams that want invoices generated automatically from deliveries'
    ]
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    icon: Store,
    color: 'teal',
    tagline: 'A branded storefront connected to your real inventory',
    description:
      'Launch an online store that shares the same stock, pricing, and order pipeline as your ERP. No sync issues, no overselling, no third-party middleware. Customers browse your catalog and check out — orders land directly in your sales workflow.',
    features: [
      {
        icon: Globe2,
        title: 'Public storefront',
        desc: 'A customer-facing catalog with product pages, categories, and search — accessible from any browser.'
      },
      {
        icon: Paintbrush,
        title: 'Brand customization',
        desc: 'Upload your logo, pick colors, and set a custom domain so your store matches your brand identity.'
      },
      {
        icon: Tags,
        title: 'Web-only pricing',
        desc: 'Set storefront-specific prices that differ from your wholesale or internal rates.'
      },
      {
        icon: ShoppingBag,
        title: 'Cart & checkout',
        desc: 'Customers add items, review their cart, and complete orders. Inventory is reserved in real time.'
      },
      {
        icon: CreditCardIcon,
        title: 'Payment collection',
        desc: 'Collect payments at checkout through integrated payment gateways or mark orders for later invoicing.'
      },
      {
        icon: ArrowLeftRight,
        title: 'ERP-native orders',
        desc: 'Web orders appear as sales orders in Zeeventory — same fulfillment, same accounting, no manual re-entry.'
      }
    ],
    useCases: [
      'Wholesalers opening a B2C channel without adding a separate platform',
      'Brands that want one inventory pool for retail, wholesale, and online',
      'Teams migrating off Shopify or WooCommerce to reduce tool sprawl',
      'Organizations that need a quick product catalog without building a full website'
    ]
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    icon: Calculator,
    color: 'amber',
    tagline: 'Financial workflows that live alongside your operations',
    description:
      'General ledger, accounts payable, journal entries, fixed assets, tax codes, and financial reports — all in the same system as your inventory and sales. No exports, no reconciliation spreadsheets, no monthly close surprises.',
    features: [
      {
        icon: BookOpen,
        title: 'General ledger',
        desc: 'A full chart of accounts with double-entry bookkeeping. Every transaction posts automatically from operations.'
      },
      {
        icon: Scale,
        title: 'Accounts payable',
        desc: 'Track supplier invoices, aging reports, payment schedules, and due dates in one view.'
      },
      {
        icon: Landmark,
        title: 'Journal entries',
        desc: 'Create, edit, and approve manual journal entries with supporting documentation.'
      },
      {
        icon: TrendingUp,
        title: 'Financial reports',
        desc: 'Trial balance, income statement, and balance sheet generated from your live ledger data.'
      },
      {
        icon: Coins,
        title: 'Fixed assets & depreciation',
        desc: 'Register assets, schedule depreciation, and track maintenance with automated journal postings.'
      },
      {
        icon: Lock,
        title: 'Period locks & audit',
        desc: 'Lock closed periods to prevent edits. Full audit trail on every financial transaction.'
      }
    ],
    useCases: [
      'Finance teams that want operational transactions to flow into the books automatically',
      'Growing companies replacing QuickBooks or Xero with an integrated ERP',
      'Controllers who need period-close controls and audit trails',
      'Businesses with multi-currency transactions and foreign exchange requirements'
    ]
  },
  {
    slug: 'crm',
    name: 'CRM',
    icon: Users,
    color: 'violet',
    tagline: 'Relationships tied to orders and revenue, not just contacts',
    description:
      'Manage leads, accounts, proposals, and email campaigns in the same system where orders and invoices live. Your sales team sees the full customer picture — from first touch to latest delivery — without switching apps.',
    features: [
      {
        icon: Target,
        title: 'Lead management',
        desc: 'Capture leads from web forms, import lists, or manual entry. Score and qualify them through configurable stages.'
      },
      {
        icon: Users,
        title: 'Accounts & contacts',
        desc: 'Organize customers into accounts with multiple contacts, addresses, and communication history.'
      },
      {
        icon: FileText,
        title: 'Proposals',
        desc: 'Create branded proposals with line items, terms, and PDF export. Convert accepted proposals to sales orders.'
      },
      {
        icon: Mail,
        title: 'Email campaigns',
        desc: 'Send targeted emails to segments and track opens, clicks, and engagement analytics.'
      },
      {
        icon: PieChart,
        title: 'Pipeline & reports',
        desc: 'Visualize your sales pipeline and generate reports on conversion rates, deal value, and rep performance.'
      },
      {
        icon: UserPlus,
        title: 'Web lead capture',
        desc: 'Embed a lead capture form on your website. New submissions land in your CRM pipeline automatically.'
      }
    ],
    useCases: [
      'Sales teams that want CRM and order history in the same tool',
      'Marketing teams running email campaigns tied to real purchase data',
      'Account managers who need a 360-degree view of each customer relationship',
      'Companies replacing standalone CRMs with an ERP-integrated solution'
    ]
  },
  {
    slug: 'hrm',
    name: 'HRM',
    icon: Briefcase,
    color: 'rose',
    tagline: 'People management that scales with your headcount',
    description:
      'Employee records, attendance, leave, payroll, recruitment, performance reviews, and onboarding — all in one place. Give your HR team structure and your employees a self-service portal.',
    features: [
      {
        icon: Users,
        title: 'Employee directory',
        desc: 'Centralized profiles with personal info, documents, job history, and organizational reporting.'
      },
      {
        icon: Clock,
        title: 'Attendance & shifts',
        desc: 'Track clock-in/out, manage shift schedules, and monitor overtime across departments.'
      },
      {
        icon: Palmtree,
        title: 'Leave management',
        desc: 'Configurable leave types, approval workflows, balance tracking, and holiday calendars.'
      },
      {
        icon: DollarSign,
        title: 'Payroll',
        desc: 'Calculate salaries, deductions, and allowances. Generate payslips and track payment history.'
      },
      {
        icon: GraduationCap,
        title: 'Recruitment & onboarding',
        desc: 'Post jobs, track applicants, send offer letters, and guide new hires through onboarding checklists.'
      },
      {
        icon: Heart,
        title: 'Performance reviews',
        desc: 'Set goals, conduct review cycles, and track employee performance over time.'
      }
    ],
    useCases: [
      'Growing companies that need HR structure without a standalone HRIS',
      'Operations-heavy businesses with shift scheduling and attendance requirements',
      'HR managers onboarding multiple hires and needing structured checklists',
      'Teams that want employee self-service for leave requests and payslips'
    ]
  },
  {
    slug: 'projects',
    name: 'Projects',
    icon: LayoutGrid,
    color: 'sky',
    tagline: 'Deliver work that touches inventory and billing',
    description:
      'Plan, track, and deliver projects with tasks, sprints, Kanban boards, and Gantt charts. Connect project work to inventory consumption and billable hours so nothing gets lost between delivery and invoicing.',
    features: [
      {
        icon: KanbanSquare,
        title: 'Kanban boards',
        desc: 'Drag-and-drop task management with customizable columns, swimlanes, and WIP limits.'
      },
      {
        icon: GanttChart,
        title: 'Gantt charts',
        desc: 'Visualize timelines, dependencies, and critical paths across your project portfolio.'
      },
      {
        icon: GitBranch,
        title: 'Sprints',
        desc: 'Plan work in time-boxed sprints with velocity tracking and burndown charts.'
      },
      {
        icon: ListChecks,
        title: 'Task management',
        desc: 'Create tasks with assignees, due dates, priorities, checklists, and custom fields.'
      },
      {
        icon: Bell,
        title: 'Notifications',
        desc: 'Stay updated on task changes, mentions, and approaching deadlines.'
      },
      {
        icon: BarChart3,
        title: 'Project reports',
        desc: 'Track progress, budget utilization, and team workload across all active projects.'
      }
    ],
    useCases: [
      'Service businesses that need to track project delivery alongside material costs',
      'Internal teams managing cross-functional initiatives that involve procurement',
      'Agencies billing by project that need time and expense tracking',
      'Operations teams running implementation projects for new customers'
    ]
  },
  {
    slug: 'custom-invoicing',
    name: 'Custom Invoicing',
    icon: CreditCard,
    color: 'orange',
    tagline: 'Flexible billing for every scenario',
    description:
      'Create standalone invoices, estimates, and recurring billing schedules outside the standard sales order flow. Perfect for service charges, retainers, milestone billing, and anything that does not start with a sales order.',
    features: [
      {
        icon: FileEdit,
        title: 'Custom invoices',
        desc: 'Build invoices from scratch with flexible line items, tax handling, and payment terms.'
      },
      {
        icon: FileText,
        title: 'Estimates',
        desc: 'Send estimates to clients. Approved estimates convert to invoices with one click.'
      },
      {
        icon: Repeat,
        title: 'Recurring billing',
        desc: 'Set up schedules for retainers, subscriptions, and maintenance contracts that auto-generate invoices.'
      },
      {
        icon: CreditCardIcon,
        title: 'Online payments',
        desc: 'Share a payment link so clients can pay invoices directly from their browser.'
      },
      {
        icon: Layers,
        title: 'Multi-format export',
        desc: 'Download invoices as PDF or send them directly via email with branded templates.'
      },
      {
        icon: BarChart3,
        title: 'Billing analytics',
        desc: 'Track outstanding amounts, overdue invoices, and collection rates across all billing.'
      }
    ],
    useCases: [
      'Service companies billing clients on a retainer or milestone basis',
      'Businesses with subscription revenue alongside product sales',
      'Teams that need to invoice for work not tied to a specific sales order',
      'Finance teams consolidating all billing into one system'
    ]
  }
];

export function getModuleBySlug(slug) {
  return modules.find((m) => m.slug === slug) ?? null;
}

export function getAllModuleSlugs() {
  return modules.map((m) => m.slug);
}
