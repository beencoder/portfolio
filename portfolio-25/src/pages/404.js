import Link from 'next/link';
import clsx from 'clsx';
import { Ghost, HouseHeart } from 'lucide-react';

import styles from '@/styles/pages/404.module.scss';

export default function Custom404() {
  return (
    <section className={clsx('section', styles.notfound)} aria-labelledby="notfound-title">
      <div className={styles.container}>
        <h1 id="notfound-title" className={styles['error-title']}>
          404
        </h1>

        <div className={styles.content}>
          <Ghost size={100} strokeWidth={1} className={styles.icon} aria-hidden="true" />
          <Ghost size={100} strokeWidth={1} className={styles.icon} aria-hidden="true" />

          <h2 className={styles.title}>길을 잃으셨나요? 👻</h2>
          <div className={styles.description}>
            <p>죄송하지만 찾으시는 페이지는 여기에 없어요.</p>
            <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
          </div>

          <Link href="/" className={styles['home-btn']}>
            <HouseHeart className="text-icon" aria-hidden="true" />
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
