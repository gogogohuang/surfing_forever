import React from 'react';
import LoadingSkeleton from 'components/LoadingSkeleton/LoadingSkeleton';
import styles from './CurrentWave.style';

type Props = {
  isLoading: boolean;
  waveSize: string;
  airTemp: string;
  seaTemp: string;
};

const CurrentWave = ({ isLoading, waveSize, seaTemp, airTemp }: Props) => {
  return (
    <div className="current-wave">
      {isLoading && <LoadingSkeleton />}
      {!isLoading && (
        <>
          <div className="current-wave__size">{waveSize || '--'}</div>
          <div className="current-wave__air-temp">{airTemp || '--'}</div>
          <div className="current-wave__sea-temp">{seaTemp || '--'}</div>
        </>
      )}
      <style jsx>{styles}</style>
    </div>
  );
};

export default React.memo(CurrentWave);
