import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../layout/Layout';
import resetCSS from 'styles/reset.style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="surfing forever" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:title" content="surfing forever" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>
          {resetCSS}
        </style>
      </Layout>
    </>
  );
}

export default MyApp;
