import Hero from '@/components/Hero';
import TradingIndicators from '@/components/TradingIndicators';
import FeaturedSoftware from '@/components/FeaturedSoftware';
import OtherProjects from '@/components/OtherProjects';
import TechStack from '@/components/TechStack';
import AiMethodology from '@/components/AiMethodology';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      <Hero />
      <TradingIndicators />
      <FeaturedSoftware />
      <OtherProjects />
      <TechStack />
      <AiMethodology />
      <Experience />
      <Contact />
    </main>
  );
}