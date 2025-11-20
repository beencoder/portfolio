import Link from 'next/link';

import styles from '@/styles/components/logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles['image-wrap']}>
        <img src="/images/common/logo.png" alt="다빈의 포트폴리오 사이트 로고" />
      </div>
      <div className={styles['text-wrap']}>
        <div className={styles['text-inner']}>
          <span className={styles.text}>DaBeeneee</span>
        </div>
      </div>
    </Link>
  );
}
