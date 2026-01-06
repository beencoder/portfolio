import { Fragment, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import gsap from 'gsap';

import { projectData } from '@/data/workData';
import styles from '@/styles/pages/works/detail.module.scss';
import Loading from '@/components/ui/Loading';

export default function projectDetail({ project }) {
  const headerRef = useRef(null);

  const startPageAnimation = () => {
    if (!headerRef.current) return;

    gsap.to(headerRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  };

  if (!project) return <div>존재하지 않는 프로젝트입니다.</div>;
  const { detail } = project;

  // 이미지 Reveal
  const revealImage = (e) => {
    const img = e.target;

    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: true,
    });
  };

  return (
    <Fragment>
      <Loading onComplete={startPageAnimation} />

      <section className={clsx('section', styles.detail)} aria-labelledby="project-title">
        <div className={clsx('container', styles.layout)}>
          <header ref={headerRef} className={styles.header}>
            <div className={styles['thumb-wrap']}>
              <Image
                src={project.thumbnail}
                alt={`${project.title} 썸네일`}
                width={1200}
                height={700}
                priority
                onLoad={(e) => {
                  if (e.target.complete) revealImage(e);
                }}
              />
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
              <dd className={clsx(styles.value, styles['is-single'])}>{project.summary}</dd>

              <dt className={styles.label}>Roles</dt>
              <dd className={styles.value}>{project.roles.join(', ')}</dd>

              <dt className={styles.label}>Date</dt>
              <dd className={styles.value}>{project.date}</dd>

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
                  href={project.url.github}
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

              {/* 개요 */}
              {detail?.overview && (
                <div className={styles['text-section']}>
                  <h2 className={styles.title}>Project Overview</h2>
                  <p className={styles.text}>{detail.overview}</p>
                </div>
              )}

              {/* 역할 & 기여 */}
              {detail?.userRole && (
                <div className={styles['text-section']}>
                  <h2 className={styles.title}>My Role & Contribution</h2>
                  <ul className={styles.list}>
                    {detail.userRole.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 주요 기능 */}
              {detail?.features && (
                <div className={styles['text-section']}>
                  <h2 className={styles.title}>Key Features</h2>
                  <dl className={styles.list}>
                    {detail.features.map((feat) => (
                      <Fragment key={feat.title}>
                        <dt>{feat.title}</dt>
                        <dd>{feat.desc}</dd>
                      </Fragment>
                    ))}
                  </dl>
                </div>
              )}

              {/* 트러블슈팅 */}
              {detail?.troubleshooting && (
                <div className={clsx(styles['text-section'], styles['trouble-box'])}>
                  <h2 className={styles.title}>Troubleshooting</h2>
                  <div className={styles['trouble-content']}>
                    <p className={styles.text}>
                      <strong className={styles.issue}>Issue:</strong> {detail.troubleshooting.issue}
                    </p>
                    <p className={styles.text}>
                      <strong className={styles.solution}>Resolution:</strong> {detail.troubleshooting.resolution}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.divider} aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectData.find((item) => item.id === params.id);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      title: `${project.title} 프로젝트 상세`,
      description: `${project.title} 프로젝트의 UI 개발 상세 내역입니다. 기술 스택: ${project.techStack.join(', ')}`,
      url: `/project/${params.id}`,
      ogImage: project.thumbnail,
      project: project,
    },
  };
}
