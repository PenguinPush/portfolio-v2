import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="title" content="Andrew Dai's Portfolio Site" />
        <meta
          name="description"
          content="16-year-old programmer from Toronto with interests in photography, urban planning, and politics. Currently at 8x consecutive hackathon wins and counting."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andrewd.ai/" />
        <meta property="og:title" content="Andrew Dai's Portfolio Site" />
        <meta
          property="og:description"
          content="16-year-old programmer from Toronto with interests in photography, urban planning, and politics. Currently at 8x consecutive hackathon wins and counting."
        />
        <meta property="og:image" content="https://andrewd.ai/images/site_image.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andrewd.ai/" />
        <meta property="twitter:title" content="Andrew Dai's Portfolio Site" />
        <meta
          property="twitter:description"
          content="16-year-old programmer from Toronto with interests in photography, urban planning, and politics. Currently at 8x consecutive hackathon wins and counting."
        />
        <meta property="twitter:image" content="https://andrewd.ai/images/site_image.jpeg" />
      </Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JLMGFT43ML"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JLMGFT43ML');
            `,
        }}
      />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
