const path = require('path');

module.exports = {
  localePath: path.resolve('./src/i18n'),
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'zh-CN'],
    localeDetection: false
  }
};
