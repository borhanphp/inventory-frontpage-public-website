import Link from 'next/link';
import { Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import { appPath, SIGNUP_URL } from '@/lib/links';
import { modules } from '@/lib/modules';
import { SALES_EMAIL, SUPPORT_EMAIL } from '@/lib/site';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/#platform', label: 'Platform tour' },
      { href: '/modules', label: 'All modules' },
      { href: '/#apps', label: 'Mobile apps' },
      { href: '/#integrations', label: 'Integrations' },
      { href: '/#security', label: 'Security & control' },
      { href: '/#pricing', label: 'Pricing' }
    ]
  },
  {
    title: 'Company',
    links: [
      { href: appPath('/about'), label: 'About', external: true },
      { href: appPath('/contact'), label: 'Contact', external: true },
      { href: '/support', label: 'Support' },
      { href: '/#faq', label: 'FAQ' }
    ]
  },
  {
    title: 'Account',
    links: [
      { href: SIGNUP_URL, label: 'Start free trial', external: true },
      { href: appPath('/login'), label: 'Sign in', external: true },
      { href: appPath('/employee-login'), label: 'Employee login', external: true },
      { href: appPath('/privacy'), label: 'Privacy policy', external: true },
      { href: appPath('/terms'), label: 'Terms of service', external: true }
    ]
  }
];

function FooterLink({ href, label, external }) {
  const cls = 'text-sm text-slate-400 transition hover:text-white';
  return external ? (
    <a href={href} className={cls}>
      {label}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            The all-in-one cloud ERP for inventory, sales, purchasing, POS, e-commerce, accounting, CRM, HR, and
            projects — built for businesses that ship real products.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a href={`mailto:${SALES_EMAIL}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" aria-hidden /> {SALES_EMAIL}
              </a>
            </li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" aria-hidden /> {SUPPORT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
          <div>
            <p className="text-sm font-semibold text-white">Modules</p>
            <ul className="mt-4 space-y-2.5">
              {modules.map(({ slug, name }) => (
                <li key={slug}>
                  <FooterLink href={`/modules/${slug}`} label={name} />
                </li>
              ))}
            </ul>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink {...l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-xs text-slate-500 sm:flex-row sm:items-center">
        <p>© {year} Zeeventory. All rights reserved.</p>
        <p>Available in English, العربية, and اردو</p>
      </div>
    </footer>
  );
}
