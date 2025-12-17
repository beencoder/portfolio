import Image from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/components/work-block.module.scss';
import { LinkButton } from '../button';

export default function WorkBlock({ workItem, index, isActive, isMobile, onActivate, onDeactivate, onToggle }) {
  const panelId = `work-${workItem.id}-panel`;
  const itemNumber = String(index + 1).padStart(2, '0');

  function handleViewBtnClick(e) {
    e.stopPropagation();
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
          <button type="button" onClick={onToggle} aria-expanded={isActive ? 'true' : 'false'} aria-controls={panelId}>
            <span className={styles.number}>{itemNumber}</span>
            <h2 className={styles.title}>
              <span>{workItem.title}</span>
            </h2>
          </button>
        ) : (
          <>
            <span className={styles.number}>{itemNumber}</span>
            <h2 className={styles.title}>
              <span>{workItem.title}</span>
            </h2>
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
          <ul className={styles['tech-list']}>
            {workItem.techStack.map((tech, index) => (
              <li key={index}>
                <span className={styles.tech}>/{tech}</span>
              </li>
            ))}
          </ul>
        </dd>
        <dt className="sr-only">참고 이미지</dt>
        <dd>
          <div className={styles['img-wrap']}>
            <Image src={workItem.thumbnail} alt={`${workItem.title} 화면`} width={321} height={563} />
          </div>
        </dd>
      </dl>

      <p className={styles.summary}>{workItem.summary}</p>

      <div className={styles.link}>
        <LinkButton
          href={workItem.url.detail}
          label="View Case"
          onClick={(e) => handleViewBtnClick(e, workItem.url.detail)}
          tabIndex={isMobile && !isActive ? -1 : 0}
          aria-hidden={isMobile && !isActive ? true : undefined}
        />
      </div>
    </li>
  );
}
