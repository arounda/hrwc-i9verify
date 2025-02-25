import Contact from '@/components/Common/Contact/Contact';
import Mission from '@/components/Common/Mission/Mission';
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

        {/* <Connect /> */}

        {/* <Tour /> */}

        {/* <Mission /> */}

        <Contact />
      </HeaderFooterView>
    </div>
  );
};
