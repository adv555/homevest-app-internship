import { put, takeEvery, call } from 'redux-saga/effects'
import { api } from 'services';
import { EstateActionsCreatorNew } from './estateNewReducer'

const fetchEstateFromApi = () => api.get('http://localhost:3001/api/v1/estate');
const fetchGetEstateFilters = () => api.get('http://localhost:3001/api/v1/estate/filters');

function* fetchEstateWorker() {
  try {
    const { data } = yield call(fetchEstateFromApi);
    yield put(EstateActionsCreatorNew.setEstate(data));
  } catch (e) {
    yield put(EstateActionsCreatorNew.setError('Upps...Loading estate is error!'));
  }
  
}

function* fetchEstateFiltersWorker() {
  try {
    const { data } = yield call(fetchGetEstateFilters);
    yield put(EstateActionsCreatorNew.setEstate(data));
  } catch (e) {
    yield put(EstateActionsCreatorNew.setError('Upps...Loading estate is error!'));
  }
}

function* actionIsLoadingWorker() {
  yield put(EstateActionsCreatorNew.setIsLoading());
  yield put(EstateActionsCreatorNew.ActionIsLoading());
}

function* actionIsLadingFiltersWorker() {
  yield put(EstateActionsCreatorNew.setIsLoading());
  yield put(EstateActionsCreatorNew.ActionIsLoadingFilters());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* estateNewWatcher() {
  yield takeEvery(EstateActionsCreatorNew.fetchEstate().type, actionIsLoadingWorker);
  yield takeEvery(EstateActionsCreatorNew.ActionIsLoading().type, fetchEstateWorker);
  yield takeEvery(EstateActionsCreatorNew.fetchEstateFilters().type, actionIsLadingFiltersWorker);
  yield takeEvery(EstateActionsCreatorNew.ActionIsLoadingFilters().type, fetchEstateFiltersWorker);
}

export { estateNewWatcher }