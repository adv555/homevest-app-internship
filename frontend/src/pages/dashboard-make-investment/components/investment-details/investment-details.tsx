import { CheckboxField } from 'components/common/checkbox/checkbox-field';
import { Typography } from 'components/common/typography/typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { IEstateInfo } from 'store/make-investment/makeInvestmentReducer';
interface InvestmentDetailsProps {
  estate?: IEstateInfo;
}

export const InvestmentDetails: React.FC<InvestmentDetailsProps> = ({ estate }) => {
  if (!estate) {
    return null;
  }

  const { annualReturn, duration, location, distribution, profit } = estate;
  const data = {
    'Return:': `${annualReturn}%`,
    'Duration:': `${duration} months`,
    'Location:': `${location}`,
    'Distribution:': `${distribution} months`,
    'Propfit:': `${profit}`,
  }

  return (
    <div className="mt-14 ml-8">
      <Typography type="h4">
        Investment details
      </Typography>
      <div className="shadow-card-dashboard h-96 w-130 rounded-lg mt-6 p-6">
        {Object.keys(data).map((item) => (
          <div key={item} className="flex justify-between mb-6">
            <Typography type="body-medium">
              {item}
            </Typography>
            <Typography type="body-medium" className="text-green">
              {data[item as keyof typeof data]}
            </Typography>
          </div>
        ))}
        <div>
          <div className='flex'>
            <CheckboxField
              name="agreeTerms"
              size='primary'
              label={(
                <Typography type="body-small-medium" className='ml-4'>
                  By confirming you agree to the
                  <Link to="/" className='text-green-hover ml-1'>terms of Homevest and accept them hereby</Link>
                </Typography>
              )}
            />
          </div>
          <div className='flex mt-4'>
            <CheckboxField
              name="agreeRisks"
              size='primary'
              label={(
                <Typography type="body-small-medium" className='ml-4'>
                  I am aware of the
                  <Link to="/" className='text-green-hover ml-1'>risk</Link>
                </Typography>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}