import { Fragment } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import WorksSection from '@/components/sections/works';
import ContactSection from '@/components/sections/contact';

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
