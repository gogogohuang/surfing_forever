import React from 'react';
import Head from 'next/head';

type Props  = {
  children: React.ReactChild;
}

export default ({ children }: Props) => (
  <>
    <Head>
      <meta name="description" content='surfing forever' />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:title" content='surfing' />
      <meta property="og:description" content='surfing' />
    </Head>
    {children}
  </>
);
