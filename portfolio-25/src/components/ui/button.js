import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Button({ label, isActive, ...restProps }) {
  return (
    <button type="button" className={`btn ${isActive && 'is-active'}`} {...restProps}>
      {label}
      <ArrowUpRight className="icon" aria-hidden />
    </button>
  );
}

export function LinkButton({ href, label, isActive, ...restProps }) {
  return (
    <Link href={href} className={`btn ${isActive && 'is-active'}`} {...restProps}>
      {label}
      <ArrowUpRight className="icon" aria-hidden />
    </Link>
  );
}
