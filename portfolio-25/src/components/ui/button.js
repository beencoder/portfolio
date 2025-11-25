import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

export function Button({ label, isActive, ...restProps }) {
  return (
    <button type="button" className={`btn ${isActive && 'is-active'}`} {...restProps}>
      {label}
      <ArrowUpRight className="icon" aria-hidden />
    </button>
  );
}

export function LinkButton({ href, label, size = 'sm', isActive = false, ...restProps }) {
  return (
    <Link href={href} className={clsx('btn', `btn-${size}`, { 'is-active': isActive })} {...restProps}>
      {label}
      <ArrowUpRight className="icon" aria-hidden />
    </Link>
  );
}
