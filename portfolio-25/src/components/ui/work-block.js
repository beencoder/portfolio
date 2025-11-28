import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/components/work-block.module.scss';

export default function WorkBlock({ workItem }) {
  return (
    <article>
      <header>
        <span className={styles.number}>{String(workItem.id).padStart(2, '0')}</span>
        <h3 className={styles.title}>{workItem.title}</h3>
        <h3 className={clsx(styles.title, styles.second)} aria-hidden="true">
          {workItem.title}
        </h3>
      </header>

      <div className={styles.contents}>
        <dl>
          <dt className="sr-only">기술 스택</dt>
          <dd>
            <ul className={styles['stack-list']}>
              {workItem.stack.map((stack, index) => (
                <li key={index}>
                  <span className={styles.stack}>{stack.name}</span>
                </li>
              ))}
            </ul>
          </dd>
          <dt className="sr-only">참고 이미지</dt>
          <dd>
            <div className={styles['img-wrap']}>
              {workItem.thumb.map((img, index) => (
                <Image
                  key={img.url}
                  src={img.url}
                  alt={`${workItem.title} 화면${workItem.thumb.length > 1 ? `${index + 1}` : ''}`}
                  width={321}
                  height={563}
                />
              ))}
            </div>
          </dd>
          ₩
        </dl>
      </div>

      <p className={styles.text}>{workItem.summary}</p>
    </article>
  );
}
