import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import WavyLink from '@/components/ui/wavy-link';
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

  // 홈이 아니면 page 타입 버튼만 필터링
  const visibleItems = useMemo(() => {
    if (pathname === '/') return navItems;

    const pageItems = navItems.filter((item) => item.type === 'page');
    return [{ type: 'page', href: '/', label: 'Home' }, ...pageItems];
  }, [pathname, navItems]);

  useEffect(() => {
    // 현재 렌더링에서 실제 존재하는 섹션 타입 버튼만 필터링
    const sectionItems = visibleItems
      .filter((item) => item.type === 'section')
      .map((item) => {
        const el = document.querySelector(item.href);
        return el ? { id: item.href, el } : null;
      })
      .filter(Boolean);

    if (!sectionItems.length) return;

    // 스크롤 시 화면 중앙과 가장 가까운 섹션을 감지해 activeSection 상태 업데이트
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId = sectionItems[0].id;
      let minDist = Infinity;

      for (const section of sectionItems) {
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

    updateActiveSection(); // 초기 init
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [visibleItems]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.menu}>
        {visibleItems.map((item) => {
          const isActive = item.type === 'section' ? activeSection === item.href : isPageActive(pathname, item.href);

          return (
            <li key={item.href} className={styles['menu-item']}>
              <WavyLink href={item.href} label={item.label} isActive={isActive} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
