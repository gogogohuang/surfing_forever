import React, { FC } from 'react';
import styles from './Layout.style';
import App from 'components/App/App';
import Header from 'components/Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <App>
      <>
        <Header />
        <div className="container">
          <main>{children}</main>
        </div>
        <style jsx>{styles}</style>
      </>
    </App>
  );
};

export default Layout;
