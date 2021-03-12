import React from 'react';
import Head from 'next/head';
import ForecastApp from 'components/App/ForecastApp';

const ForecastPage = () => {
  return (
    <>
      <Head>
        <title>Surfing Forever - forecast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no maximum-scale=1" />
      </Head>
      <ForecastApp />
    </>
  );
};

export default ForecastPage;
