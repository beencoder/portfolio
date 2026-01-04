import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from '@/styles/layout/header.module.scss';
import Logo from '../ui/logo';
import MainNavigation from './MainNavigation';

const navItems = [
  { type: 'section', href: '#hero', label: 'Start' },
  { type: 'section', href: '#about', label: 'Who I Am' },
  { type: 'section', href: '#works', label: 'Works' },
  { type: 'section', href: '#contact', label: 'Let’s Talk' },
  { type: 'page', href: '/guestbook', label: 'Guestbook' },
];

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        delay: 2,
      },
    );
  }, []);

  const skipToContentHandler = (e) => {
    e.preventDefault();

    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.scrollIntoView({ behavior: 'smooth' });
      mainEl.focus({ preventScroll: true });
    }
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <a href="#main" className="sr-only" onClick={skipToContentHandler}>
        본문 바로가기
      </a>
      <div className="container">
        <div className={styles['header-inner']}>
          <h1 className="sr-only">다빈의 포트폴리오 사이트</h1>
          <Logo />
          <MainNavigation navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
