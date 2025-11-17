import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/works/works.module.scss';
import SectionTitle from '@/components/ui/section-title';
import ProjectCard from '@/components/ui/project-card';

const projectItems = [
  {
    id: 'landing-renewal',
    title: '기업 랜딩 리뉴얼',
    summary: '접근성 기준 준수 · CLS 0.02 · LCP 1.8s',
    thumb: '/images/project1.png',
    demo: 'https://example.com',
    github: 'https://github.com/you/project',
  },
  {
    id: 'email-template',
    title: '반응형 이메일 템플릿',
    summary: '미디어쿼리 없이 유연 레이아웃 · 주요 클라이언트 호환',
    thumb: '/images/project2.png',
  },
];

export default function WorksSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`}>Works</SectionTitle>

        <div>
          {/* {projectItems.map((project) => (
            <ProjectCard key={project.id} projectItem={project} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
