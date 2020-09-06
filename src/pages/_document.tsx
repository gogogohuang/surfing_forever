/* eslint-disable  react/no-danger, jsx-a11y/lang */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="zh-Hant-TW">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no maximum-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* android chrome */}
          <meta name="theme-color" content="#bb0600" />
          {/* iOS safari */}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
