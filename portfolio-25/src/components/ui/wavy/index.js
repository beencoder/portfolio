import Link from 'next/link';
import clsx from 'clsx';

import styles from '@/styles/components/wavy-link.module.scss';

function splitChars(label = '') {
  return Array.from(label).map((ch) => (ch === ' ' ? '\u00A0' : ch));
}

export function WavyLabel({ label = '', brackets = true, srOnlyText }) {
  const chars = splitChars(label);

  return (
    <span className={clsx(styles['text-inner'], { [styles['with-brackets']]: brackets })}>
      {srOnlyText ? <span className="sr-only">{srOnlyText}</span> : null}

      {/* 시각용 레이어 (위) */}
      <span className={clsx(styles.text, styles.top)} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`t-${i}`} className={styles.char} style={{ ['--i']: i }}>
            {ch}
          </span>
        ))}
      </span>

      {/* 시각용 레이어 (아래) */}
      <span className={clsx(styles.text, styles.bottom)} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`b-${i}`} className={styles.char} style={{ ['--i']: i }}>
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
}

export function WavyLink({
  href = '#',
  label = '',
  isActive = false,
  brackets = true,
  offset = 72,
  closeFirst = false,
  onAfterNavigate,
  ...restProps
}) {
  const isHashLink = typeof href === 'string' && href.startsWith('#');

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onPageLinkClick = (e) => {
    if (e.currentTarget instanceof HTMLElement) e.currentTarget.blur();
    if (onAfterNavigate) setTimeout(() => onAfterNavigate(), 0);
  };

  // 측정/스크롤 함수 분리
  const scrollToTarget = () => {
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
    setTimeout(
      () => {
        if (typeof el.focus === 'function') el.focus({ preventScroll: true });
      },
      prefersReduced ? 0 : 300,
    );
  };

  const onHashLinkClick = (e) => {
    e.preventDefault();

    if (closeFirst && onAfterNavigate) {
      // 오버레이 즉시 닫기 요청
      onAfterNavigate({ immediate: true });
      // 레이아웃이 닫힘 상태로 안정화되도록 2프레임 대기 후 정확히 측정/스크롤
      requestAnimationFrame(() => requestAnimationFrame(scrollToTarget));
    } else {
      scrollToTarget();
      if (onAfterNavigate) {
        setTimeout(() => onAfterNavigate(), prefersReduced ? 0 : 450);
      }
    }
  };

  if (isHashLink) {
    return (
      <a
        href={href}
        className={clsx(styles.link, { [styles['is-active']]: isActive })}
        aria-current={isActive ? 'true' : undefined}
        onClick={onHashLinkClick}
        {...restProps}>
        <WavyLabel label={label} brackets={brackets} srOnlyText={label} />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(styles.link, { [styles['is-active']]: isActive })}
      aria-current={isActive ? 'page' : undefined}
      onClick={onPageLinkClick}
      {...restProps}>
      <WavyLabel label={label} brackets={brackets} srOnlyText={label} />
    </Link>
  );
}

export function WavyButton({ label = '', type = 'button', brackets = false, isActive = false, ...restProps }) {
  return (
    <button type={type} className={clsx(styles.link, 'btn', { [styles['is-active']]: isActive })} {...restProps}>
      <WavyLabel label={label} brackets={brackets} srOnlyText={label} />
    </button>
  );
}
