/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://your-portfolio.com', // 수정
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  },
};
