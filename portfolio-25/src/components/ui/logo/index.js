import Link from 'next/link';

import styles from '@/styles/components/logo.module.scss';
import LogoIcon from './LogoIcon';

export default function Logo() {
  return (
    <Link
      href="/"
      className={styles.logo}
      aria-label="다빈이의 포트폴리오 홈으로 이동"
      data-cursor="true"
      data-cursor-label={'Home'}>
      <div className={styles['img-wrap']}>
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
