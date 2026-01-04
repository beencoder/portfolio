import { useState } from 'react';
import clsx from 'clsx';
import { Mail, MailPlus, Github, Linkedin, FileText } from 'lucide-react';

import styles from '@/styles/pages/home/contact.module.scss';
import SectionTitle from '../ui/SectionTitle';
import { Button, LinkButton } from '../ui/Button';

export default function ContactSection({ id }) {
  const [isCopied, setIsCopied] = useState(false);
  const email = 'dabeen888@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <section id={id} className={clsx('section', styles.contact)} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`} className={styles.title}>
          Let's Talk
        </SectionTitle>

        <div className={styles.contents}>
          <div className={styles['info-area']}>
            <h2 className={styles.headline}>
              Let’s build a solid <strong>experience, </strong>starting from the <strong>structure.</strong>
            </h2>
            <div className={styles.description}>
              <p>사용자 경험을 우선시하는 UI 개발자, 김다빈입니다.</p>
              <p>새로운 기회와 협업 제안은 언제나 환영합니다.</p>
            </div>

            {/* <div className={styles['email-wrap']} data-clickable="true" onClick={handleCopyEmail}>
              <span className={styles.email}>{email}</span>
              <button className={styles['copy-btn']} aria-label="이메일 복사">
                {isCopied ? <Check className={styles.successIcon} /> : <Copy />}
                <span className={styles.tooltip}>{isCopied ? 'Copied!' : 'Click to Copy'}</span>
              </button>
            </div> */}

            <div className={styles.links}>
              <LinkButton
                href="https://github.com/beencoder"
                label="GitHub"
                size="md"
                markIcon={<Github className="text-icon" aria-hidden="true" />}
                target="_blank"
                rel="noopener noreferrer"
              />
              {/* <LinkButton
                href="https://linkedin.com/in/your-id"
                label="LinkedIn"
                size="md"
                markIcon={<Linkedin className="text-icon" aria-hidden="true" />}
                target="_blank"
                rel="noopener noreferrer"
              /> */}
              <LinkButton
                href="/resume.pdf"
                label="Resume"
                size="md"
                markIcon={<FileText className="text-icon" aria-hidden="true" />}
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                onClick={handleCopyEmail}
                label={isCopied ? 'Copied!' : 'Email'}
                size="md"
                isActive={isCopied ? true : false}
                markIcon={
                  isCopied ? (
                    <MailPlus className={clsx('text-icon', styles.success)} aria-hidden="true" />
                  ) : (
                    <Mail className="text-icon" aria-hidden="true" />
                  )
                }
                className={clsx(isCopied && styles.copied)}
              />
            </div>
          </div>

          <div className={styles['action-area']}>
            <div className={styles.card}>
              <h3 className={styles['card-title']}>Guestbook</h3>
              <div className={styles['card-text']}>
                <p>
                  여기까지 봐주셔서 <strong>감사합니다!</strong> 👏
                </p>
                <p>
                  그냥 가시면 저... <strong>조금 아쉬울지도 몰라요. 🥹</strong>
                </p>
                <p>
                  <strong>따끔한 조언도, 가벼운 인사</strong>도 뭐든 좋아요.
                </p>
                <p>겸허히 듣고 쑥쑥 자라겠습니다. 🌱💙</p>
              </div>
              <LinkButton href="/guestbook" label="Say Hi!" size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
