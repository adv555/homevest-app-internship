/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'
import {
  IEstateApartment,
  FETCH_APARTMENTS,
  POST_NEW_APARTMENT,
  IActions,
  IInitialState,
  IFilter,
} from 'store/estateApartments/types'

const initialState: IInitialState = {
  apartments: [],

  filters: [],
  isLoading: false,
  error: null,
}

const fetchEstate = (): IActions => ({ type: FETCH_APARTMENTS })
const submitApartment = (values: any): IActions => ({
  type: POST_NEW_APARTMENT,
  payload: values,
})

const { reducer, actions } = createSlice({
  name: ReducerName.ESTATE,
  initialState,
  reducers: {
    requestApartmentsPending: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    requestApartmentsSuccess: (state, action: PayloadAction<IEstateApartment[]>) => ({
      ...state,
      apartments: action.payload,
      isLoading: false,
    }),
    requestApartmentsRejected: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
    createApartmentPending: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    createApartmentSuccess: state => ({
      ...state,
      isLoading: false,
    }),
    createApartmentRejected: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
    setFilters: (state, action: PayloadAction<IFilter>) => ({
      ...state,
      filters: action.payload,
    }),
  },
})

const EstateApartmentsActionsCreator = {
  ...actions,
  fetchEstate,
  submitApartment,
}

export { EstateApartmentsActionsCreator, reducer }
