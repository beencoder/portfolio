import clsx from 'clsx';

import styles from '@/styles/layout/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={clsx('container', styles.layout)}>
        <p>© {new Date().getFullYear()} Dabeen. All rights reserved.</p>
        <p className={styles.description}>Designed & Developed by Dabeen</p>
      </div>
    </footer>
  );
}
