import Link from 'next/link';
import { MessageSquare, Plus } from 'lucide-react';
import { faqs as defaultFaqs, SUPPORT_EMAIL } from '@/lib/site';

export default function FAQSection({ faqs = defaultFaqs, title = 'Questions, answered', id = 'faq' }) {
  return (
    <section id={id} className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-3">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-5">{title}</h2>
          <p className="section-lead mt-5">Everything buyers and operators usually ask before getting started.</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <MessageSquare className="h-6 w-6 text-brand-600" aria-hidden />
            <p className="mt-3 font-semibold text-slate-900">Still have questions?</p>
            <p className="mt-1 text-sm text-slate-600">Our team usually replies within one business day.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sm font-semibold text-brand-700 hover:underline">
                {SUPPORT_EMAIL}
              </a>
              <span className="text-slate-300">·</span>
              <Link href="/support" className="text-sm font-semibold text-brand-700 hover:underline">
                Support center
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-2">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition open:border-brand-200 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <p className="mt-3 pr-10 text-sm leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
