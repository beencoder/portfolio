import clsx from 'clsx';

import WavyLabel from './wavy-label';
import styles from '@/styles/components/wavy-link.module.scss';

export default function WavyButton({
  label = '',
  type = 'button',
  brackets = true,
  isActive = false,
  className,
  ...restProps
}) {
  return (
    <button type={type} className={clsx(styles.link, isActive && styles['is-active'], className)} {...restProps}>
      <WavyLabel label={label} brackets={brackets} srOnlyText={label} />
    </button>
  );
}
