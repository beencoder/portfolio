import Link from 'next/link';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import clsx from 'clsx';

export function Button({
  label,
  size = 'sm',
  isActive = false,
  arrow = 'right',
  markIcon = null,
  className,
  ...restProps
}) {
  return (
    <button type="button" className={clsx('btn', `btn-${size}`, { ['is-active']: isActive }, className)} {...restProps}>
      {arrow === 'left' && <ArrowUpLeft className="icon left" aria-hidden="true" />}
      {markIcon && markIcon}

      <span>{label}</span>

      {arrow === 'right' && <ArrowUpRight className="icon" aria-hidden="true" />}
    </button>
  );
}

export function LinkButton({
  href,
  label,
  size = 'sm',
  isActive = false,
  arrow = 'right',
  markIcon = null,
  ...restProps
}) {
  return (
    <Link href={href} className={clsx('btn', `btn-${size}`, { ['is-active']: isActive })} {...restProps}>
      {arrow === 'left' && <ArrowUpLeft className="icon" aria-hidden="true" />}
      {markIcon && markIcon}

      <span>{label}</span>

      {arrow === 'right' && <ArrowUpRight className="icon" aria-hidden="true" />}
    </Link>
  );
}
