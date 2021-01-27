import React from 'react';
import styles from './CurrentWave.style';

type Props = {
  isLoading: boolean;
  waveSize: string;
  airTemp: string;
  seaTemp: string;
};

const CurrentWave = () => {
  return (
    <div className="current-wave">
      <div className="current-wave__size">5m</div>
      <div className="current-wave__air-temp">20</div>
      <div className="current-wave__sea-temp">16</div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default CurrentWave;
