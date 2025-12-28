import { useEffect, useMemo, useRef, Fragment, Children, isValidElement, cloneElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import common from '@/styles/pages/home/common.module.scss';

function splitTextToSpans(el) {
  if (typeof el !== 'string') return null;

  const text = el.replace(/\s+/g, ' ').trim();
  if (!text) return null;

  const words = text.split(' ');

  return words.map((word, wi) => (
    <Fragment key={`w-${wi}`}>
      <span style={{ display: 'inline-block' }}>
        {[...word].map((char, ci) => (
          <span key={`c-${wi}-${ci}`} className={common['char']}>
            {char}
          </span>
        ))}
      </span>
      {wi < words.length - 1 && ' '}
    </Fragment>
  ));
}

function createSplitChildren(children) {
  return Children.map(children, (child) => {
    if (typeof child === 'string') {
      return splitTextToSpans(child);
    }

    // 요소 + 문자열 조합인 경우
    if (isValidElement(child) && typeof child.props.children === 'string') {
      return cloneElement(child, {
        children: splitTextToSpans(child.props.children),
      });
    }

    return child;
  });
}

export default function SectionTitle({ id, className, mode = 'scroll', children }) {
  const titleRef = useRef(null);
  const animatedRef = useRef(false);
  const splitChildren = useMemo(() => createSplitChildren(children), [children]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = titleRef.current;
    if (!el) return;

    // fix 모드일 때 이미 애니메이션이 실행되었다면 다시 실행하지 않음
    if (mode === 'fix' && animatedRef.current) return;

    const letters = el.querySelectorAll(`.${common['char']}`);
    if (!letters.length) return;

    const ctx = gsap.context(() => {
      if (mode === 'fix') {
        // 애니메이션 실행 직후 true로 변경
        animatedRef.current = true;

        const lines = Array.from(el.children).filter((node) => node.nodeType === Node.ELEMENT_NODE);
        const topLine = lines[0] || el;
        const bottomLine = lines[1] || null;
        const topChars = gsap.utils.toArray(topLine.querySelectorAll(`.${common['char']}`));
        const bottomChars = bottomLine ? gsap.utils.toArray(bottomLine.querySelectorAll(`.${common['char']}`)) : [];

        gsap.set([...topChars, ...bottomChars], {
          yPercent: 40,
          scaleY: 0.2,
          opacity: 0,
          transformOrigin: 'bottom center',
        });

        const tl = gsap.timeline();

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
      if (mode === 'scroll') {
        if (!gsap.core.globals().ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        gsap.fromTo(
          letters,
          { yPercent: -120 },
          {
            yPercent: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              end: 'bottom 30%',
              scrub: 1,
            },
            stagger: {
              each: 0.05,
              from: 'center',
            },
          },
        );
      }
    }, el);

    return () => {
      if (mode !== 'fix') {
        ctx.revert(); // tween/ScrollTrigger 제거
      }
    };
  }, [mode, children]);

  return (
    <h1 id={id} ref={titleRef} className={className}>
      {splitChildren}
    </h1>
  );
}
