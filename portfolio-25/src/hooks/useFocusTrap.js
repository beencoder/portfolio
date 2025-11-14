import { useEffect } from 'react';

const TABBABLE = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'summary',
].join(',');

export default function useFocusTrapMinimal(
  containerRef,
  active,
  {
    initial = 'first', // 'first' | 'container' | HTMLElement
    returnTo = null, // ref or HTMLElement
    onEscape = null, // () => void
  } = {},
) {
  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    const prevFocused = document.activeElement;

    const getTabs = () =>
      Array.from(container.querySelectorAll(TABBABLE)).filter((el) => {
        if (el.hasAttribute('disabled')) return false;
        const style = window.getComputedStyle(el);
        if (style.visibility === 'hidden' || style.display === 'none') return false;

        return true;
      });

    // 초기 포커스
    const focusInit = () => {
      if (initial === 'container') {
        if (!container.hasAttribute('tabindex')) container.setAttribute('tabindex', '-1');
        container.focus({ preventScroll: true });
        return;
      }
      if (initial instanceof HTMLElement) {
        initial.focus({ preventScroll: true });
        return;
      }
      const tabs = getTabs();
      (tabs[0] || container).focus({ preventScroll: true });
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape' && typeof onEscape === 'function') {
        e.stopPropagation();
        onEscape();
        return;
      }
      if (e.key !== 'Tab') return;

      const tabs = getTabs();
      if (tabs.length === 0) {
        e.preventDefault();
        container.focus({ preventScroll: true });
        return;
      }
      const first = tabs[0];
      const last = tabs[tabs.length - 1];
      const current = document.activeElement;

      // 순환
      if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (current === first || current === container)) {
        e.preventDefault();
        last.focus();
      }
    };

    // 활성화 시점에 바로 포커스
    focusInit();
    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      // 포커스 복귀
      const target = returnTo?.current ?? returnTo ?? prevFocused;
      if (target && target instanceof HTMLElement) {
        target.focus({ preventScroll: true });
      }
    };
  }, [containerRef, active, initial, returnTo, onEscape]);
}
