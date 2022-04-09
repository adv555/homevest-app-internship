import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'

export interface IActions {
  type: string
  payload?: IEstate[] | []
}

export interface IEstate {
  id: string
  companyId?: string
  estateName?: string
  estateLogo?: string
  numberOfFlats?: number
  numberOfBuildings?: number
  constructionDetails?: string
  amountOfMoney?: string
  location?: string
  status?: string
  fundingState?: string
  annualReturn?: number
  duration?: number
  distribution?: number
  profit?: string
  favorite?: boolean
}

export interface IInitialState {
  estate: IEstate[]
  isLoading: boolean
  error: string
}

const initialState: IInitialState = {
  estate: [],
  isLoading: false,
  error: '',
}

const fetchEstate = (): IActions => ({ type: 'FETCH_ESTATE' })
const fetchEstateFilters = (): IActions => ({ type: 'FETCH_ESTATE_FILTERS' })
const ActionIsLoading = (): IActions => ({ type: 'ACTION_IS_LOADING' })
const ActionIsLoadingFilters = (): IActions => ({ type: 'ACTION_IS_LOADING_FILTERS' })

const { reducer, actions } = createSlice({
  name: ReducerName.ESTATE_NEW,
  initialState,
  reducers: {
    setEstate: (state, action: PayloadAction<IEstate[]>) => {
      state.estate = action.payload
      state.isLoading = false
      return state
    },
    setIsLoading: state => {
      state.isLoading = true

      return state
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
      return state
    },
  },
})

const EstateActionsCreatorNew = {
  ...actions,
  fetchEstate,
  fetchEstateFilters,
  ActionIsLoading,
  ActionIsLoadingFilters,
}

export { EstateActionsCreatorNew, reducer }
