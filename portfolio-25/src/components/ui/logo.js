import Link from 'next/link';

import styles from '@/styles/components/logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      dakong.dev
    </Link>
  );
}
