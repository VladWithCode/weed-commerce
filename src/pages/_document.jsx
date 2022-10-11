import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function Document() {
  return (
    <Html>
      <Head>
        <title>Get Erizo 😎</title>
        <meta
          name='description'
          content='Entra y encuencuentra la weed perfecta para ti. Tenemos variedad para que escojas y disfrutes del mejor viaje que la Maria puede ofrecer.'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,700&family=Open+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
