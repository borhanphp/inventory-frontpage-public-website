import AgentSection from '@/components/AgentSection';
import AppsSection from '@/components/AppsSection';
import CTABand from '@/components/CTABand';
import FAQSection from '@/components/FAQSection';
import FoundationSection from '@/components/FoundationSection';
import Hero from '@/components/Hero';
import IndustriesSection from '@/components/IndustriesSection';
import IntegrationStrip from '@/components/IntegrationStrip';
import IntegrationsSection from '@/components/IntegrationsSection';
import ModulesSection from '@/components/ModulesSection';
import PlatformSection from '@/components/PlatformSection';
import PricingSection from '@/components/PricingSection';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import WorkflowSection from '@/components/WorkflowSection';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <IntegrationStrip />
        <PlatformSection />
        <WorkflowSection />
        <ModulesSection />
        <AgentSection />
        <AppsSection />
        <IntegrationsSection />
        <FoundationSection />
        <IndustriesSection />
        <PricingSection />
        <FAQSection />
        <CTABand />
      </main>
      <SiteFooter />
    </>
  );
}
