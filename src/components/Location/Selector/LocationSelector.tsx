import React, { useEffect, useState, memo } from 'react';
import Select from 'react-select';
import { Name, ID } from 'utils/location';
import api from 'utils/api';
import { getHourMinuteFromTimestamp } from 'utils/timeHelper';
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
      console.log(raw.dataTime);
      const unixTimeZero = Date.parse(raw.dataTime);

      console.log(getHourMinuteFromTimestamp(unixTimeZero));

      // return {
      //   time: date.
      // }
    });

    return [];
  };

  useEffect(() => {
    const getData = async () => {
      const data = await api.getSeaData(locationId);

      if (data && data.data && data.data.length > 0) {
        // convert data to fit CurrentDataType
        genCurrentData(data.data);

        console.log(data.data);
        // updateData(data.data);
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
