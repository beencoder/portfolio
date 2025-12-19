import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { TextAlignJustify, X } from 'lucide-react';

import useFocusTrap from '@/hooks/useFocusTrap';
import useScrollLock from '@/hooks/useScrollLock';
import useMedia from '@/hooks/useMedia';
import styles from '@/styles/layout/main-navigation.module.scss';
import { WavyLink } from '@/components/ui/wavy';
import { LinkButton, Button } from '../ui/button';

function isPageActive(pathname, href) {
  if (!pathname || !href) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function MainNavigation({ navItems = [] }) {
  const router = useRouter();
  const pathname = router?.pathname || '';
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMedia('(min-width: 768.02px)');
  const immediateCloseRef = useRef(false);
  const toggleBtnRef = useRef(null);
  const menuWrapRef = useRef(null);
  const isHome = pathname === '/';
  const showSectionLinks = isHome;

  // ===== 모바일 메뉴 모션 타이밍 상수 =====
  const CLOSE_WRAP_MS = 420;
  const ITEM_MS = 450;
  const ITEM_STAGGER_CLOSE = 40;

  const sectionLinks = useMemo(
    () => (showSectionLinks ? navItems.filter((item) => item.type === 'section') : []),
    [showSectionLinks, navItems],
  );
  const pageLinks = useMemo(() => navItems.filter((item) => item.type === 'page'), [navItems]);
  const sectionItemCount = sectionLinks.length;

  const isMenuDialogVisible = isHome && !isDesktop && isOpen;
  const isMenuVisible = isHome && (isDesktop || isOpen);

  const getMenuWrap = () => document.getElementById('primary-menu');
  // 오버레이 즉시닫기 on/off
  const setImmediateCloseOn = () => {
    const wrap = getMenuWrap();
    if (wrap) {
      wrap.setAttribute('data-immediate', 'true');
      wrap.setAttribute('data-state', 'closed');
    }
    setIsOpen(false);
  };
  const setImmediateCloseOff = () => {
    const wrap = getMenuWrap();
    if (wrap) wrap.removeAttribute('data-immediate');
  };

  // 스크롤 핸들러(is-scrolled 토글 + 홈 섹션 활성 감지)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sectionItems = showSectionLinks
      ? sectionLinks
          .map((item) => {
            const el = document.querySelector(item.href);
            return el ? { id: item.href, el } : null;
          })
          .filter(Boolean)
      : [];
    let isTicking = false;
    const onScroll = () => {
      if (isTicking) return;
      isTicking = true;

      requestAnimationFrame(() => {
        // is-scrolled 토글
        const scrolled = window.scrollY > 40;
        document.documentElement.classList.toggle('is-scrolled', scrolled);

        // 화면 중앙과 가장 가까운 섹션을 감지해 activeSection 상태 업데이트
        if (sectionItems.length) {
          const viewportCenter = window.innerHeight / 2;
          let closestId = sectionItems[0].id;
          let minDist = Infinity;

          for (const s of sectionItems) {
            const rect = s.el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const dist = Math.abs(center - viewportCenter);
            if (dist < minDist) {
              minDist = dist;
              closestId = s.id;
            }
          }
          setActiveSection((prev) => (prev !== closestId ? closestId : prev));
        }

        isTicking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [showSectionLinks, sectionLinks]);

  // 데스크탑 전환 시 오버레이 강제 닫기
  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false);
  }, [isDesktop, isOpen]);

  // 스크롤락 적용
  useScrollLock(isHome && !isDesktop && isOpen);

  // 모바일 포커스 트랩
  useFocusTrap(menuWrapRef, isHome && !isDesktop && isOpen, {
    initial: 'first',
    returnTo: toggleBtnRef,
    onEscape: () => closeMenu(),
  });

  // 모바일 메뉴 관련
  const openMenu = useCallback(() => {
    if (!isDesktop) {
      setTimeout(() => {
        setImmediateCloseOff();
        setIsOpen(true);
      }, 0);
    }
  }, [isDesktop]);

  const closeMenu = useCallback(() => {
    if (isDesktop) return;

    const wrap = getMenuWrap();
    if (!wrap) {
      setIsOpen(false);
      return;
    }
    wrap.setAttribute('data-state', 'closing-items');

    const lastDelay = ITEM_STAGGER_CLOSE * sectionItemCount;
    const totalItemOut = ITEM_MS + lastDelay;

    setTimeout(() => {
      wrap.setAttribute('data-state', 'closing');

      setTimeout(() => {
        setIsOpen(false);
      }, CLOSE_WRAP_MS);
    }, totalItemOut);
  }, [isDesktop]);

  const handleBackClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  }, [router]);

  // 토글 버튼 동작
  const handleToggleBtnClick = useCallback(() => {
    if (isOpen) closeMenu();
    else openMenu();
  }, [isDesktop, isOpen, openMenu, closeMenu]);

  // pages 버튼 클릭 시
  const handleLinkBtnClick = useCallback(
    (href) => () => {
      if (!isDesktop && isOpen) {
        // 애니메이션 스킵
        immediateCloseRef.current = true;
        setImmediateCloseOn();
      }
    },
    [isDesktop, isOpen],
  );

  // 라우트 완료 시 플래그/속성 정리
  useEffect(() => {
    const handleDone = () => {
      if (immediateCloseRef.current) {
        setImmediateCloseOff();
        immediateCloseRef.current = false;
      }
    };
    router.events.on('routeChangeComplete', handleDone);
    router.events.on('routeChangeError', handleDone);
    return () => {
      router.events.off('routeChangeComplete', handleDone);
      router.events.off('routeChangeError', handleDone);
    };
  }, [router.events]);

  return (
    <nav className={styles.nav} aria-label="Primary" ref={menuWrapRef}>
      {/* 상단 버튼: 홈이면 토글 버튼, 홈이 아니면 뒤로가기 버튼 */}
      {isHome ? (
        <>
          <button
            type="button"
            ref={toggleBtnRef}
            className={clsx(styles['toggle-btn'], { [styles['is-active']]: isOpen })}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="primary-menu"
            onClick={handleToggleBtnClick}>
            <span className="sr-only">{isOpen ? '메뉴 닫기' : '메뉴 열기'}</span>

            {/* 아이콘 */}
            <span className={styles['icon-group']} aria-hidden>
              <span className={clsx(styles['btn-icon'], styles.menu)}>
                <TextAlignJustify className="icon" aria-hidden />
              </span>
              <span className={clsx(styles['btn-icon'], styles.close)}>
                <X className="icon" aria-hidden />
              </span>
            </span>
          </button>

          {/* 모바일 메뉴 오버레이 */}
          <div
            id="primary-menu"
            className={styles['menu-wrap']}
            data-state={isDesktop ? 'open' : isOpen ? 'open' : 'closed'}
            aria-hidden={!isMenuVisible}
            role={isMenuDialogVisible ? 'dialog' : undefined}
            aria-modal={isMenuDialogVisible ? 'true' : undefined}
            aria-labelledby={isMenuDialogVisible ? 'primary-menu-title' : undefined}>
            <h2 id="primary-menu-title" className="sr-only">
              메인 메뉴
            </h2>

            <ul className={styles['menu-list']} role="list">
              {sectionLinks.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href} className={styles['menu-item']}>
                    <WavyLink
                      href={item.href}
                      label={item.label}
                      isActive={isActive}
                      brackets={isDesktop}
                      offset={isDesktop ? 80 : 70}
                      closeFirst={!isDesktop}
                      onAfterNavigate={
                        !isDesktop
                          ? ({ immediate } = { immediate: false }) => {
                              if (immediate) {
                                // 즉시 닫힘 모드
                                setImmediateCloseOn();
                                // 다음 프레임에 즉시모드 OFF (재오픈 모션 복원)
                                requestAnimationFrame(() => setImmediateCloseOff());
                              } else {
                                closeMenu();
                              }
                            }
                          : undefined
                      }
                    />
                  </li>
                );
              })}
            </ul>

            <ul className={clsx(styles['menu-list'], styles['has-btn'])} role="list">
              {pageLinks.map((item) => {
                const isActive = isPageActive(pathname, item.href);

                return (
                  <li key={item.href} className={styles['menu-item']}>
                    <LinkButton
                      href={item.href}
                      label={item.label}
                      isActive={isActive}
                      onClick={handleLinkBtnClick(item.href)}
                      aria-current={isActive ? 'page' : undefined}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <Button label="Back" arrow="left" onClick={handleBackClick} />
      )}
    </nav>
  );
}
