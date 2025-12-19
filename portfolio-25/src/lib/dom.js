// prefers-reduced-motion 체크
export function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// 해시 타깃으로 스크롤 + 포커스 이동
export function scrollToHashTarget(href, options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (typeof href !== 'string' || !href.startsWith('#')) return;

  const { offset = 80, focus = true } = options;

  const el = document.querySelector(href);
  if (!el) return;

  const prefersReduced = getPrefersReducedMotion();
  const targetRect = el.getBoundingClientRect();
  const targetStyle = window.getComputedStyle(el);
  const targetPaddingTop = parseFloat(targetStyle.paddingTop) || 0;
  const top = targetRect.top + window.scrollY + targetPaddingTop - offset;

  window.scrollTo({
    top,
    behavior: prefersReduced ? 'auto' : 'smooth',
  });

  if (!focus) return;

  setTimeout(
    () => {
      if (typeof el.focus === 'function') {
        el.focus({ preventScroll: true });
      }
    },
    prefersReduced ? 0 : 300,
  );
}
