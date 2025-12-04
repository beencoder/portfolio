import { useEffect, useState } from 'react';
import clsx from 'clsx';

import useMedia from '@/hooks/useMedia';
import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/works/works.module.scss';
import SectionTitle from '../ui/section-title';
import WorkBlock from '../ui/work-block';
import ProjectBlock from '../ui/project-block';
import ProjectPreview from '../ui/project-preview';

const WORK_ITEMS = [
  {
    id: 0,
    title: '트래블로버',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Sass' }, { name: 'JavaScript' }, { name: 'Jquery' }],
    thumb: '/images/works/doazoom/doazoom-intro.png',
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
    href: '/travelover',
  },
  {
    id: 1,
    title: 'JSS Corporation',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Sass' }, { name: 'JavaScript' }, { name: 'Jquery' }],
    thumb: '/images/works/doazoom/doazoom-intro.png',
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
    href: '/jss-corporation',
  },
  {
    id: 2,
    title: 'BNK부산은행',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Sass' }, { name: 'JavaScript' }, { name: 'Jquery' }],
    thumb: '/images/works/doazoom/doazoom-intro.png',
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
    href: '/busan-bank',
  },
  {
    id: 3,
    title: 'NH농협은행',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' }, { name: 'Jquery' }],
    thumb: '/images/works/doazoom/doazoom-intro.png',
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
    href: '/nh-bank',
  },
  {
    id: 4,
    title: 'DoazoomT',
    stack: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'Vue.js' },
      { name: 'Nuxt' },
      { name: 'React Native' },
      { name: 'TypeScript' },
    ],
    thumb: '/images/works/doazoom/doazoom-intro.png',
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
    href: '/doazoom',
  },
];
const PROJECT_ITEMS = [
  {
    id: 0,
    title: 'Portfolio',
    type: 'Main / Flagship',
    href: '/example',
    previewImage: '/images/projects/project-thumb-1.png',
    previewTitle: 'My personal portfolio website',
  },
  {
    id: 1,
    title: 'Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
  {
    id: 2,
    title: 'Shared Recipe Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
  {
    id: 3,
    title: 'Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
  {
    id: 4,
    title: 'Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
  {
    id: 5,
    title: 'Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
  {
    id: 6,
    title: 'Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
  {
    id: 7,
    title: 'Shared Recipe',
    type: 'Side Project',
    href: '/example',
    previewImage: '/images/projects/doazoom-intro.png',
    previewTitle: 'Shared recipe website',
  },
];

export default function WorksSection({ id }) {
  const [activeWorkId, setActiveWorkId] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const isMobile = useMedia('(max-width: 767px)');

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
        {WORK_ITEMS.map((work) => (
          <WorkBlock
            key={work.id}
            workItem={work}
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
          <div className={styles['list-divider']}></div>
          {PROJECT_ITEMS.map((project) => (
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
