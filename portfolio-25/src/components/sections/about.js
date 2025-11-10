import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/about.module.scss';

export default function AboutSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">
          About Me
        </h2>
        <p>
          접근성과 폼 UX 중심으로 React/Next로 실사용 흐름을 만듭니다. <br />
          사용자 경험과 접근성을 고려한 퍼블리싱을 지향합니다. 시멘틱 마크업, 반응형, 크로스브라우징, 컴포넌트화에
          강점이 있습니다.
        </p>
      </div>
    </section>
  );
}
