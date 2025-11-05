import { useEffect } from 'react';

/**
 * 텍스트 스크램블 효과 (hover/focus 시 1회 재생, 단순 버전)
 * - 원문을 읽어 reverse한 텍스트 그룹으로 스크램블 (자기 텍스트 기반)
 * - 애니 중 width 고정 + white-space: nowrap로 레이아웃 흔들림 방지
 * - 공백 문자는 항상 원문 유지(줄바꿈/폭 튐 방지)
 *
 * @param {Object} opts
 * @param {string} opts.selector  적용 대상 셀렉터 (기본: [data-scramble])
 * @param {number} opts.duration  애니메이션 시간(ms) (기본: 240)
 * @param {number} opts.coverage  스크램블 비율(0~1) (기본: 0.25)
 */
export default function useScrambleHover(opts = {}) {
  const { selector = '[data-scramble]', duration = 240, coverage = 0.25 } = opts;

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    // requestAnimationFrame Map (각 요소별로 현재 실행 중인 애니메이션 ID 저장용)
    const rafMap = new WeakMap();

    const play = (el) => {
      const original = el.dataset.text || el.textContent || '';
      el.dataset.text = original;

      // 폭/줄바꿈 잠금 (동작할 동안 레이아웃 고정)
      const prevDisplay = el.style.display;
      const prevWidth = el.style.width;
      const prevWhiteSpace = el.style.whiteSpace;
      const { width } = el.getBoundingClientRect();
      el.style.display = 'inline-block';
      el.style.width = width + 'px';
      el.style.whiteSpace = 'nowrap';

      // reverse 기반 텍스트 그룹
      const basePool = original.replace(/\s/g, '');
      const chars = basePool ? basePool.split('').reverse().join('') : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

      const len = original.length;
      const start = performance.now();

      const finish = () => {
        el.textContent = original;
        el.style.display = prevDisplay;
        el.style.width = prevWidth;
        el.style.whiteSpace = prevWhiteSpace;
        rafMap.delete(el);
      };

      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const reveal = Math.floor(t * len);

        let out = '';
        for (let i = 0; i < len; i++) {
          const ch = original[i];
          if (i < reveal) {
            out += ch; // 이미 해독된 영역
          } else if (ch === ' ') {
            out += ch; // 공백은 항상 유지
          } else {
            out += Math.random() < coverage ? chars[(Math.random() * chars.length) | 0] : ch; // 일부만 섞기
          }
        }

        el.textContent = out;
        if (t < 1) {
          const id = requestAnimationFrame(step);
          rafMap.set(el, id);
        } else {
          finish();
        }
      };

      // 이미 재생 중이면 취소 후 재시작
      const prevId = rafMap.get(el);
      if (prevId) cancelAnimationFrame(prevId);
      rafMap.set(el, requestAnimationFrame(step));
    };

    const onEnter = (e) => play(e.currentTarget);
    const onFocus = (e) => {
      const el = e.target.closest(selector);
      if (el) play(el);
    };

    els.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('focusin', onFocus);
    });

    return () => {
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('focusin', onFocus);
        const id = rafMap.get(el);
        if (id) cancelAnimationFrame(id);
      });
    };
  }, [selector, duration, coverage]);
}
