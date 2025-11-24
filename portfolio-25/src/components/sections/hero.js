import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';

import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/hero.module.scss';
import SectionTitle from '../ui/section-title';
import { LinkButton } from '../ui/button';

export default function HeroSection({ id }) {
  const bgRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   const bgEl = bgRef.current;
  //   if (!bgEl) return;

  //   const layers = gsap.utils.toArray(`.${styles.layer}`, bgEl);
  //   gsap.set(layers, { xPercent: -50 });

  //   const handleMouseMove = (e) => {
  //     const { innerWidth, innerHeight } = window;
  //     const xRatio = (e.clientX / innerWidth - 0.5) * 2;
  //     const yRatio = (e.clientY / innerHeight - 0.5) * 2;

  //     layers.forEach((layer) => {
  //       const depth = Number(layer.dataset.depth) || -0.2;

  //       gsap.to(layer, {
  //         x: xRatio * 70 * depth,
  //         y: yRatio * 70 * depth,
  //         duration: 0.35,
  //         ease: 'power2.out',
  //       });
  //     });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <section id={id} className={clsx('section', styles.hero)} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className={clsx('container', styles.wrapper)}>
        {/* 배경 */}
        <div className={styles['hero-bg']} aria-hidden="true" ref={bgRef}>
          <div className={styles.layer} data-depth="-0.08">
            <img src="/images/hero/gold-light.png" alt="" aria-hidden="true" />
          </div>
          <div className={styles.layer} data-depth="-0.18">
            <img src="/images/hero/tree.png" alt="" aria-hidden="true" />
          </div>
        </div>

        <div className={styles.contents}>
          <p className={styles['sub-title']}>2025 다콩 포트폴리오</p>

          <div className={styles['title-inner']}>
            <SectionTitle id={`${id}-title`} className={styles.title} mode="hero">
              <span className={styles.top}>UX-Driven</span>
              <span className={styles.bottom}>UI Developer</span>
            </SectionTitle>
          </div>

          <p className={styles.tagline}>사용자 경험을 기반으로 UI를 설계하고 구현합니다.</p>
        </div>

        <div className={styles['btn-wrap']}>
          <LinkButton href="/resume.pdf" label="Resume" size="medium" target="_blank" rel="noopener noreferrer" />
          <LinkButton href="/posts" label="Recent Work" size="medium" />
        </div>
      </div>
    </section>
  );
}
