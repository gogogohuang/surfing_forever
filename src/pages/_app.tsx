import App from 'next/app';
import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import Layout from '../layout/Layout';
import withRedux from 'next-redux-wrapper';
import makeStore from 'root/redux/store';
import resetCSS from 'styles/reset.style';

type Props = {
  store: Store;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }


  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {resetCSS}
        </style>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
