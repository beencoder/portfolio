import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import styles from '@/styles/layout/main-navigation.module.scss';

function isPageActive(pathname, href) {
  if (!pathname || !href) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function MainNavigation({ navItems = [] }) {
  const router = useRouter();
  const pathname = router?.pathname || '';
  const [activeSection, setActiveSection] = useState('');

  // 홈이 아니면 page 타입만 남기기
  const visibleItems = useMemo(() => {
    if (pathname === '/') return navItems;

    const pageItems = navItems.filter((item) => item.type === 'page');
    return [{ type: 'page', href: '/', label: 'Home' }, ...pageItems];
  }, [pathname, navItems]);

  useEffect(() => {
    const sections = visibleItems
      .filter((item) => item.type === 'section')
      .map((item) => {
        const el = document.querySelector(item.href);
        return el ? { id: item.href, el } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    // 스크롤 시 활성화된 section 갱신
    const onScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId = sections[0].id;
      let minDist = Infinity;

      for (const section of sections) {
        const rect = section.el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const dist = Math.abs(sectionCenter - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          closestId = section.id;
        }
      }
      setActiveSection(closestId);
    };

    onScroll(); // 초기 init
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [navItems]);

  // 메뉴 클릭 시 스크롤 이동
  const onMenuClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.menu}>
        {visibleItems.map((item) => {
          if (item.type === 'section') {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => onMenuClick(e, item.href)}
                  className={isActive ? styles['is-active'] : undefined}
                  aria-current={isActive ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            );
          }

          const isActive = isPageActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? styles['is-active'] : undefined}
                aria-current={isActive ? 'page' : undefined}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
