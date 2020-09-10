import network from 'utils/network';
import idx from 'idx';

enum ActionTypes {
  FETCHING = 'realtimeOcean/FETCHING',
  FETCHED_SUCCESS = 'realtimeOcean/FETCHED_SUCCESS',
  FETCHED_FAIL = 'realtimeOcean/FETCHED_FAIL',
}

export type DataType = {
  obsTime: string;
  weatherElement: {
    elementName: string;
    elementValue: string;
  }[];
}[];

export type OceanDataType = {
  locationName: string;
  data: DataType;
};

type TState = {
  data: DataType;
  isLoading: boolean;
  hasError: boolean;
};

const dataElementName = ['週期', '海溫', '浪高', '波向'];

export const initialState: TState = {
  data: null,
  isLoading: false,
  hasError: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCHING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    case ActionTypes.FETCHED_SUCCESS: {
      const { result } = action;
      const { locationName, time } = result?.location[0];
      const _data = {
        locationName,
        data: time,
      }

      return {
        data: _data,
        isLoading: false,
        hasError: false,
      }
    }

    case ActionTypes.FETCHED_FAIL: {
      return {
        date: [],
        isLoading: false,
        hasError: true,
      }
    }

    default:
      return state;
  }
}

export const getSeaData = (id: string): { types: string[], promise: () => Promise<any> } => {
  return {
    types: [
      ActionTypes.FETCHING,
      ActionTypes.FETCHED_SUCCESS,
      ActionTypes.FETCHED_FAIL,
    ],
    promise: () => {
      const request = network.getSeaData(id);

      request.catch(error => {
        const statusCode = idx(error, _ => _.response.status);
        const unexpectedError = !error.response || statusCode >= 500;

        if (unexpectedError) {
          return Promise.reject(error);
        }

        return console.log(statusCode);
      });

      return request;
    },
  };
}


