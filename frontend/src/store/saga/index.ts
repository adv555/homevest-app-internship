import { all, fork } from 'redux-saga/effects'

import { makeInvestmentWatcher } from 'store/make-investment/makeInvestmentSaga'
import { authWatcher } from 'store/user/userSaga'

import { estateNewWatcher } from 'store/estateNew/estateNewSaga'
import { apartmentWatcher } from 'store/apartment/appartmentSaga'
import { estateApartmentsWatcher } from 'store/estateApartments/estateApartmentsSaga'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootWatcher() {
  yield all([
    fork(makeInvestmentWatcher),
    fork(authWatcher),
    fork(estateApartmentsWatcher),
    fork(estateNewWatcher),
    fork(apartmentWatcher),
  ])
}
