import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { workData } from '@/data/workData';
import styles from '@/styles/pages/works/detail.module.scss';

const TYPE_TITLES = {
  preview: 'App Store Preview',
  overview: 'Overview',
  'overview-mo': 'Mobile Overview',
};

export default function WorkDetail({ work }) {
  if (!work) return <div>존재하지 않는 프로젝트입니다.</div>;

  const { detail } = work;

  // 이미지 type별로 그룹화
  const groupedImages =
    work?.images?.reduce((acc, img) => {
      if (!img.src) return acc;

      const type = img.type || 'others';

      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(img);
      return acc;
    }, {}) || {};

  return (
    <section className={clsx('section', styles.detail)} aria-labelledby="work-title">
      <div className={clsx('container', styles.layout)}>
        <header className={styles.header}>
          <div className={clsx(styles['thumb-wrap'], styles['has-ratio'])}>
            <Image
              src={work.thumbnail}
              alt={`${work.title[0]}${work.title[1] ? ` ${work.title[1]}` : ''} 썸네일`}
              width={1200}
              height={700}
              priority
            />
          </div>

          <div className={styles['title-wrap']}>
            <h1 id="work-title" className={styles.title}>
              {work.title[0]} {work.title[1] ? work.title[1] : ''}
            </h1>
            <div className={styles.divider} aria-hidden="true"></div>
          </div>

          <dl className={styles['info-wrap']}>
            <dt className={styles.label}>Category</dt>
            <dd className={styles.value}>{work.category}</dd>

            <dt className={styles.label}>Summary</dt>
            <dd className={clsx(styles.value, styles['is-single'])}>{work.summary}</dd>

            <dt className={styles.label}>Date</dt>
            <dd className={styles.value}>{work.date}</dd>

            <dt className={styles.label}>Roles</dt>
            <dd className={styles.value}>{work.roles.join(', ')}</dd>

            <dt className={styles.label}>Tech Stack</dt>
            <dd
              className={clsx(styles.value, {
                [styles['is-single']]: !work.url.site,
              })}>
              {work.techStack.join(', ')}
            </dd>

            {work.url.site && (
              <>
                <dt className={styles.label}>Site</dt>
                <dd className={styles.value}>
                  <Link
                    href={work.url.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    title="새 창으로 열림">
                    {work.url.site}
                  </Link>
                </dd>
              </>
            )}
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

          {Object.entries(groupedImages).map(([type, imageList]) => (
            <section key={type} className={styles.content}>
              <div className={styles['heading-wrap']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" aria-hidden="true">
                  <path d="M8,0h16v20c0,4.42-3.58,8-8,8h-8c-4.42,0-8-3.58-8-8v-12C0,3.58,3.58,0,8,0Z"></path>
                </svg>
                <h2 className={styles.heading}>{TYPE_TITLES[type] || type.replace('-', ' ')}</h2>
              </div>

              <div className={clsx(styles['img-list'], { [styles['is-double']]: type === 'overview-mo' })}>
                {imageList.map((img, index) => (
                  <figure key={`${type}-${index}`} className={styles['img-wrap']}>
                    <Image
                      src={img.src}
                      alt={img.alt || ''}
                      width={1200}
                      height={3000}
                      // sizes="(max-width: 768px) 100vw, 1200px"
                    />
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

export async function getStaticPaths() {
  const paths = workData.map((work) => ({
    params: { id: work.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const work = workData.find((item) => item.id === params.id);

  if (!work) {
    return { notFound: true };
  }

  return {
    props: {
      title: `${work.title[0]}${work.title[1] ? ` ${work.title[1]}` : ''} 프로젝트 상세`,
      description: `${work.title[0]} 프로젝트의 UI 개발 상세 내역입니다. 기술 스택: ${work.techStack.join(', ')}`,
      url: `/work/${params.id}`,
      ogImage: work.thumbnail,
      work: work,
    },
  };
}
