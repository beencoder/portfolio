import styles from '@/styles/layout/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">© {new Date().getFullYear()} dakong</div>
    </footer>
  );
}
