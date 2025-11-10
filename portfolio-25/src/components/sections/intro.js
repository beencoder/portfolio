import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/intro.module.scss';

export default function IntroSection({ id }) {
  return (
    <section id={id} className={`section ${styles.intro}`} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className={styles.center}>
        <h1 id={`${id}-title`} className={`${styles.title} ${styles.appear}`}>
          Detail-driven Web Publisher
        </h1>
        <p className={`${styles.sub} ${styles.appearDelay}`}>Precision meets warmth in every line of code.</p>
        <div>
          <a href="/resume.pdf" className={styles.cta} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="#works" className={styles.cta}>
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
