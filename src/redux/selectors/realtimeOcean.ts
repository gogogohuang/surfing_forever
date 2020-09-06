import idx from 'idx';
import { createSelector } from 'reselect';

export const realtimeOceanRawSelector = state => idx(state, _ => _.realtimeOcean);

export const isDataSelector = createSelector(realtimeOceanRawSelector, auth => idx(auth, _ => _.data.data));
export const isLocNameSelector = createSelector(realtimeOceanRawSelector, auth => idx(auth, _ => _.data.locationName));
export const isHasErrorSelector = createSelector(realtimeOceanRawSelector, auth => idx(auth, _ => _.hasError));
export const isLoadingSelector = createSelector(realtimeOceanRawSelector, auth => idx(auth, _ => _.isLoading));

