import Image from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/components/work-block.module.scss';
import { LinkButton } from './button';

export default function WorkBlock({ workItem, isActive, isMobile, onActivate, onDeactivate, onToggle }) {
  const panelId = `work-${workItem.id}-panel`;

  // pages 버튼 클릭 시
  function handleViewBtnClick(e, href) {
    e.stopPropagation();
    console.log(href);
  }

  const eventProps = isMobile
    ? {}
    : {
        onMouseEnter: onActivate,
        onMouseLeave: onDeactivate,
        onFocus: onActivate,
        onBlur: onDeactivate,
      };

  return (
    <li className={clsx(styles['work-item'], { [styles['is-active']]: isActive })} {...eventProps}>
      <header className={styles.header}>
        {isMobile ? (
          <button
            type="button"
            onClick={isMobile ? onToggle : undefined}
            aria-expanded={isActive ? 'true' : 'false'}
            aria-controls={panelId}>
            <span className={styles.number}>{String(workItem.id).padStart(2, '0')}</span>
            <h3 className={styles.title}>
              <span>{workItem.title}</span>
            </h3>
          </button>
        ) : (
          <>
            <span className={styles.number}>{String(workItem.id).padStart(2, '0')}</span>
            <h3 className={styles.title}>
              <span>{workItem.title}</span>
            </h3>
          </>
        )}

        <h3 className={clsx(styles.title, styles.second)} aria-hidden="true">
          <span>
            <span>//</span>
            {workItem.title}
          </span>
        </h3>
      </header>

      <dl id={panelId} className={styles.contents}>
        <dt className="sr-only">기술 스택</dt>
        <dd>
          <ul className={styles['stack-list']}>
            {workItem.stack.map((stack, index) => (
              <li key={index}>
                <span className={styles.stack}>/{stack.name}</span>
              </li>
            ))}
          </ul>
        </dd>
        <dt className="sr-only">참고 이미지</dt>
        <dd>
          <div className={styles['img-wrap']}>
            <Image src={workItem.thumb} alt={`${workItem.title} 화면`} width={321} height={563} />
          </div>
        </dd>
      </dl>

      <p className={styles.summary}>{workItem.summary}</p>

      <div className={styles.link}>
        <LinkButton href={workItem.href} label="View Case" onClick={(e) => handleViewBtnClick(e, workItem.href)} />
      </div>
    </li>
  );
}
