import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/components/project-preview.module.scss';

export default function ProjectPreview({ project, position, isVisible }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const previewRef = useRef(null);

  const root = typeof document !== 'undefined' ? document.getElementById('modal-root') || document.body : null;

  useEffect(() => {
    if (!project || !isVisible) {
      setIsActive(false);
      return;
    }

    setCurrentProject(project);
    setIsMounted(true);

    const id = requestAnimationFrame(() => {
      setIsActive(true);
    });

    return () => cancelAnimationFrame(id);
  }, [project, isVisible]);

  if (!root || !isMounted || !currentProject) return null;

  const offsetX = 24;
  const offsetY = 24;

  const style = {
    left: `${position.x + offsetX}px`,
    top: `${position.y + offsetY}px`,
  };

  const handleTransitionEnd = (e) => {
    // 자기 자신 transition만 체크
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'opacity') return;

    // 비활성 상태에서 opacity 트랜지션 끝났으면 언마운트
    if (!isActive) {
      setIsMounted(false);
      setCurrentProject(null);
    }
  };

  const previewNode = (
    <div
      ref={previewRef}
      className={clsx(styles.preview, { [styles['is-active']]: isActive })}
      style={style}
      aria-hidden="true"
      onTransitionEnd={handleTransitionEnd}>
      <div className={clsx(styles.inner, styles['inner-anim'])} key={currentProject.id}>
        {currentProject.thumbnail && (
          <div className={styles['img-wrap']}>
            <Image src={currentProject.thumbnail} alt="" fill sizes="220px" />
          </div>
        )}

        <div className={styles['text-wrap']}>
          <p className={styles['project-title']}>{currentProject.summary || currentProject.title}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(previewNode, root);
}
