import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

import WavyLink from '@/components/ui/wavy-link';
import styles from '@/styles/layout/main-navigation.module.scss';

function isPageActive(pathname, href) {
  if (!pathname || !href) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

// 미디어쿼리 hook
function useMedia(query, defaultState = false) {
  const [matches, setMatches] = useState(defaultState);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);

    handler();
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, [query]);

  return matches;
}

export default function MainNavigation({ navItems = [] }) {
  const router = useRouter();
  const pathname = router?.pathname || '';
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMedia('(min-width: 768px)');

  // ===== 모바일 메뉴 모션 타이밍 상수 =====
  const OPEN_WRAP_MS = 360;
  const CLOSE_WRAP_MS = 280;
  const ITEM_MS = 280;
  const ITEM_STAGGER_CLOSE = 24;
  const ITEM_COUNT_FOR_CLOSE = 12;

  // 데스크탑 전환 시 오버레이 강제 닫기
  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false);
  }, [isDesktop, isOpen]);

  // 데스크탑 전환 시 스크롤락 해제
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.documentElement.style.overflow = '');
  }, [isOpen]);

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

  // 모바일 메뉴 관련
  const openMenu = useCallback(() => {
    setTimeout(() => setIsOpen(true), 0);
  }, []);

  const closeMenu = useCallback(() => {
    const wrap = document.getElementById('primary-menu');
    if (!wrap) {
      setIsOpen(false);
      return;
    }

    wrap.setAttribute('data-state', 'closing-items');

    const totalItemOut = ITEM_MS + (ITEM_COUNT_FOR_CLOSE - 1) * ITEM_STAGGER_CLOSE;

    setTimeout(() => {
      wrap.setAttribute('data-state', 'closing');

      setTimeout(() => {
        setIsOpen(false);
      }, CLOSE_WRAP_MS);
    }, totalItemOut);
  }, []);

  // 토글 버튼
  const onToggleClick = useCallback(() => {
    if (isOpen) closeMenu();
    else openMenu();
  }, [isOpen, openMenu, closeMenu]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      {/* 토글 버튼 (모바일에서 노출) */}
      <button
        type="button"
        className={`${styles['toggle-btn']} ${isOpen ? styles['is-open'] : ''}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="primary-menu"
        onClick={onToggleClick}>
        <span className="sr-only">{isOpen ? '메뉴 닫기' : '메뉴 열기'}</span>

        {/* 아이콘 */}
        <span className={styles['icon-group']} aria-hidden="true">
          <span className={`${styles.icon} ${styles.menu}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className={`${styles.icon} ${styles.close}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </span>
      </button>

      {/* 모바일 메뉴 오버레이 */}
      <div
        id="primary-menu"
        className={styles['menu-wrap']}
        data-state={isDesktop ? 'open' : isOpen ? 'open' : 'closing'}>
        <ul className={styles['menu-list']} role="list">
          {visibleItems.map((item) => {
            const isActive = item.type === 'section' ? activeSection === item.href : isPageActive(pathname, item.href);

            return (
              <li key={item.href} className={styles['menu-item']}>
                <WavyLink
                  href={item.href}
                  label={item.label}
                  isActive={isActive}
                  brackets={isDesktop}
                  offset={65}
                  onAfterNavigate={closeMenu}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
