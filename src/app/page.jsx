import Contact from '@/components/Common/Contact/Contact';
import Compliance from '@/components/Pages/Homepage/Compliance/Compliance';
import Connect from '@/components/Pages/Homepage/Connect/Connect';
import Hero from '@/components/Pages/Homepage/Hero/Hero';
import Tour from '@/components/Pages/Homepage/Tour/Tour';
import TrustedPartner from '@/components/Pages/Homepage/TrustedPartner/TrustedPartner';
import HeaderFooterView from '@/components/Views/HeaderFooterView';

export default function Home() {
  return (
    <div>
      <HeaderFooterView>
        <Hero />

        <TrustedPartner />

        <Compliance />

        <Tour />

        <Connect />

        <Contact />
      </HeaderFooterView>
    </div>
  );
};
