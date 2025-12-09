import Link from 'next/link';
import clsx from 'clsx';

import styles from '@/styles/components/wavy-link.module.scss';
import { getPrefersReducedMotion, scrollToHashTarget } from '@/lib/dom';

function splitChars(label = '') {
  return Array.from(label).map((ch) => (ch === ' ' ? '\u00A0' : ch));
}

export function WavyLabel({ label = '', brackets = true, srOnlyText }) {
  const chars = splitChars(label);
  const lastIndex = chars.length - 1;

  return (
    <span className={clsx(styles['text-inner'], { [styles['with-brackets']]: brackets })}>
      {srOnlyText ? <span className="sr-only">{srOnlyText}</span> : null}

      {/* 시각용 레이어 (위) */}
      <span className={clsx(styles.text, styles.top)} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`t-${i}`} className={styles.char} style={{ ['--i']: lastIndex - i }}>
            {ch}
          </span>
        ))}
      </span>

      {/* 시각용 레이어 (아래) */}
      <span className={clsx(styles.text, styles.bottom)} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`b-${i}`} className={styles.char} style={{ ['--i']: lastIndex - i }}>
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
  offset = 79,
  closeFirst = false,
  onAfterNavigate,
  ...restProps
}) {
  const isHashLink = typeof href === 'string' && href.startsWith('#');

  // 페이지 이동(Link) 클릭 시
  const handlePageLinkClick = (e) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.blur();
    }
    if (typeof onAfterNavigate === 'function') {
      setTimeout(() => onAfterNavigate(), 0);
    }
  };

  // 해시 링크 클릭 시
  const handleHashLinkClick = (e) => {
    e.preventDefault();

    if (closeFirst && typeof onAfterNavigate === 'function') {
      onAfterNavigate({ immediate: true });

      // 레이아웃이 닫힌 이후 위치 기준으로 다시 측정
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHashTarget(href, { offset });
        });
      });
    } else {
      scrollToHashTarget(href, { offset });

      if (typeof onAfterNavigate === 'function') {
        const prefersReduced = getPrefersReducedMotion();
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
        onClick={handleHashLinkClick}
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
      onClick={handlePageLinkClick}
      {...restProps}>
      <WavyLabel label={label} brackets={brackets} srOnlyText={label} />
    </Link>
  );
}

export function WavyButton({ label = '', type = 'button', className, ...restProps }) {
  return (
    <button type={type} className={clsx(styles.link, styles.btn, className)} {...restProps}>
      <WavyLabel label={label} brackets={false} srOnlyText={label} />
    </button>
  );
}

export function WavyLinkButton({ href = '#', label = '', offset = 79, onClick, ...restProps }) {
  const isHashLink = typeof href === 'string' && href.startsWith('#');

  if (isHashLink) {
    const handleClick = (e) => {
      // props.onClick 먼저 실행
      if (typeof onClick === 'function') {
        onClick(e);
      }
      // 부모에서 e.preventDefault() 한 경우 스킵
      if (e.defaultPrevented) return;

      // 스크롤 유틸 실행
      e.preventDefault();
      // React 리렌더 + removeScrollLock 실행 이후 -> 스크롤 위치 계산
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHashTarget(href, { offset });
        });
      });
    };

    return (
      <a href={href} className={clsx(styles.link, styles.btn)} onClick={handleClick} {...restProps}>
        <WavyLabel label={label} brackets={false} srOnlyText={label} />
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(styles.link, styles.btn)} onClick={onClick} {...restProps}>
      <WavyLabel label={label} brackets={false} srOnlyText={label} />
    </Link>
  );
}
