import CTABand from '@/components/CTABand';
import FAQSection from '@/components/FAQSection';
import Hero from '@/components/Hero';
import ModulesSection from '@/components/ModulesSection';
import PricingSection from '@/components/PricingSection';
import ProductSection from '@/components/ProductSection';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductSection />
        <ModulesSection />
        <PricingSection />
        <FAQSection />
        <CTABand />
      </main>
      <SiteFooter />
    </>
  );
}
