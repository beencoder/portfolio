import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/about.module.scss';
import SectionTitle from '@/components/ui/section-title';

export default function AboutSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`}>About Me</SectionTitle>

        <div className={styles.temp}>
          <div className={styles['img-area']}></div>
          <div className={styles['content-area']}></div>
        </div>
      </div>
    </section>
  );
}
