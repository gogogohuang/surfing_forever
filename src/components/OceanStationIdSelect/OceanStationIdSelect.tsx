import React, { useEffect, useState, useMemo } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import stationId from 'constant/buoyLocationCode';
import { DataType } from 'root/redux/modules/realtimeOcean';
import Swell from 'components/Swell/Swell';

type Props = {
  data: DataType;
  fetch: (id: string) => {};
};

export default ({ data, fetch }: Props) => {
  const [sId, setSId] = useState<string>('');

  const handleChange = e => {
    setSId(e.target.value);
  };

  useEffect(() => {
    if (sId) {
      fetch(sId, );
    }
  }, [sId]);

  const renderSwell = useMemo(() => (
    data && <Swell data={data} />
  ), [data]);

  return (<>
    <Select
      labelId="ocean station id"
      value={sId}
      onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {stationId.map(({ code, name }) => (
        <MenuItem key={code} value={code}>{name}</MenuItem>
      ))}
    </Select>
    {renderSwell}
  </>);
}
