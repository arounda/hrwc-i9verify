import Contact from '@/components/Common/Contact';
import Cards from '@/components/Pages/Pricing/Cards';
import Compare from '@/components/Pages/Pricing/Compare';
import CTA from '@/components/Pages/Pricing/CTA';
import FAQ from '@/components/Pages/Pricing/FAQ';
import Hero from '@/components/Pages/Pricing/Hero';

const Pricing = () => {
  return (
    <>
      <Hero />

      <Cards />

      <CTA />

      <Compare />

      <FAQ />

      <Contact />
    </>
  )
};

export default Pricing;
