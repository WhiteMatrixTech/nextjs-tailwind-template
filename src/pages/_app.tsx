import '@/styles/globals.css';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';

import { Layout } from '@/components/Layout';

import seoConfig from '../../next-seo.config';

const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chainide.com/';

function MyApp({ Component, pageProps }: AppProps) {
  const { t, i18n } = useTranslation('seo');
  return (
    <>
      <DefaultSeo
        {...seoConfig}
        title={`${t('website.title')}`}
        description={`${t('website.description')}`}
        canonical={websiteUrl}
        openGraph={{
          type: 'website',
          siteName: 'ChainIDE',
          locale: i18n.language,
          url: `${websiteUrl}/`,
          images: [
            {
              url: `${websiteUrl}/next.svg`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt'
            }
          ]
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default appWithTranslation(MyApp);
