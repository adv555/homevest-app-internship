/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeEvery } from "redux-saga/effects";
import { MakeInvestmentActionCreators } from "./makeInvestmentReducer";

const fetchEstateFromApi = async (estateId: string) => {
  const response = await fetch(`http://localhost:3001/api/v1/estate/${estateId}`, {
    method: 'get',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });
  const data = await response.json();

  return { data };
}

const submitInvestmentData = async (estateId: string, values: any) => {
  await fetch(`http://localhost:3001/api/v1/estate/${estateId}/investments`, {
    method: 'post',
    body: JSON.stringify(values),
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json'
    }
  });
}

function* fetchEstateWorker(action: ReturnType<typeof MakeInvestmentActionCreators.fetchEstateForInvestment>) {
  try {
    yield put(MakeInvestmentActionCreators.startEstateLoading());
    const { data } = yield call(fetchEstateFromApi, action.payload.estateId);

    yield put(MakeInvestmentActionCreators.estateLoadedSuccess({ estate: data }));
  } catch (e) {
    const error = e as Error;
    console.error(error);
    yield put(MakeInvestmentActionCreators.estateLoadedFailure({ error: error.message }));
  }
}

function* submitInvestmentDataWorker(action: ReturnType<typeof MakeInvestmentActionCreators.submitInvestmentData>) {
  try {
    yield put(MakeInvestmentActionCreators.startSubmitting());
    yield call(submitInvestmentData, action.payload.estateId, action.payload.values);

    yield put(MakeInvestmentActionCreators.submittingSuccess());
    yield call(() => alert('Submitted successfuly'));
  } catch (e) {
    const error = e as Error;
    console.error(error);
    yield put(MakeInvestmentActionCreators.submittingFailure({ error: error.message }));
    yield call(() => alert('Submitted successfuly'));
  }
}

function* makeInvestmentWatcher() {
  yield takeEvery(MakeInvestmentActionCreators.fetchEstateForInvestment, fetchEstateWorker);
  yield takeEvery(MakeInvestmentActionCreators.submitInvestmentData, submitInvestmentDataWorker);
}

export { makeInvestmentWatcher };
