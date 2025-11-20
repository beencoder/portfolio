import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import common from '@/styles/pages/home/common.module.scss';

export default function SectionTitle({ id, className, mode = 'scroll', children }) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = titleRef.current;
    if (!el) return;

    // 원래 html 구조 저장 (data-raw-html 캐싱)
    const rawHtml = el.dataset.rawHtml || el.innerHTML;
    el.dataset.rawHtml = rawHtml;
    el.innerHTML = rawHtml;

    const text = el.textContent.replace(/\s+/g, ' ').trim();
    if (!text) return;

    // 글자 단위로 쪼개기
    const splitElementText = (targetEl) => {
      const text = targetEl.textContent.replace(/\s+/g, ' ').trim();
      if (!text) return;

      targetEl.innerHTML = '';
      const fragment = document.createDocumentFragment();
      const words = text.split(' ');

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';

        [...word].forEach((char) => {
          const letterSpan = document.createElement('span');
          letterSpan.classList.add(common['char']);
          letterSpan.textContent = char;
          wordSpan.appendChild(letterSpan);
        });

        fragment.appendChild(wordSpan);

        // 단어 사이 공백 유지
        if (wordIndex < words.length - 1) {
          fragment.appendChild(document.createTextNode(' '));
        }
      });

      targetEl.appendChild(fragment);
    };

    // 부모 안에 el가 있다면 그 el 각각을 split, 없다면 부모 자체 텍스트를 split
    const childElements = Array.from(el.children).filter((node) => node.nodeType === Node.ELEMENT_NODE);

    if (childElements.length > 0) {
      childElements.forEach((child) => splitElementText(child));
    } else {
      splitElementText(el);
    }

    // GSAP 애니메이션 적용
    const letters = el.querySelectorAll(`.${common['char']}`);
    if (!letters.length) return;

    const ctx = gsap.context(() => {
      if (mode === 'hero') {
        // 위/아래 줄 span
        const lines = Array.from(el.children).filter((node) => node.nodeType === Node.ELEMENT_NODE);
        const topLine = lines[0] || el;
        const bottomLine = lines[1] || null;

        const topChars = topLine
          ? gsap.utils.toArray(topLine.querySelectorAll(`.${common['char']}`))
          : gsap.utils.toArray(letters);
        const bottomChars = bottomLine ? gsap.utils.toArray(bottomLine.querySelectorAll(`.${common['char']}`)) : [];

        gsap.set([...topChars, ...bottomChars], {
          yPercent: 40,
          scaleY: 0.2,
          opacity: 0,
          transformOrigin: 'bottom center',
        });

        const tl = gsap.timeline();

        // 윗줄
        tl.to(topChars, {
          yPercent: 0,
          scaleY: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: {
            each: 0.035,
            from: 'start',
          },
        });

        // 아래줄
        if (bottomChars.length) {
          tl.to(
            bottomChars,
            {
              yPercent: 0,
              scaleY: 1,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              stagger: {
                each: 0.035,
                from: 'end',
              },
            },
            '<0.1',
          );
        }

        return;
      }

      if (!gsap.core.globals().ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

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
          },
          stagger: {
            each: 0.06, // 글자 간 딜레이 간격
            from: 'center', // 가운데 글자부터 양옆으로
          },
        },
      );
    }, el);

    return () => {
      ctx.revert(); // tween/ScrollTrigger 제거
    };
  }, [mode]);

  return (
    <h2 id={id} ref={titleRef} className={className}>
      {children}
    </h2>
  );
}
