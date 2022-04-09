/* eslint-disable no-fallthrough */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEstateApartment, IFilter } from './types'
import { createSelector } from '@reduxjs/toolkit'

export const getDeveloperEstate = (state: { estate: { apartments: IEstateApartment[] } }) =>
  state.estate.apartments

export const getEstateStatus = (state: { estate: { isLoading: boolean } }) => state.estate.isLoading

export const getErrorMessage = (state: { estate: { error: string | null } }) => state.estate.error

export const getUniqueDeveloperEstate = (state: { estate: { apartments: any } }) => {
  const estate = state.estate.apartments
  const id = 'estateId'

  const estateUniqueById = [
    ...new Map(estate.map((item: { [x: string]: any }) => [item[id], item])).values(),
  ]
  return estateUniqueById
}

export const getFilter = (state: { estate: { filters: { filters: any } } }) =>
  state?.estate?.filters?.filters

export const getFilterPrice = (state: { estate: { filters: { price: any } } }) => {
  const priceFilter = state?.estate?.filters?.price
  return priceFilter
}

export const getVisibleEstate = createSelector(
  [getDeveloperEstate, getFilter, getFilterPrice],
  (estate, filter, priceFilter) => {
    const filteredArrayByFilter: IEstateApartment[] = []
    const filteredArrayByPrice: IEstateApartment[] = []
    if (filter || priceFilter) {
      filter && mapFilterArray(estate, filter, filteredArrayByFilter)

      priceFilter && filteredArrayByFilter.length < 1
        ? mapPriceArray(estate, priceFilter, filteredArrayByFilter)
        : mapPriceArray(filteredArrayByFilter, priceFilter, filteredArrayByPrice)

      return (filter && !priceFilter) || (priceFilter && !filter)
        ? filteredArrayByFilter
        : filteredArrayByPrice
    }

    return estate
  },
)

function mapFilterArray(arr: any[], filters: any, arrFiltered: any[]) {
  arr.map((obj: any) => {
    for (const key in obj) {
      const estateValue: string = obj[key]

      for (const key in filters) {
        if (filters[key].includes(estateValue)) {
          if (!arrFiltered.find(({ id }: any) => id === obj.id)) {
            arrFiltered.push(obj)
          }
        }
      }
    }
  })
}

function mapPriceArray(arr: any[], priceFilter: any, arrFiltered: any[]) {
  if (!priceFilter) {
    return
  }
  const { currency } = priceFilter
  arr.map((obj: any) => {
    for (const key in obj) {
      const estateValue: number | [] | string | boolean = obj[key]

      for (const keyPrice in priceFilter) {
        const priceFilterValue = priceFilter[keyPrice]
        console.log(priceFilterValue.min, priceFilterValue.max)

        if (
          (key === keyPrice && priceFilterValue === estateValue) ||
          currency?.includes(estateValue) ||
          (key === keyPrice &&
            priceFilterValue?.min <= Number(estateValue) &&
            Number(estateValue) <= priceFilterValue?.max)
        ) {
          if (!arrFiltered.find(({ id }) => id === obj.id)) {
            arrFiltered.push(obj)
          }
        }
      }
    }
  })
}

// const { priceRange, price, priceFormM2, currency, lending, installments, mortgage } = priceFilter
