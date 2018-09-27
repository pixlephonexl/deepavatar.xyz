import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>deepavatar</title>
          <meta name="description" content="Make your avatar unique with the help of Artificial Intelligence!"></meta>
          <meta property="og:image" content="static/cat-social.jpg"></meta>
          <link rel="icon" href="static/favicon.jpg"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Varela+Round|Roboto:400,500,700" rel="stylesheet" />
          <link rel="stylesheet" href="static/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

