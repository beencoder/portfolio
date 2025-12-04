import Link from 'next/link';

import styles from '@/styles/components/project-block.module.scss';

export default function ProjectBlock({ projectItem, isMobile, onActivate, onDeactivate }) {
  function handleLinkClick(e, href) {
    e.stopPropagation();
    console.log(href);
  }

  const eventProps = isMobile
    ? {}
    : {
        onMouseEnter: (e) => onActivate(projectItem, e),
        onMouseLeave: () => onDeactivate(),
        onFocus: (e) => onActivate(projectItem, e),
        onBlur: () => onDeactivate(),
      };

  return (
    <li className={styles['project-item']} {...eventProps}>
      <Link href={`${projectItem.href}`} onClick={(e) => handleLinkClick(e, projectItem.href)}>
        <div className={styles.inner}>
          <div className={styles['title-wrap']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28">
              <path d="M8,0h16v20c0,4.42-3.58,8-8,8h-8c-4.42,0-8-3.58-8-8v-12C0,3.58,3.58,0,8,0Z"></path>
            </svg>
            <h2 className={styles.title}>{projectItem.title}</h2>
          </div>
          <span className={styles.type}>{projectItem.type}</span>
        </div>
      </Link>
    </li>
  );
}
