import React, { Fragment } from 'react';
import styles from './LoadingSkeleton.styles';

const LoadingSkeleton = () => {
  return (
    <Fragment>
      <div className="loading-skelton" />
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default LoadingSkeleton;
