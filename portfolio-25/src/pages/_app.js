import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import CustomCursor from '../components/layout/CustomCursor';
import '@/styles/globals.scss';
import Layout from '../components/layout/Layout';
import ModalOverlay from '../components/ui/modal/ModalOverlay';

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      wheelMultiplier: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 페이지 이동 시 스크롤 위치 초기화
    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      lenis.destroy();
      window.lenis = null;
      gsap.ticker.remove(lenis.raf);
    };
  }, [router.events]);

  return (
    <Layout {...pageProps}>
      <CustomCursor />
      <Component {...pageProps} />
      <ModalOverlay />
    </Layout>
  );
}
