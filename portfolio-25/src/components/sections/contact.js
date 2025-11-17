import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/contact.module.scss';
import SectionTitle from '@/components/ui/section-title';

export default function ContactSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`}>Contact</SectionTitle>
        <div>
          <a href="https://github.com/you" target="_blank">
            GitHub
          </a>
          <span>·</span>
          <a href="https://linkedin.com/in/you" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
