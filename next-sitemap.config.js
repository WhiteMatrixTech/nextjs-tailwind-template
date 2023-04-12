/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://chainide.com',
  generateRobotsTxt: true // (optional)
  // ...other options
};
