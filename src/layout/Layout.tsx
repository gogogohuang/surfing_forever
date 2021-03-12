import React, { FC } from 'react';
import styles from './Layout.style';
import Header from 'components/Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Layout;
