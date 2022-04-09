import clsx from 'clsx'
import React from 'react'
import Button from '../button/button'
import { IPropsFilters } from './types/types'

function getYears() {
  let result: string[] = []
  const itYear: number = new Date().getFullYear()
  const countYears = 4

  for (let i = 0; i < countYears; i++) {
    result = [...result, `${+itYear + i}`]
  }

  result[result.length - 1] = result[result.length - 1] + '+'

  return result
}

const Filter: React.FC<IPropsFilters> = props => {
  const {
    isVisible = false,
    data = {
      numberOfRooms: props.data?.numberOfRooms || {
        label: 'Number of rooms',
        data: ['1', '2', '3', '4+'],
      },
      yearOfOperation: props.data?.yearOfOperation || {
        label: 'Year of operation',
        data: getYears(),
      },
      salesStatus: props.data?.salesStatus || {
        label: 'Sales status',
        data: ['not started', 'booked', 'started'],
      },
      apartmentClass: props.data?.salesStatus || {
        label: 'Apartment class',
        data: ['Economy', 'Comfort', 'Business', 'Premium'],
      },
      floors: props.data?.floors || {
        label: 'Floor',
        data: ['till 5', '6-10', '10-16', '17-26', 'from 27'],
      },
      apartmentState: props.data?.apartmentClass || {
        label: 'Apartment state',
        data: ['with rough repairs', 'under repair', 'no repair', 'with repair'],
      },
    },
    selectFilters = {
      numberOfRooms: props.selectFilters?.numberOfRooms || [],
      yearOfOperation: props.selectFilters?.yearOfOperation || [],
      salesStatus: props.selectFilters?.salesStatus || [],
      apartmentClass: props.selectFilters?.apartmentClass || [],
      floors: props.selectFilters?.floors || [],
      apartmentState: props.selectFilters?.apartmentState || [],
    },
    className = {
      button:
        props.className?.button ||
        'border-2 border-light-blue flex hover:bg-light-blue hover:text-white items-center justify-between leading-7 mix-w-150 px-2 rounded-md text-body-small text-green w-full',
    },
    handlerVisible,
    handlerReturnFilters,
  } = props

  const [filtersSelect, setFiltersSelects] = React.useState(selectFilters)

  const renderForm = (data: any) => {
    return Object.keys(data).map((key: string, index: number) => {
      return (
        <div key={key + index} className={clsx('flex flex-col justify-start my-4')}>
          <label>{data[key].label}</label>
          <div className={clsx('flex gap-1')}>{renderButton(key, data[key].data)}</div>
        </div>
      )
    })
  }

  const renderButton = (typeName: string, value: string[]) => {
    return value.map((name: string, index: number) => {
      return (
        <button
          key={typeName + name + index}
          className={clsx(
            (filtersSelect[typeName]?.indexOf(name) !== -1 ? 'bg-grey ' : 'bg-light-grey ') +
              'p-1 px-3',
          )}
          onClick={() => handlerSetSelectFilter(typeName, name)}
        >
          {name}
        </button>
      )
    })
  }

  const handlerSetSelectFilter = (key: string, value: string): void => {
    if (filtersSelect[key].indexOf(value) != -1) {
      const result = filtersSelect[key].filter((element: string) => element !== value)

      setFiltersSelects({ ...filtersSelect, [key]: result })

      return
    }

    setFiltersSelects({
      ...filtersSelect,
      [key]: [...filtersSelect[key], value],
    })
  }

  const handlerResetAllFilters = () => {
    setFiltersSelects({
      numberOfRooms: [],
      yearOfOperation: [],
      salesStatus: [],
      apartmentClass: [],
      floors: [],
      apartmentState: [],
    })
    handlerReturnFilters({})
  }

  const handlerReturnSelectProperty = () => {
    let result = {}

    const nameKey: string[] = Object.keys(filtersSelect)

    for (let i = 0; i < nameKey.length; i++) {
      if (filtersSelect[nameKey[i]].length) {
        let obj = {}
        obj = { [nameKey[i]]: [...filtersSelect[nameKey[i]]] }

        result = { ...result, ...obj }
      }
    }

    handlerReturnFilters(result)
    handlerVisible()
  }

  return (
    <>
      <div className={clsx('max-w-210 min-w-190 z-20')}>
        <button onClick={handlerVisible} className={clsx(className?.button)}>
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('h-4 w-6')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={clsx(
            (isVisible ? '' : 'hidden ') +
              'absolute left-0 w-full bg-white font-medium mt-2 px-4 py-2 rounded-md shadow-card text-body-large text-left z-10',
          )}
        >
          {renderForm(data)}

          <div className={clsx('flex gap-7 text-body text-green')}>
            <Button
              className={clsx(
                'bg-white border-none box-border duration-200 flex focus:text-green-pressed font-medium h-9 items-center justify-start px-3 py-4 rounded-lg text-base text-green text-left w-40',
              )}
              nameBtn={'tertiary'}
              label={'Reset All Filters'}
              onClick={handlerResetAllFilters}
            />
            <Button
              className={clsx(
                'bg-white border-none box-border duration-200 flex focus:text-green-pressed font-medium h-9 items-center justify-start px-3 py-4 rounded-lg text-base text-green text-left w-40',
              )}
              nameBtn={'tertiary'}
              label={'Show'}
              onClick={handlerReturnSelectProperty}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
