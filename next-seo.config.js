export default {
  defaultTitle: 'ChainIDE-Multi Blockchain IDE',
  themeColor: '#ffffff',
  twitter: {
    site: '@ChainIDE',
    cardType: 'summary',
    handle: '@ChainIDE'
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'IDE'
    },
    {
      name: 'image',
      content: `${process.env.NEXT_PUBLIC_SITE_URL}/next.svg`
    },
    {
      property: 'dc:creator',
      content: 'ChainIDE'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'robots',
      href: '/robots.txt'
    },
    {
      rel: 'sitemap',
      type: 'application/xml',
      href: '/sitemap/sitemap-index.xml'
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.ico',
      sizes: '76x76'
    }
  ]
};
