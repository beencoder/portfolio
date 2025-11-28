import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/works/works.module.scss';
import SectionTitle from '@/components/ui/section-title';
import WorkBlock from '@/components/ui/work-block';

const workItems = [
  {
    id: 0,
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
    thumb: [{ url: '/images/works/doazoom/doazoom-pc.png' }, { url: '/images/works/doazoom/doazoom-app-1.png' }],
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
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
    thumb: [{ url: '/images/works/doazoom/doazoom-pc.png' }, { url: '/images/works/doazoom/doazoom-app-1.png' }],
    summary:
      '안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 안녕하심까 하이 하이 하이 하이 하이',
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
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`} className={common['section-title']}>
          Works
        </SectionTitle>

        <div className={styles['projects-wrap']}></div>

        {/* <div>
          {projectItems.map((project) => (
            <ProjectCard key={project.id} projectItem={project} />
          ))}
        </div> */}
      </div>

      <div className={styles['works-wrap']}>
        <ul className={styles['work-list']}>
          {workItems.map((work) => (
            <li key={work.id}>
              <WorkBlock workItem={work} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
