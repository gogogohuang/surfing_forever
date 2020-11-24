import React, { FC } from 'react';
import styles from './Layout.style';

const Layout: FC = ({ children }) => {
  return (
    <div className="container">
      <main>{children}</main>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Layout;
