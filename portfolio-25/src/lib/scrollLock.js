let lockCount = 0;
let lockedY = 0;

// 스크롤락 실행
export function addScrollLock() {
  if (typeof document === 'undefined') return;
  lockCount += 1;
  if (lockCount > 1) return;

  // Lenis 정지
  if (window.lenis) window.lenis.stop();

  lockedY = window.scrollY || document.documentElement.scrollTop || 0;
  const docEl = document.documentElement;
  docEl.classList.add('is-scroll-locked');
  docEl.style.top = `-${lockedY}px`;
}

// 스크롤락 해제
export function removeScrollLock({ restore = true } = {}) {
  if (typeof document === 'undefined') return;
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount > 0) return;

  const docEl = document.documentElement;
  const y = Math.abs(parseInt(docEl.style.top || '0', 10)) || 0;
  docEl.classList.remove('is-scroll-locked');
  docEl.style.top = '';

  if (restore) {
    window.scrollTo(0, y);
  }

  // Lenis 재시작
  if (window.lenis) window.lenis.start();
}
