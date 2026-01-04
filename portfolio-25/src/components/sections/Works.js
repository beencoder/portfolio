import { useEffect, useState } from 'react';
import clsx from 'clsx';

import useMedia from '@/hooks/useMedia';
import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/works/works.module.scss';
import SectionTitle from '../ui/SectionTitle';
import WorkBlock from '../ui/works/WorkBlock';
import ProjectBlock from '../ui/works/ProjectBlock';
import ProjectPreview from '../ui/works/ProjectPreview';
import { workData, projectData } from '@/data/workData';

export default function WorksSection({ id }) {
  const [activeWorkId, setActiveWorkId] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const isMobile = useMedia('(max-width: 768px)');

  const handleWorkActivate = (id) => setActiveWorkId(id);
  const handleWorkDeactivate = () => setActiveWorkId(null);
  const handleWorkToggle = (id) => {
    setActiveWorkId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!isMobile) {
      setActiveWorkId(null);
    }
  }, [isMobile]);

  /* 프로젝트 프리뷰 관련 */
  function getEventPosition(e) {
    if (e?.clientX != null && e?.clientY != null) {
      return { x: e.clientX, y: e.clientY };
    }

    if (e?.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    return previewPos;
  }

  function handleProjectActivate(projectItem, event) {
    if (isMobile) return;
    const pos = getEventPosition(event);
    setHoveredProject(projectItem);
    setPreviewPos(pos);
  }

  function handleProjectDeactivate() {
    if (isMobile) return;
    setHoveredProject(null);
  }

  useEffect(() => {
    if (!hoveredProject || isMobile) return;

    function handlePointerMove(e) {
      setPreviewPos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [hoveredProject, isMobile]);

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      {/* works */}
      <div className="container">
        <SectionTitle id={`${id}-title`} className={common['section-title']}>
          Works
        </SectionTitle>
      </div>

      <ul className={styles['work-list']}>
        {workData.map((work, index) => (
          <WorkBlock
            key={work.id}
            workItem={work}
            index={index}
            isActive={activeWorkId === work.id}
            isMobile={isMobile}
            onActivate={() => handleWorkActivate(work.id)}
            onDeactivate={handleWorkDeactivate}
            onToggle={() => handleWorkToggle(work.id)}
          />
        ))}
      </ul>

      {/* projects */}
      <div className="container">
        <SectionTitle id={`${id}-title`} className={clsx(common['section-title'], 'text-left')}>
          Projects
        </SectionTitle>

        <ul className={styles['project-list']}>
          <div className={styles.divider} aria-hidden="true"></div>
          {projectData.map((project) => (
            <ProjectBlock
              key={project.id}
              projectItem={project}
              isMobile={isMobile}
              onActivate={(e) => handleProjectActivate(project, e)}
              onDeactivate={handleProjectDeactivate}
              onMove={(e) => handleProjectMove(project, e)}
            />
          ))}
        </ul>
      </div>

      {/* 프로젝트 프리뷰 */}
      <ProjectPreview project={hoveredProject} position={previewPos} isVisible={!!hoveredProject} />
    </section>
  );
}
