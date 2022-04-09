import { InputField } from "components/common/input/input-field";
import { SelectField } from "components/common/select/select-field";
import { Typography } from "components/common/typography/typography";
import { selectOptionNameOfBank, selectOptionNameOfCard } from "pages/dashboard-make-investment/mock-data/select-option";
import React from "react";

interface PaymentInformationProps {
  disabled?: boolean;
}

export const PaymentInformation: React.FC<PaymentInformationProps> = ({ disabled }) => {
  return (
    <div className="mt-12 h-74.5 border-b border-background">
      <Typography type="h5">
        Payment information
      </Typography>
      {/* <div className="flex mt-6">
        <Typography type="body-small-medium" className="ml-7">
          Payment via bank card
        </Typography>
        <Typography type="body-small-medium" className="ml-21">
          Payment via check
        </Typography>
      </div> */}
      <div className="flex">
        <div>
          <SelectField
            options={selectOptionNameOfBank}
            placeholder="Name of bank"
            name="nameOfBank"
            isDisabled={disabled}
            overrideClassNames={{
              Control: () => 'w-85 h-8.5 mt-6',
              Menu: () => 'w-85',
              Option: () => 'w-81'
            }}
          />
          <InputField name="cardNumber" className="mt-6 w-85 h-8.5" placeholder="Card number" disabled={disabled} />
          <InputField name="cvv" className="mt-6 w-85 h-8.5" placeholder="CVV" disabled={disabled} />
        </div>
        <div className="ml-7.5">
          <SelectField
            options={selectOptionNameOfCard}
            placeholder="Name of card"
            name="nameOfCard"
            isDisabled={disabled}
            overrideClassNames={{
              Control: () => 'w-85 h-8.5 mt-6',
              Menu: () => 'w-85',
              Option: () => 'w-81'
            }}
          />
          <InputField name="expirationYear" className="mt-6 w-85 h-8.5" placeholder="Expiretion year" disabled={disabled} />
          <InputField name="paymentAmount" className="mt-6 w-85 h-8.5" placeholder="Amount you are willing to invest in $" disabled={disabled} />
        </div>
      </div>
    </div>
  )
};
