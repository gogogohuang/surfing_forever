import React from 'react';
import Head from 'next/head';
import App from 'components/App/App';

const Index = () => {
  return (
    <>
      <Head>
        <title>Surfing Forever</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no maximum-scale=1" />
      </Head>
      <App />
    </>
  );
};

export default Index;
