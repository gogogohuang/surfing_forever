import React, { useState } from 'react';
import LocationSelector from 'components/Location/Selector/LocationSelector';
import styles from './CurrentData.style';

const CurrentData = () => {
  const [data, setData] = useState<Weather.CurrentDataType[]>([]);

  console.log(data);

  return (
    <div className="current-data__container">
      <LocationSelector updateData={data => setData(data)} />
      <style jsx>{styles}</style>
    </div>
  );
};

export default CurrentData;
