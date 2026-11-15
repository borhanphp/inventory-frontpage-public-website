import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck,
  GraduationCap,
  LifeBuoy,
  Mail,
  MessageSquare,
  Rocket,
  Settings,
  Upload,
  Users
} from 'lucide-react';
import { appPath, DEMO_URL, SIGNUP_URL, WHATSAPP_URL } from '@/lib/links';
import { SALES_EMAIL, SUPPORT_EMAIL } from '@/lib/site';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQSection from '@/components/FAQSection';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Support — Zeeventory',
  description:
    'Get help with Zeeventory — reach our team on WhatsApp or email, book a guided demo, and find answers to common questions.',
  openGraph: {
    title: 'Zeeventory Support',
    description: 'Help is here. Reach our team on WhatsApp or email, or book a guided demo.'
  }
};

const channels = [
  {
    icon: MessageSquare,
    title: 'WhatsApp support',
    desc: 'The fastest way to reach us. Send a message and a team member will pick it up.',
    action: 'Chat on WhatsApp',
    href: WHATSAPP_URL,
    highlight: true
  },
  {
    icon: Mail,
    title: 'Email support',
    desc: 'Send us the details — screenshots help — and we will get back to you.',
    action: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`
  },
  {
    icon: CalendarCheck,
    title: 'Book a demo',
    desc: 'See Zeeventory set up for your business in a guided walkthrough with our team.',
    action: 'Schedule a demo',
    href: DEMO_URL
  },
  {
    icon: LifeBuoy,
    title: 'Sales & Enterprise',
    desc: 'Questions about plans, larger teams, data migration, or dedicated support.',
    action: SALES_EMAIL,
    href: `mailto:${SALES_EMAIL}`
  }
];

const steps = [
  {
    icon: Rocket,
    title: 'Create your organization',
    desc: 'Sign up and your 14-day trial starts immediately with every module available.'
  },
  {
    icon: Settings,
    title: 'Set up the basics',
    desc: 'Add your company details, warehouses, units of measure, and tax settings.'
  },
  {
    icon: Upload,
    title: 'Import your data',
    desc: 'Bring in products, customers, suppliers, and opening stock from spreadsheets.'
  },
  {
    icon: Users,
    title: 'Invite your team',
    desc: 'Add users, assign roles and permissions, and set up approval rules.'
  },
  {
    icon: GraduationCap,
    title: 'Go live',
    desc: 'Start selling, buying, and posting — then switch on more modules as you need them.'
  }
];

const supportFaqs = [
  {
    q: 'How do I reset my password?',
    a: 'On the sign-in page, click "Forgot password" and enter your email. A reset link arrives within a few minutes — check your spam folder if you do not see it.'
  },
  {
    q: 'How do I add team members?',
    a: 'Open Admin → Users in the app to invite people by email, then assign roles and module permissions. Employees can also self-register through an invite link from HRM.'
  },
  {
    q: 'How do I turn modules on or off?',
    a: 'Organization settings list every module. Enable the ones you need — your existing data is already connected, so nothing has to be migrated.'
  },
  {
    q: 'Is there a mobile app?',
    a: 'Yes. The Zeeventory app covers sales, POS, inventory, deliveries, finance, and more; the Zeeventory HRM app is for employee self-service; and there is a shopping app for your customers.'
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Lists and reports export to CSV, Excel, or PDF, and invoices and statements can be downloaded as PDFs.'
  },
  {
    q: 'What happens when my trial ends?',
    a: 'Choose a plan from the Subscription page to keep going. Your data is kept, so you pick up exactly where you left off.'
  },
  {
    q: 'How do I connect couriers and payment gateways?',
    a: 'Go to E-commerce → Settings and Courier services to add your Pathao, Steadfast, or RedX credentials, and configure SSLCommerz, bKash, or Nagad for online payments.'
  },
  {
    q: 'How do I set up Tara, the AI sales agent?',
    a: 'Open Tara → Settings to connect your AI provider and channels, choose its selling options (photos, coupons, follow-ups), and try it in the test chat before turning it on for customers.'
  }
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" />
          <div className="container-x relative text-center">
            <span className="eyebrow-dark">Support</span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              We&rsquo;re here to <span className="text-gradient">help you succeed</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Whether you are just getting started or need a hand with a specific feature, talk to a real person on
              the channel that suits you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={WHATSAPP_URL} className="btn-primary bg-brand-500 hover:bg-brand-400">
                <MessageSquare className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-ghost-dark">
                <Mail className="h-4 w-4" aria-hidden />
                Email support
              </a>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-x">
            <div className="text-center">
              <span className="eyebrow">Get in touch</span>
              <h2 className="section-title mt-5">How can we help?</h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map(({ icon: Icon, title, desc, action, href, highlight }) => (
                <a
                  key={title}
                  href={href}
                  className={`group flex flex-col rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    highlight ? 'border-brand-300 bg-brand-50' : 'border-slate-200 bg-white hover:border-brand-200'
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
                      highlight
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-brand-100 group-hover:text-brand-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 break-all text-sm font-semibold text-brand-700 transition group-hover:gap-2.5">
                    {action}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Getting started */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Getting started</span>
              <h2 className="section-title mt-5">Up and running in five steps</h2>
              <p className="section-lead mt-5">Most teams go from sign-up to their first order on the same day.</p>
            </div>
            <ol className="mt-14 grid gap-5 md:grid-cols-5">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li key={title} className="card relative p-6">
                  <span className="absolute right-5 top-5 font-display text-3xl font-bold text-slate-100">
                    {i + 1}
                  </span>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 font-display text-base font-semibold text-slate-900">{title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={SIGNUP_URL} className="btn-primary">
                Create your organization
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={appPath('/login')}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-brand-400"
              >
                Sign in
              </a>
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-brand-700 hover:underline"
              >
                Browse modules
              </Link>
            </div>
          </div>
        </section>

        <FAQSection faqs={supportFaqs} title="Quick answers" id="support-faq" />

        <CTABand
          title="Still need help?"
          body="Our team is happy to walk you through anything — from first setup to advanced workflows."
          primaryLabel="Start your free trial"
        />
      </main>
      <SiteFooter />
    </>
  );
}
