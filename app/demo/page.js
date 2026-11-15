import { CheckCircle2, Clock, Globe2, MessageSquare, MonitorPlay, ShieldCheck, Users } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import DemoForm from '@/components/demo/DemoForm';
import { WHATSAPP_URL } from '@/lib/links';
import { SALES_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Book a demo — Zeeventory',
  description:
    'See Zeeventory set up for your business. Book a free, personalized walkthrough of inventory, sales, POS, e-commerce, accounting, CRM, and HR.',
  openGraph: {
    title: 'Book a free Zeeventory demo',
    description: 'A personalized 30–45 minute walkthrough of the all-in-one ERP, tailored to how your business works.'
  }
};

const agenda = [
  { icon: Users, title: 'Your workflow first', desc: 'We start with how you buy, stock, sell, and get paid today.' },
  { icon: MonitorPlay, title: 'Live product tour', desc: 'The modules that matter to you, using realistic data.' },
  { icon: Globe2, title: 'Integrations & apps', desc: 'Couriers, payments, Tara the AI agent, and the mobile apps.' },
  { icon: CheckCircle2, title: 'A clear next step', desc: 'Pricing, data migration, and a rollout plan — no pressure.' }
];

export default function DemoPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden bg-slate-50">
        {/* dark band behind the top of the page */}
        <div className="absolute inset-x-0 top-0 h-[560px] bg-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-grid-white bg-grid [mask-image:radial-gradient(ellipse_70%_70%_at_30%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[700px] rounded-full bg-brand-500/25 blur-[120px]" />
        </div>

        <div className="container-x relative grid gap-12 pb-24 pt-32 md:pt-40 lg:grid-cols-5 lg:gap-x-16 lg:gap-y-10 lg:items-start">
          {/* Left: pitch */}
          <div className="lg:col-span-2">
            <span className="eyebrow-dark">Book a demo</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
              See Zeeventory <span className="text-gradient">run your business</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              A free, personalized walkthrough with our team — built around your products, branches, and the way
              you sell.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand-400" aria-hidden /> 30–45 minutes
              </li>
              <li className="flex items-center gap-1.5">
                <MonitorPlay className="h-4 w-4 text-brand-400" aria-hidden /> Online video call
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-400" aria-hidden /> No obligation
              </li>
            </ul>
          </div>

          {/* Form — second in source order so it follows the intro on phones */}
          <div className="lg:col-span-3 lg:row-span-2">
            <DemoForm />
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">What we&rsquo;ll cover</p>
              <ul className="mt-5 space-y-5">
                {agenda.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-slate-900">Prefer to talk now?</p>
              <p className="mt-1 text-sm text-slate-600">Reach the team directly — we&rsquo;re happy to help.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <a href={WHATSAPP_URL} className="inline-flex items-center gap-1.5 text-brand-700 hover:underline">
                  <MessageSquare className="h-4 w-4" aria-hidden /> WhatsApp
                </a>
                <span className="text-slate-300">·</span>
                <a href={`mailto:${SALES_EMAIL}`} className="text-brand-700 hover:underline">
                  {SALES_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
