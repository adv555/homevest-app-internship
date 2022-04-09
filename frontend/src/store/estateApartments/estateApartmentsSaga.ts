/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeEvery, put, call } from 'redux-saga/effects'

import { EstateApartmentsActionsCreator } from 'store/estateApartments/estateApartmentsReducer'
import {
  fetchEstateApartmentsFromApi,
  postNewAppartment,
} from 'store/estateApartments/estateApartmentsOperations'

function* fetchEstateWorker() {
  try {
    yield put(EstateApartmentsActionsCreator.requestApartmentsPending())
    const { data } = yield call(fetchEstateApartmentsFromApi)
    yield put(EstateApartmentsActionsCreator.requestApartmentsSuccess(data))
  } catch (err) {
    console.log(err)
    const error = err as Error
    yield put(EstateApartmentsActionsCreator.requestApartmentsRejected({ error: error.message }))
  }
}

function* postEstateNewApartmentWorker(
  action: ReturnType<typeof EstateApartmentsActionsCreator.submitApartment>,
) {
  if (!action.payload) {
    return
  }
  try {
    yield put(EstateApartmentsActionsCreator.createApartmentPending())
    yield call(postNewAppartment, action.payload)
    yield put(EstateApartmentsActionsCreator.createApartmentSuccess())
  } catch (err) {
    console.log(err)
    const error = err as Error

    yield put(EstateApartmentsActionsCreator.createApartmentRejected({ error: error.message }))
  }
}

export function* estateApartmentsWatcher() {
  yield takeEvery(EstateApartmentsActionsCreator.fetchEstate().type, fetchEstateWorker)
  yield takeEvery(EstateApartmentsActionsCreator.submitApartment, postEstateNewApartmentWorker)
}
