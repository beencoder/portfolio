import { Fragment } from 'react';

import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import WorksSection from '@/components/sections/Works';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <Fragment>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <WorksSection id="works" />
      <ContactSection id="contact" />
    </Fragment>
  );
}
