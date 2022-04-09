import { InputField } from "components/common/input/input-field";
import { SelectField } from "components/common/select/select-field";
import { Typography } from "components/common/typography/typography";
import { selectOptionCountry, selectOptionCity } from "pages/dashboard-make-investment/mock-data/select-option";
import React from "react";

interface DetailsCompanyProps {
  disabled?: boolean;
}

export const DetailsCompany: React.FC<DetailsCompanyProps> = ({ disabled }) => {
  return (
    <div className="mt-12 h-64.5 border-b border-background">
      <Typography type="h5">
        Detais about the company
      </Typography>
      <div className="flex">
        <div>
          <InputField name="fullName" className="mt-6 w-85 h-8.5" placeholder="Full name" disabled={disabled} />
          <SelectField
            options={selectOptionCountry}
            name="country"
            placeholder="Country"
            isDisabled={disabled}
            overrideClassNames={{
              Control: () => 'w-85 h-8.5 mt-6',
              Menu: () => 'w-85',
              Option: () => 'w-81'
            }}
          />
          <InputField name="street" placeholder="Street" className="mt-6 w-85 h-8.5" disabled={disabled} />
        </div>
        <div className="ml-7.5">
          <InputField name="companyName" placeholder="Company name" className="mt-6 w-85 h-8.5" disabled={disabled} />
          <SelectField
            options={selectOptionCity}
            name="city"
            placeholder="City"
            isDisabled={disabled}
            overrideClassNames={{
              Control: () => 'w-85 h-8.5 mt-6',
              Menu: () => 'w-85',
              Option: () => 'w-81'
            }}
          />
          <InputField name="zipcode" placeholder="Zip code" className="mt-6 w-85 h-8.5" disabled={disabled} />
        </div>
      </div>
    </div>
  )
}
