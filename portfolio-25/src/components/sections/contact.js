import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/contact.module.scss';

export default function ContactSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">
          Contact
        </h2>
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
