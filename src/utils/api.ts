import axios from 'axios';
import idx from 'idx';

const apiKey = 'CWB-27A80F1A-A586-4FDC-BE8A-641BF50848FA';
const apiUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore';

const getSeaData = stationId =>
  axios
    .get(`${apiUrl}/O-A0018-001`, {
      params: {
        Authorization: apiKey,
        limit: 10,
        sort: 'obsTime',
        stationId,
        elementName: '風向,平均風,週期,陣風,海溫,浪高,波向',
      },
    })
    .then(res => {
      const success = idx(res, _ => _.data.success);
      const records = idx(res, _ => _.data.records);

      if (success === 'true') {
        return records || {};
      }

      return {};
    })
    .catch(e => console.log(e));

export default {
  getSeaData,
};
