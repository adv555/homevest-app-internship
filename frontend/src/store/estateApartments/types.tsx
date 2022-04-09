/* eslint-disable @typescript-eslint/no-explicit-any */
export const CREATE_APARTMENT = 'ESTATE/CREATE_APARTMENT'
export const FETCH_APARTMENTS = 'ESTATE/FETCH_APARTMENTS'
export const FETCH_APARTMENTS_FILTER = 'FETCH_APARTMENTS_FILTERS'
export const POST_NEW_APARTMENT = 'SUBMIT_APARTMENT'

export interface IEstateApartment {
  id?: string
  estateId?: string
  nameOfBuilding?: string
  numberOfRooms?: string
  numberOfBathrooms?: string
  typeOfParking?: string
  priceForM2?: string
  price?: string
  location?: string
  appartmentClass?: string
  floors?: string
  appartmentState?: string
  currency?: string
  yearOfOperation?: string
  salesStatus?: string
  investmentType?: string
  lending?: boolean
  installments?: boolean
  mortgage?: boolean
  images?: string
  createdAt?: string
  updatedAt?: string
}

export interface IActions {
  type: string
  payload?: IEstateApartment[]
}

export interface IInitialState {
  apartments: IEstateApartment[]
  filters: any
  isLoading: boolean
  error: string | null
}

export interface IFilter {
  apartmentClass?: string[]
  apartmentState?: string[]
  floors?: string[]
  numberOfRooms?: string[]
  salesStatus?: string[]
  yearOfOperation?: string[]
}
