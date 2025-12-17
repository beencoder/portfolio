import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { projectData } from '@/data/workData';
import styles from '@/styles/pages/works/detail.module.scss';

const TYPE_TITLES = {
  preview: 'App Store Preview',
  landing: 'Landing Page',
  'landing-mo': 'Mobile Landing Page',
};

export default function projectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData.find((item) => item.id === id);

  // 이미지 type별로 그룹화
  const groupedImages =
    project?.images?.reduce((acc, img) => {
      if (!img.src) return acc;

      const type = img.type || 'others';

      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(img);
      return acc;
    }, {}) || {};

  if (!id) return <div>Loading...</div>;
  if (!project) return <div>존재하지 않는 프로젝트입니다.</div>;

  return (
    <section className={clsx('section', styles.detail)} aria-labelledby="project-title">
      <div className={clsx('container', styles.layout)}>
        <header className={styles.header}>
          <div className={styles['thumb-wrap']}>
            <Image src={project.thumbnail} alt={project.title} width={0} height={0} sizes="100vw" priority />
          </div>

          <div className={styles['title-wrap']}>
            <h1 id="project-title" className={styles.title}>
              {project.title}
            </h1>
            <div className={styles.divider} aria-hidden="true"></div>
          </div>

          <dl className={styles['info-wrap']}>
            <dt className={styles.label}>Category</dt>
            <dd className={styles.value}>{project.category}</dd>

            <dt className={styles.label}>Summary</dt>
            <dd className={styles.value}>{project.summary}</dd>

            <dt className={styles.label}>Date</dt>
            <dd className={styles.value}>{project.date}</dd>

            <dt className={styles.label}>Roles</dt>
            <dd className={styles.value}>{project.roles.join(', ')}</dd>

            <dt className={styles.label}>Tech Stack</dt>
            <dd className={clsx(styles.value, styles['is-single'])}>{project.techStack.join(', ')}</dd>

            <dt className={styles.label}>Site</dt>
            <dd className={styles.value}>
              <Link
                href={project.url.site}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                title="새 창으로 열림">
                {project.url.site}
              </Link>
            </dd>

            <dt className={styles.label}>Github</dt>
            <dd className={styles.value}>
              <Link
                href={project.url.site}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                title="새 창으로 열림">
                {project.url.github}
              </Link>
            </dd>
          </dl>

          <div className={styles.divider} aria-hidden="true"></div>
        </header>

        <div className={styles.contents}>
          <div className={styles.description}>
            <span className={styles.label}>Description</span>
            <p className={styles.value}>{project.description}</p>
          </div>
          <div className={styles.divider} aria-hidden="true"></div>

          {Object.entries(groupedImages).map(([type, imageList]) => (
            <section key={type} className={styles.content}>
              <div className={styles['heading-wrap']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" aria-hidden="true">
                  <path d="M8,0h16v20c0,4.42-3.58,8-8,8h-8c-4.42,0-8-3.58-8-8v-12C0,3.58,3.58,0,8,0Z"></path>
                </svg>
                <h2 className={styles.heading}>{TYPE_TITLES[type] || type.replace('-', ' ')}</h2>
              </div>

              <div className={clsx(styles['img-list'], { [styles['is-double']]: type === 'landing-mo' })}>
                {imageList.map((img, index) => (
                  <figure key={`${type}-${index}`} className={styles['img-wrap']}>
                    <Image src={img.src} alt={img.alt || ''} width={0} height={0} sizes="100vw" />
                    {img.figcaption && <figcaption>{img.figcaption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
