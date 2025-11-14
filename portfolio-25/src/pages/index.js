import { Fragment } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import IntroSection from '@/components/sections/intro';
import AboutSection from '@/components/sections/about';
import WorksSection from '@/components/sections/works';
import ContactSection from '@/components/sections/contact';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <Fragment>
      <IntroSection id="intro" />
      <AboutSection id="about" />
      <WorksSection id="works" />
      <ContactSection id="contact" />
    </Fragment>
  );
}
