import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styles from '@/styles/components/project-block.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectBlock({ projectItem, index, isMobile, onActivate, onDeactivate }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        {
          clipPath: 'inset(0 0 0 100%)',
          x: 40,
          opacity: 0,
        },
        {
          clipPath: 'inset(0 0 0 0%)',
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          delay: isMobile ? 0 : index * 0.1,
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });

    return () => ctx.revert();
  }, [index, isMobile]);

  function handleLinkClick(e) {
    e.stopPropagation();
  }

  const eventProps = isMobile
    ? {}
    : {
        onMouseEnter: (e) => onActivate(projectItem, e),
        onMouseLeave: () => onDeactivate(),
        onFocus: (e) => onActivate(projectItem, e),
        onBlur: () => onDeactivate(),
      };

  return (
    <li ref={elementRef} className={styles['project-item']} {...eventProps}>
      <Link href={`${projectItem.url.detail}`} onClick={(e) => handleLinkClick(e, projectItem.url.detail)}>
        <div className={styles.inner}>
          <div className={styles['title-wrap']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" aria-hidden="true">
              <path d="M8,0h16v20c0,4.42-3.58,8-8,8h-8c-4.42,0-8-3.58-8-8v-12C0,3.58,3.58,0,8,0Z"></path>
            </svg>
            <h2 className={styles.title}>{projectItem.title}</h2>
          </div>
          <span className={styles.category}>{projectItem.category}</span>
        </div>
      </Link>
    </li>
  );
}
