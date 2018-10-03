import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Static from '../services/static';

const title = 'deepavatar';
const description = 'Make your avatar unique with the help of Artificial Intelligence!';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://www.deepavatar.xyz/static/cat-transformation.jpg" />
          <link rel="icon" href={Static.url('/static/favicon.jpg')}></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Varela+Round|Roboto:400,500,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href={Static.url('/static/main.css')} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

