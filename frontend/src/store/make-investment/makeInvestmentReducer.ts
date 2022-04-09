import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerName } from "common/enums";

export interface IEstateInfo {
  annualReturn: number;
  duration: number;
  location: string;
  distribution: number;
  profit: string;
}

export interface IMakeInvestmentState {
  estate?: IEstateInfo;
  estateLoading: boolean;
  estateLoadingError?: string;
  estateLoaded: boolean;

  isSubmitting: boolean;
  submittingError?: string;
}

const initialState: IMakeInvestmentState = {
  estateLoading: false,
  estateLoaded: false,

  isSubmitting: false,
};

const { reducer, actions } = createSlice({
  name: ReducerName.MAKE_INVESTMENT,
  initialState,
  reducers: {
    startEstateLoading: (state) => ({
      ...state,
      estateLoading: true,
      estateLoadingError: undefined
    }),
    estateLoadedSuccess: (state, action: PayloadAction<{ estate: IEstateInfo }>) => ({
      ...state,
      estate: action.payload.estate,
      estateLoading: false,
      estateLoaded: true,
    }),
    estateLoadedFailure: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      estateLoading: false,
      estateLoadingError: action.payload.error,
    }),

    startSubmitting: (state) => ({
      ...state,
      isSubmitting: true,
      submittingError: undefined,
    }),
    submittingSuccess: (state) => ({
      ...state,
      isSubmitting: false,
    }),
    submittingFailure: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      submittingError: action.payload.error,
    })
  }
});

const MakeInvestmentActionCreators = {
  ...actions,
  fetchEstateForInvestment: createAction('FETCH_ESTATE_FOR_INVESTMENT', estateId => ({ payload: { estateId } })),
  submitInvestmentData: createAction('SUBMIT_INVESTMENT_DATA', (estateId: string, values) => ({ payload: { estateId, values } })),
}

export { MakeInvestmentActionCreators, reducer };
