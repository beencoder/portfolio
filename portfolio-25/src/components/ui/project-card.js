import Link from 'next/link';

import styles from '@/styles/components/project-card.module.scss';

export default function Card({ projectItem }) {
  return (
    <article>
      <img src={projectItem.thumb} alt="" />
      <div>
        <h3>{projectItem.title}</h3>
        <p>{projectItem.summary}</p>
        <div>
          {projectItem.demo && (
            <a href={projectItem.demo} target="_blank">
              Demo
            </a>
          )}
          {projectItem.github && (
            <a href={projectItem.github} target="_blank">
              GitHub
            </a>
          )}
          <Link href={`/projects/${projectItem.id}`}>Case study</Link>
        </div>
      </div>
    </article>
  );
}
