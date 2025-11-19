// prefers-reduced-motion 체크
export function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// 해시 타깃으로 스크롤 + 포커스 이동
export function scrollToHashTarget(href, options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (typeof href !== 'string' || !href.startsWith('#')) return;

  const { offset = 79, focus = true } = options;

  const el = document.querySelector(href);
  if (!el) return;

  const prefersReduced = getPrefersReducedMotion();
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - offset;

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
