import Head from 'next/head';

export default function Seo({ title, description, ogImage, url }) {
  const siteName = '2025 김다빈 포트폴리오';
  const defaultTitle = 'UI Developer 김다빈';
  const defaultDescription =
    'UI 개발자 김다빈의 포트폴리오입니다. 마크업, CSS, GSAP, Next.js를 활용한 프로젝트를 소개합니다.';
  const defaultOgImage = '/og-image.png'; // 수정
  const siteUrl = 'https://demo.com'; // 수정

  const seoTitle = title ? `${title} | ${siteName}` : `${defaultTitle} | ${siteName}`;
  const seoDescription = description || defaultDescription;
  const seoImage = `${siteUrl}${ogImage || defaultOgImage}`;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" key="robots" />
      <title key="title">{seoTitle}</title>
      <meta name="description" content={seoDescription} key="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <link rel="canonical" href={seoUrl} key="canonical" />
      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={seoTitle} key="og:title" />
      <meta property="og:description" content={seoDescription} key="og:description" />
      <meta property="og:image" content={seoImage} key="og:image" />
      <meta property="og:url" content={seoUrl} key="og:url" />
      <meta property="og:site_name" content="김다빈 포트폴리오" key="og:site_name" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={seoTitle} key="twitter:title" />
      <meta name="twitter:description" content={seoDescription} key="twitter:description" />
      <meta name="twitter:image" content={seoImage} key="twitter:image" />
      <link rel="icon" href="/favicon.ico" key="favicon" /> {/* 수정 */}
    </Head>
  );
}
