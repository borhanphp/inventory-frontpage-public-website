import {
  Mail,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  Clock,
  ArrowRight,
  ExternalLink,
  Search,
  FileText,
  Video,
  Users,
  CheckCircle,
  Zap
} from 'lucide-react';
import { appPath } from '@/lib/links';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Support — Zeeventory',
  description:
    'Get help with Zeeventory — contact our support team, browse documentation, watch tutorials, or join the community.',
  openGraph: {
    title: 'Zeeventory Support',
    description:
      'Help is here. Reach our team, explore the knowledge base, or connect with fellow Zeeventory users.'
  }
};

const channels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    desc: 'Chat with our support team in real time. Available during business hours.',
    action: 'Start chat',
    href: appPath('/support/chat'),
    highlight: true
  },
  {
    icon: Mail,
    title: 'Email Support',
    desc: 'Send us a detailed message and we\'ll get back to you within 24 hours.',
    action: 'support@zeeventory.com',
    href: 'mailto:support@zeeventory.com'
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    desc: 'Browse guides, API references, and integration walkthroughs.',
    action: 'Browse docs',
    href: appPath('/docs')
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    desc: 'Step-by-step walkthroughs for every module and feature.',
    action: 'Watch tutorials',
    href: appPath('/learn')
  },
  {
    icon: Users,
    title: 'Community Forum',
    desc: 'Connect with other Zeeventory users, share tips, and get advice.',
    action: 'Join the community',
    href: appPath('/community')
  },
  {
    icon: LifeBuoy,
    title: 'Enterprise Support',
    desc: 'Dedicated account manager, SLA guarantees, and priority escalation.',
    action: 'Learn more',
    href: appPath('/enterprise')
  }
];

const faqs = [
  {
    q: 'How do I reset my password?',
    a: 'Go to the login page and click "Forgot password." Enter your email and you\'ll receive a reset link within a few minutes. If you don\'t see it, check your spam folder.'
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Every module includes export options — CSV, Excel, and PDF. You can also request a full data export from your workspace settings.'
  },
  {
    q: 'How do I add team members?',
    a: 'Navigate to Settings > Team in your workspace. From there you can invite members by email, assign roles, and manage permissions per module.'
  },
  {
    q: 'Is there a mobile app?',
    a: 'Zeeventory is fully responsive and optimized for mobile browsers. Native mobile apps for iOS and Android are on the roadmap.'
  },
  {
    q: 'What happens when my trial ends?',
    a: 'Your workspace will be paused and you\'ll lose access until you subscribe. No data is deleted — you can pick up where you left off when you upgrade.'
  },
  {
    q: 'How do I connect my ecommerce store?',
    a: 'Go to the E-commerce module settings and select your platform (Shopify, WooCommerce, or custom API). Follow the step-by-step connection wizard.'
  }
];

const resources = [
  {
    icon: FileText,
    title: 'Getting Started Guide',
    desc: 'Set up your workspace, invite your team, and configure your first module in under 10 minutes.',
    href: appPath('/docs/getting-started')
  },
  {
    icon: Search,
    title: 'Knowledge Base',
    desc: 'Search hundreds of articles covering every feature, integration, and workflow.',
    href: appPath('/docs/knowledge-base')
  },
  {
    icon: Zap,
    title: 'API Reference',
    desc: 'Build custom integrations with our REST API — endpoints, authentication, and examples.',
    href: appPath('/docs/api')
  },
  {
    icon: CheckCircle,
    title: 'Release Notes',
    desc: 'Stay up to date with new features, improvements, and bug fixes.',
    href: appPath('/changelog')
  }
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Support
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              We&rsquo;re here to{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-white to-teal-300 bg-clip-text text-transparent">
                help you succeed.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Whether you&rsquo;re just getting started or need a hand with a specific feature —
              find the support option that works best for you.
            </p>

            {/* Quick stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-400" aria-hidden />
                <span className="text-sm text-slate-300">
                  Average response: <strong className="text-white">&lt; 4 hours</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-teal-400" aria-hidden />
                <span className="text-sm text-slate-300">
                  Resolution rate: <strong className="text-white">96%</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Support channels */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                How can we help?
              </h2>
              <p className="mt-3 text-lg text-slate-500">
                Choose the channel that works best for you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {channels.map(({ icon: Icon, title, desc, action, href, highlight }) => (
                <a
                  key={title}
                  href={href}
                  className={`group flex flex-col rounded-2xl border p-7 shadow-sm transition hover:shadow-lg ${
                    highlight
                      ? 'border-brand-200 bg-brand-50 hover:border-brand-300'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      highlight
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-brand-100 group-hover:text-brand-600'
                    } transition`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className={`mt-5 font-display text-lg font-bold ${
                    highlight ? 'text-brand-800' : 'text-slate-900'
                  }`}>
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${
                    highlight ? 'text-brand-700' : 'text-slate-700'
                  } transition group-hover:gap-2.5`}>
                    {action}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Quick answers
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-3">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {q}
                      <span className="text-brand-500 transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge base / Resources */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Resources
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Self-serve help center
              </h2>
              <p className="mt-3 text-lg text-slate-500">
                Dive into the docs, watch tutorials, or browse the knowledge base.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map(({ icon: Icon, title, desc, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
                    View
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-teal-700 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Still need help?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Our support team is ready to assist. Reach out and we&rsquo;ll get you sorted.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:support@zeeventory.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-700 shadow-xl transition hover:bg-slate-100"
              >
                <Mail className="h-4 w-4" aria-hidden />
              Email support
              </a>
              <a
                href={appPath('/support/chat')}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white shadow-xl backdrop-blur transition hover:bg-white/20"
              >
                <MessageSquare className="h-4 w-4" aria-hidden />
              Start live chat
              </a>
            </div>
          </div>
        </section>

        {/* Status bar */}
        <section className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 sm:px-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="text-sm text-slate-600">
              All systems operational.{' '}
              <a
                href={appPath('/status')}
                className="font-medium text-brand-600 underline-offset-2 hover:underline"
              >
                Check status page
                <ExternalLink className="ml-0.5 inline h-3 w-3" aria-hidden />
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
