// src/components/common/SectionTitle.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import common from '@/styles/pages/home/common.module.scss';

export default function SectionTitle({ id, className, children }) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 플러그인 중복 등록 방지
    if (!gsap.core.globals().ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const el = titleRef.current;
    if (!el) return;

    const text = el.dataset.rawText || el.textContent.trim();
    if (!text) return;

    // 중복 split 방지
    if (el.dataset.split === 'true') return;

    // 글자 단위로 쪼개기
    el.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const words = text.split(' ');

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';

      [...word].forEach((char) => {
        const letterSpan = document.createElement('span');
        letterSpan.classList.add(common['section-title-letter']);
        letterSpan.textContent = char;
        wordSpan.appendChild(letterSpan);
      });

      fragment.appendChild(wordSpan);

      // 단어 사이 공백 유지
      if (wordIndex < words.length - 1) {
        fragment.appendChild(document.createTextNode(' '));
      }
    });

    el.appendChild(fragment);
    el.dataset.split = 'true';

    // GSAP 애니메이션 적용
    const letters = el.querySelectorAll(`.${common['section-title-letter']}`);
    if (!letters.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        {
          yPercent: -120,
        },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 40%',
            scrub: true,
            // markers: true,
          },
          stagger: {
            each: 0.06, // 글자 간 딜레이 간격
            from: 'center', // 가운데 글자부터 양옆으로 퍼지는 순서
          },
        },
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <h2
      id={id}
      ref={titleRef}
      className={common['section-title']}
      data-raw-text={typeof children === 'string' ? children : undefined}>
      {children}
    </h2>
  );
}
