import React from "react";
import { BaseDashboardMapProps } from "pages/dashboard-map/types/base-dashboard-map-props.interface";
import { LocationInput } from "components/common/input/location-input";
import { Select } from "components/common/select/select";
import { selectOption } from "pages/dashboard-map/mock-data/select-option";

export const DasboardMapFilters: React.FC<BaseDashboardMapProps> = () => {
  return (
    <div className="w-157.5 ml-7.5">
      <div>
        <LocationInput
          name="location"
          classes={{
            input: 'w-75'
          }}
        />
      </div>
      <div className="flex mt-6 justify-between">
        <Select
          options={selectOption}
          name="Filters"
          overrideClassNames={{
            Control: () => 'w-47.5 h-8.5',
            Menu: () => 'w-47.5',
            Option: () => 'w-43.5'
          }}
        />
        <Select
          options={selectOption}
          name="Prices"
          overrideClassNames={{
            Control: () => 'w-47.5 h-8.5',
            Menu: () => 'w-47.5',
            Option: () => 'w-43.5'
          }}
        />
        <Select
          options={selectOption}
          name="Property developers"
          overrideClassNames={{
            Control: () => 'w-47.5 h-8.5',
            Menu: () => 'w-47.5',
            Option: () => 'w-43.5'
          }}
        />
      </div>
    </div>
  )
}