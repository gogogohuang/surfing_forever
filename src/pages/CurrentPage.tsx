import React from 'react';
import Head from 'next/head';
import CurrentApp from 'components/App/CurrentApp';

const CurrentPage = () => {
  return (
    <>
      <Head>
        <title>Surfing Forever - Current</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no maximum-scale=1" />
      </Head>
      <CurrentApp />
    </>
  );
};

export default CurrentPage;
