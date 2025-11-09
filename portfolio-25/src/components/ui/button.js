import { ArrowUpRight } from 'lucide-react';

export default function Button({ label, isActive, ...restProps }) {
  return (
    <button type="button" className={`btn ${isActive && 'is-active'}`} {...restProps}>
      {label}
      <ArrowUpRight className="icon" aria-hidden />
    </button>
  );
}
