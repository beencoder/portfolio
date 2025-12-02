import Link from 'next/link';

import styles from '@/styles/components/logo.module.scss';
import LogoIcon from './logo-icon';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles['image-wrap']}>
        <LogoIcon />
      </div>
      <div className={styles['text-wrap']}>
        <div className={styles['text-inner']}>
          <span className={styles.text}>DaBeeneee</span>
        </div>
      </div>
    </Link>
  );
}
