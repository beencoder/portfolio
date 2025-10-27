import ProjectCard from './ProjectCard';

const projects = [
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

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
