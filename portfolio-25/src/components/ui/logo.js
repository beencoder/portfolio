import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/components/logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles['image-wrap']}>
        <img src="/images/common/logo.png" alt="다빈의 포트폴리오 사이트 로고" />
      </div>
      DakongTree
    </Link>
  );
}
