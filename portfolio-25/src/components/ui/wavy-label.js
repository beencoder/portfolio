import clsx from 'clsx';

import styles from '@/styles/components/wavy-link.module.scss';

function splitChars(label = '') {
  return Array.from(label).map((ch) => (ch === ' ' ? '\u00A0' : ch));
}

export default function WavyLabel({ label = '', brackets = true, srOnlyText }) {
  const chars = splitChars(label);

  return (
    <span className={clsx(styles['text-inner'], brackets && styles['with-brackets'])}>
      {srOnlyText ? <span className="sr-only">{srOnlyText}</span> : null}

      {/* 시각용 레이어 */}
      <span className={clsx(styles.text, styles.top)} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`t-${i}`} className={styles.char} style={{ ['--i']: i }}>
            {ch}
          </span>
        ))}
      </span>
      <span className={clsx(styles.text, styles.bottom)} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`b-${i}`} className={styles.char} style={{ ['--i']: i }}>
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
}
