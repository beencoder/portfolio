import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/skills.module.scss';

const skills = [
  { name: 'HTML', desc: 'Semantic markup', icon: '/images/skill-html.svg' },
  { name: 'CSS', desc: 'Responsive layouts', icon: '/images/skill-css.svg' },
  { name: 'JavaScript', desc: 'ES6+ / DOM', icon: '/images/skill-js.svg' },
  { name: 'React', desc: 'Component-based UI', icon: '/images/skill-react.svg' },
  { name: 'Next.js', desc: 'SSR/SSG optimization', icon: '/images/skill-next.svg' },
  { name: 'Figma', desc: 'UI collaboration', icon: '/images/skill-figma.svg' },
];

export default function SkillsSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">
          Skills & Tools
        </h2>
        <ul>
          {/* {skills.map((skill) => (
            <li key={skill.name} title={skill.desc}>
              <div>
                <img src={skill.icon} alt="" />
                <div>
                  <p>{skill.name}</p>
                  <p>{skill.desc}</p>
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </section>
  );
}
