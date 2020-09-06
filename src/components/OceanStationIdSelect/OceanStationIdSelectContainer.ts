import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSeaData as fetch } from 'root/redux/modules/realtimeOcean';
import { isDataSelector } from 'root/redux/selectors/realtimeOcean';
import OceanStationIdSelect from './OceanStationIdSelect';

const makeMapStateToProps = () => {
  return state => {
    return createStructuredSelector({
      data: isDataSelector,
    })(state);
  };
};

const mapDispatchToProps = {
  fetch,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(OceanStationIdSelect);
