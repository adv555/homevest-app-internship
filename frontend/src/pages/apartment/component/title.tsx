import React from 'react';
import { Typography } from "components/common/typography/typography";

export const Title: React.FC = () => {
  return (
    <>
      <Typography type="h4" className="text-black mb-6">
        Appartment Settings
      </Typography>
      <p className="text-black font-medium text-body-large leading-body-large mb-10">
        Add or edit information about your property so we can show it on the
        website
      </p>
    </>
  );
};
