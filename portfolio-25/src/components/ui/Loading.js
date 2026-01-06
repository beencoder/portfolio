import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from '@/styles/components/loading.module.scss';

export default function Loading({ onComplete }) {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const contentRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
        .to(progressRef.current, {
          scaleX: 1,
          duration: 1.2,
          ease: 'power1.inOut',
        })
        .to({}, { duration: 0.2 })
        .addLabel('open')
        .to(leftPanelRef.current, { xPercent: -100, duration: 0.8, ease: 'expo.inOut' }, 'open')
        .to(rightPanelRef.current, { xPercent: 100, duration: 0.8, ease: 'expo.inOut' }, 'open')
        .to(contentRef.current, { opacity: 0, scale: 0.9, duration: 0.4 }, 'open');
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className={styles.curtain}>
      <div ref={leftPanelRef} className={styles.left} />
      <div ref={rightPanelRef} className={styles.right} />

      <div ref={contentRef} className={styles.content}>
        <div className={styles.logo_wrap}>
          <Image src="/images/common/logo.svg" alt="Logo" width={55} height={70} priority />
        </div>
        <div className={styles.progress_container}>
          <div ref={progressRef} className={styles.progress_bar} />
        </div>
      </div>
    </div>
  );
}
