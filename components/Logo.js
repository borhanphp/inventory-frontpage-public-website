import Link from 'next/link';

export default function Logo({ dark = true, size = 'md' }) {
  const box = size === 'sm' ? 'h-8 w-8 text-sm' : 'h-9 w-9 text-lg';
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Zeeventory home">
      <span
        className={`flex ${box} items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 font-display font-bold text-white shadow-lg shadow-brand-500/30 ring-1 ring-white/20`}
      >
        Z
      </span>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}
      >
        Zeeventory
      </span>
    </Link>
  );
}
