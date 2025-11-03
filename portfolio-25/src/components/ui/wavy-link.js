import Link from 'next/link';
import clsx from 'clsx';

import WavyLabel from './wavy-label';
import styles from '@/styles/components/wavy-link.module.scss';

export default function WavyLink({
  href = '#',
  label = '',
  isActive = false,
  brackets = true,
  offset = 65,
  ...restProps
}) {
  const isHashLink = typeof href === 'string' && href.startsWith('#');

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onPageLinkClick = (e) => {
    if (e.currentTarget instanceof HTMLElement) e.currentTarget.blur();
  };

  const onHashLinkClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });

    setTimeout(
      () => {
        if (typeof el.focus === 'function') el.focus({ preventScroll: true });
      },
      prefersReduced ? 0 : 450,
    );
  };

  if (isHashLink) {
    return (
      <a
        href={href}
        className={clsx(styles.link, isActive && styles['is-active'])}
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
      className={clsx(styles.link, isActive && styles['is-active'])}
      aria-current={isActive ? 'page' : undefined}
      onClick={onPageLinkClick}
      {...restProps}>
      <WavyLabel label={label} brackets={brackets} srOnlyText={label} />
    </Link>
  );
}
