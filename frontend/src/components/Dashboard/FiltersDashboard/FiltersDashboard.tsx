import React from 'react'
import { useDispatch } from 'react-redux'
import { LocationInput } from 'components/common/input/location-input'
import ContainerFiltersAndPrice from 'components/common/filtes/containerFiltersAndPrice'
import { EstateApartmentsActionsCreator } from 'store/estateApartments/estateApartmentsReducer'

const FiltersDashboard: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="w-1290px flex justify-between items-center absolute top-12 ">
        <div className="">
          <LocationInput
            name="location"
            value="Muckachevo"
            onChange={() => console.log('Change')}
            classes={{
              input: 'w-53 h-12',
            }}
          />
        </div>
        <div className=" flex flex-row gap-7">
          <ContainerFiltersAndPrice
            returnValueAll={value => dispatch(EstateApartmentsActionsCreator.setFilters(value))}
          />
        </div>
      </div>
    </>
  )
}

export default FiltersDashboard
