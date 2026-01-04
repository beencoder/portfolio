import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/hero.module.scss';
import SectionTitle from '../ui/SectionTitle';
import { LinkButton } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ id }) {
  const [isTitlePlay, setIsTitlePlay] = useState(false);
  const sectionRef = useRef(null);
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const btnWrapRef = useRef(null);
  const cloudLeftWrapRef = useRef(null);
  const cloudRightWrapRef = useRef(null);
  const cloudLeftInnerRef = useRef(null);
  const cloudRightInnerRef = useRef(null);
  const sunInnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        [cloudLeftInnerRef.current, cloudRightInnerRef.current],
        { x: (i) => (i === 0 ? 300 : -350), opacity: 0 },
        { x: 0, opacity: 1, duration: 12, ease: 'power2.out' },
        0,
      );
      tl.fromTo(
        sunInnerRef.current,
        { opacity: 0, scale: 0.8, rotation: 15 },
        { opacity: 1, scale: 1, rotation: 0, duration: 2, ease: 'back.out(1.7)' },
        0.5,
      );

      tl.fromTo(subTitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.8);
      tl.add(() => {
        setIsTitlePlay(true);
      }, 1.2);
      tl.fromTo(
        [taglineRef.current, btnWrapRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        1.8,
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.8,
        },
      });

      scrollTl.to(cloudLeftWrapRef.current, { x: '10vw', ease: 'none' }, 0);
      scrollTl.to(cloudRightWrapRef.current, { x: '12vw', ease: 'none' }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={clsx('section', styles.hero)}
      aria-labelledby={`${id}-title`}
      tabIndex={-1}>
      <div className={clsx('container', styles.layout)}>
        <div className={styles.contents}>
          <p ref={subTitleRef} className={styles['sub-title']}>
            2025 김다빈 포트폴리오
          </p>

          <div ref={titleRef} className={styles['title-inner']}>
            <SectionTitle id={`${id}-title`} className={styles.title} mode="fix" play={isTitlePlay}>
              <span className={styles.top}>UX-Driven</span>
              <span className={styles.bottom}>UI Developer</span>
            </SectionTitle>
          </div>

          <p ref={taglineRef} className={styles.tagline}>
            사용자 경험을 기반으로 UI를 설계하고 구현합니다.
          </p>
        </div>

        <div ref={btnWrapRef} className={clsx(styles.links, common['btn-wrap'])}>
          <LinkButton href="/resume.pdf" label="Resume" size="md" target="_blank" rel="noopener noreferrer" />
          <LinkButton
            href="/work/travelover"
            label="Recent Work"
            size="md"
            data-cursor="true"
            data-cursor-label={'트래블로버'}
          />
        </div>
      </div>

      {/* 배경 */}
      <div className={styles['hero-bg']} aria-hidden="true">
        <div className={styles['bg-inner']}>
          <div ref={cloudLeftWrapRef} className={clsx(styles.layer, styles.cloud, styles.left)}>
            <div ref={cloudLeftInnerRef} className={styles['img-inner']}>
              <Image
                src="/images/hero/cloud.png"
                alt=""
                width="520"
                height="520"
                sizes="(max-width: 1080px) 100vw, (max-width: 1440px) 36.11111111111111vw, (max-width: 1920px) 36.11111111111111vw, 36.11111111111111vw"
                priority
              />
            </div>
          </div>
          <div ref={cloudRightWrapRef} className={clsx(styles.layer, styles.cloud, styles.right)}>
            <div ref={cloudRightInnerRef} className={styles['img-inner']}>
              <Image
                src="/images/hero/cloud.png"
                alt=""
                width="520"
                height="520"
                sizes="(max-width: 1080px) 100vw, (max-width: 1440px) 36.11111111111111vw, (max-width: 1920px) 36.11111111111111vw, 36.11111111111111vw"
                priority
              />
            </div>
          </div>
          <div className={clsx(styles.layer, styles.sun)}>
            <div ref={sunInnerRef} className={styles['img-inner']}>
              <Image
                src="/images/hero/sun.png"
                alt=""
                width="460"
                height="460"
                sizes="(max-width: 1080px) 100vw, (max-width: 1440px) 36.11111111111111vw, (max-width: 1920px) 36.11111111111111vw, 36.11111111111111vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
