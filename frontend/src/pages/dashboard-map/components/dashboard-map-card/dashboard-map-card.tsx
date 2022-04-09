import React from "react";
import { Typography } from "components/common/typography/typography";
import { ReactComponent as BedroomIcon } from './bedroom.svg';
import { ReactComponent as BathroomIcon } from './bathroom.svg';
import { BaseDashboardMapProps } from "pages/dashboard-map/types/base-dashboard-map-props.interface";

export const DashboardMapCard: React.FC<BaseDashboardMapProps> = ({ name, adress, price, bedroom, bathroom, built, parking, image }) => {
  return (
    <div className="w-157.5 h-60 shadow-card p-6 rounded-lg flex mb-10 ml-7.5 mt-10">
      <div>
        <img src={image} alt="building" className="rounded-lg " />
      </div>
      <div className="ml-7">
        <div className=" w-83.5 h-27 border-b border-light-grey">
          <Typography type="h5">
            {name}
          </Typography>
          <div className="flex mt-6 flex justify-between">
            <Typography type="body-large-medium">
              {adress}
            </Typography>
            <Typography type="body-large-semibold">
              {price}
            </Typography>
          </div>
        </div>
        <div className="mt-15 h-6 items-center flex">
          <Typography type="body-small-medium">
            {bedroom}
          </Typography>
          <BedroomIcon className="ml-2" />
          <Typography type="body-small-medium" className="ml-6">
            {bathroom}
          </Typography>
          <BathroomIcon className="ml-2" />
          <Typography type="body-small-medium" className="ml-6">
            Built: {built}
          </Typography>
          <Typography type="body-small-medium" className="ml-5">
            Parking: {parking}
          </Typography>
        </div >
      </div>
    </div >
  )
}