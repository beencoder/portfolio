export default function IntroSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title" style={{ fontSize: 'var(--fs-h1)' }}>
          운영형 UI에 강한 웹퍼블+프론트엔드, 다콩
        </h2>
        <p>접근성과 크로스브라우징에 강한 퍼블리싱 · 반응형 최적화</p>
        <div>
          <a href="/resume.pdf">Resume</a>
          <a href="#works">View Work</a>
        </div>
      </div>
    </section>
  );
}
