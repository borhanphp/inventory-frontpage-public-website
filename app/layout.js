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
  title: 'Zeeventory — Inventory, sales & commerce in one place',
  description:
    'Modern ERP for growing teams: inventory, warehouses, sales orders, deliveries, accounting, CRM, projects, and a built-in online storefront.',
  openGraph: {
    title: 'Zeeventory — Inventory, sales & commerce in one place',
    description:
      'Run stock, sales, and your web store from a single cloud workspace. Built for operators who outgrew spreadsheets.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
