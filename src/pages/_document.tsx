import { Head, Html, Main, NextScript } from 'next/document';

const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chainide.com/';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "${websiteUrl}",
            "email": "contact@whitematrix.io",
            "name": "ChainIDE",
            "logo": "${websiteUrl}/next.svg"
          }
            `
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
