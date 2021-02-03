import React, { useState } from 'react';
import LocationSelector from 'components/Location/Selector/LocationSelector';
import CurrentWave from 'components/CurrentWave/CurrentWave';
import styles from './CurrentData.style';

type DataType = {
  currentData: Weather.CurrentDataType[];
  isLoading: boolean;
};

const CurrentData = () => {
  const [data, setData] = useState<DataType>({ currentData: [], isLoading: false });
  const lastData = data.currentData.length > 0 && data.currentData[data.currentData.length - 1];

  return (
    <div className="current-data__container">
      <LocationSelector updateData={data => setData(data)} />
      <CurrentWave
        isLoading={data.isLoading}
        waveSize={lastData.waveHeight}
        airTemp={lastData.temperature}
        seaTemp={lastData.seaTemperature}
      />
      <style jsx>{styles}</style>
    </div>
  );
};

export default CurrentData;
