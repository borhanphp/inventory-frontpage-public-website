import { ArrowRight } from 'lucide-react';
import { appPath } from '@/lib/links';

export default function CTABand() {
  return (
    <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-teal-700 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Ready to replace the spreadsheet stack?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Sign in to your workspace or start a trial from the app. Your team gets a single place for stock,
          orders, and — when you need it — your online store.
        </p>
        <a
          href={appPath('/login')}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-700 shadow-xl transition hover:bg-slate-100"
        >
          Go to Zeeventory
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
