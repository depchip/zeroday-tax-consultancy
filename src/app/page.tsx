import Hero from '@/components/Hero/Hero';
import CalculatorsSection from '@/components/Calculators/CalculatorsSection';
import About from '@/components/About/About';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import WhyUs from '@/components/WhyUs/WhyUs';
import CtaBanner from '@/components/CtaBanner/CtaBanner';
import Faq from '@/components/Faq/Faq';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <CalculatorsSection />
      <About />
      <WhatWeDo />
      <WhyUs />
      <CtaBanner />
      <Faq />
      <ContactForm />
    </>
  );
}
