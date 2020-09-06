import React from 'react';
import styles from './Layout.style';
import App from 'components/App/App';

type Props = {
  children: React.ReactChild;
}

export default ({ children }: Props) => {
  return (
    <App>
      <>
        <div className="container">
          <main>{children}</main>
        </div>
        <style jsx>{styles}</style>
      </>
    </App>
  );
}
