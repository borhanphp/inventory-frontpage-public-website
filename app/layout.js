import './globals.css';
import { DM_Sans, Outfit } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap'
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export const metadata = {
  title: 'Zeeventory — All-in-one cloud ERP for inventory, sales & commerce',
  description:
    'Zeeventory connects inventory, sales, purchasing, POS, e-commerce, an AI sales agent, accounting, CRM, marketing, HR & payroll, and projects in one cloud workspace — with mobile apps for managers, employees, and customers.',
  keywords: [
    'ERP',
    'inventory management',
    'POS',
    'e-commerce',
    'accounting software',
    'CRM',
    'HRM',
    'payroll',
    'warehouse management',
    'AI sales agent'
  ],
  openGraph: {
    title: 'Zeeventory — Run your entire business from one place',
    description:
      'Inventory, sales, POS, online store, accounting, CRM, HR, and projects — connected so every sale updates stock, books, and customers at once.',
    type: 'website'
  }
};

export const viewport = {
  themeColor: '#0f766e'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
