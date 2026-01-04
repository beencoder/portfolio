/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://been-portfolio-2025.vercel.app',
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
