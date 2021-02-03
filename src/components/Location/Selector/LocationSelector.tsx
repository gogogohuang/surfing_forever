import React, { useEffect, useState, memo } from 'react';
import idx from 'idx';
import Select from 'react-select';
import { Name, ID } from 'utils/location';
import api from 'utils/api';
import { timeDisplayFactory } from 'utils/timeHelper';
import styles from './LocationSelector.style';

type Props = {
  updateData: Function;
};

const LocationSelector = ({ updateData }: Props): JSX.Element => {
  const [locationId, setLocationId] = useState<string>('');

  const options = [
    { value: ID['Taitung-Wave'], label: Name['Taitung-Wave'] },
    { value: ID['Taitung'], label: Name['Taitung'] },
    { value: ID['Cheng-Kung'], label: Name['Cheng-Kung'] },
  ];

  const handleOnChange = e => {
    if (e && e.value) {
      setLocationId(e.value);
    }
  };

  const genCurrentData = (rawData): Weather.CurrentDataType[] => {
    const result = rawData.map(raw => {
      const unixTimeZero = Date.parse(raw.dataTime);
      const waveHeight = idx(raw, _ => _.weatherElements.waveHeight);
      const seaTemperature = idx(raw, _ => _.weatherElements.seaTemperature);
      const temperature = idx(raw, _ => _.weatherElements.temperature);

      return {
        time: timeDisplayFactory(unixTimeZero),
        waveHeight,
        seaTemperature,
        temperature,
      };
    });

    return result;
  };

  useEffect(() => {
    const getData = async () => {
      updateData({ isLoading: true, currentData: [] });
      const data = await api.getSeaData(locationId);

      if (data && data.data && data.data.length > 0) {
        // convert data to CurrentDataType
        const formattedData = genCurrentData(data.data);
        updateData({ isLoading: false, currentData: formattedData });
      }
    };

    if (!!locationId && locationId.length > 0) {
      getData();
    }
  }, [locationId]);

  return (
    <div className="location-selector__container">
      <Select
        inputId="location-selector-input"
        id="location-selector"
        options={options}
        onChange={handleOnChange}
        isClearable
      />
      <style jsx>{styles}</style>
    </div>
  );
};

export default memo(LocationSelector);
