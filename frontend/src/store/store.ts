import { estateNewReducer } from 'store/slices/'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { ReducerName } from 'common/enums'

import {
  estateApartmentsReducer,
  userReducer,
  makeInvestmentReducer,
  apartmentReducer,
} from 'store/slices'

import { rootWatcher } from 'store/saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    [ReducerName.ESTATE]: estateApartmentsReducer,
    [ReducerName.USERS]: userReducer,
    [ReducerName.MAKE_INVESTMENT]: makeInvestmentReducer,
    [ReducerName.APARTMENTS]: apartmentReducer,
    [ReducerName.ESTATE_NEW]: estateNewReducer,
  },
  middleware: [...middleware],
})

sagaMiddleware.run(rootWatcher)

export { store }
