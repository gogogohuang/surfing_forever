import axios from 'axios';
import idx from 'idx';

const apiKey = 'CWB-27A80F1A-A586-4FDC-BE8A-641BF50848FA';
const apiUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore';

const getSeaData = (stationId: string): Promise<void | { data: any[] }> =>
  axios
    .get(`${apiUrl}/O-B0075-001`, {
      params: {
        Authorization: apiKey,
        sort: 'dataTime',
        stationId,
        weatherElement:
          'tideHeight,tideLevel,waveHeight,waveDirection,waveDirectionDescription,wavePeriod,seaTemperature,temperature',
      },
    })
    .then(res => {
      const success = idx(res, _ => _.data.success);
      const weatherData = idx(res, _ => _.data.records.seaSurfaceObs.location[0].stationObsTimes.stationObsTime);

      if (success === 'true') {
        return { data: weatherData || [] };
      }

      return { data: [] };
    })
    .catch(e => console.log(e));

export default {
  getSeaData,
};
