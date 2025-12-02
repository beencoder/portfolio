import { useState } from 'react';
import clsx from 'clsx';

import useMedia from '@/hooks/useMedia';
import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/works/works.module.scss';
import SectionTitle from '@/components/ui/section-title';
import WorkBlock from '@/components/ui/work-block';

const workItems = [
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
const projectItems = [
  {
    id: 'landing-renewal',
    title: '기업 랜딩 리뉴얼',
    summary: '접근성 기준 준수 · CLS 0.02 · LCP 1.8s',
    thumb: '/images/project1.png',
    demo: 'https://example.com',
    github: 'https://github.com/you/project',
  },
];

export default function WorksSection({ id }) {
  const [activeId, setActiveId] = useState(null);
  const isMobile = useMedia('(max-width: 767px)');

  const handleActivate = (id) => setActiveId(id);
  const handleDeactivate = () => setActiveId(null);
  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      {/* works */}
      <div className="container">
        <SectionTitle id={`${id}-title`} className={common['section-title']}>
          Works
        </SectionTitle>
      </div>

      <ul className={styles['work-list']}>
        {workItems.map((work) => (
          <WorkBlock
            key={work.id}
            workItem={work}
            isActive={activeId === work.id}
            isMobile={isMobile}
            onActivate={() => handleActivate(work.id)}
            onDeactivate={handleDeactivate}
            onToggle={() => handleToggle(work.id)}
          />
        ))}
      </ul>

      {/* projects */}
      <div className="container">
        <SectionTitle id={`${id}-title`} className={clsx(common['section-title'], common['title-md'])}>
          Projects
        </SectionTitle>
      </div>

      <ul className={styles['project-list']}>
        {/* {projectItems.map((project) => (
            <ProjectCard key={project.id} projectItem={project} />
          ))} */}
      </ul>
    </section>
  );
}
