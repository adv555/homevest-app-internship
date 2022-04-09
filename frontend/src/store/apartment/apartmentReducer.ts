import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReducerName } from 'common/enums'

export interface IAction {
    type: string,
    payload?: PayloadAction
}

export interface IApartments {
    id?: string,
    estateId?: string,
    nameOfBuilding?: string,
    numberOfRooms?: string,
    numberOfBathrooms?: string,
    typeOfParking?: string,
    price?: string,
    priceForM2?: string,
    location?: string,
    appartmentClass?: string,
    floors?: string,
    appartmentState?: string,
    currency?: string,
    yearOfOperation?: string,
    salesStatus?: string,
    investmentType?: string,
    lending?: boolean,
    installments?: boolean,
    mortgage?: true,
    images?: string
}

export interface IInitialState {
    apartments: IApartments[],
    isLoading: boolean,
    error: string
}

const initialState:IInitialState = {
    apartments: [],
    isLoading: false,
    error: ''
}

const AsyncGetApartments = ():IAction => ({type: 'AsyncGetApartment'})
const AsyncIsLoading = ():IAction => ({type: 'AsyncIsLoading'})

const { reducer, actions } = createSlice({
    name: ReducerName.APARTMENTS,
    initialState, 
    reducers: {
        getApartments: (state: IInitialState, action: PayloadAction<IApartments[]>): IInitialState => {
            
            state.apartments = action.payload;

            return state;
        },
        loading: (state: IInitialState, action: PayloadAction<boolean>): IInitialState => {
            state.isLoading = action.payload;

            return state;
        },
        error: (state: IInitialState, action: PayloadAction<string>): IInitialState => {
            state.error = action.payload;

            return state
        }
    }
})

const ApartmentActionCreator = {
    ...actions,
    AsyncGetApartments,
    AsyncIsLoading
}

export { ApartmentActionCreator, reducer }
