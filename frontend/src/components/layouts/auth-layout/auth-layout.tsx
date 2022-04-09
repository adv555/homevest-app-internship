import React from 'react';
import buildingIllustrationImage from 'assets/images/building-illustration.png';
import buildingIllustration1pxGradientImage from 'assets/images/building-illustration-1px-gradient.png';
import { Typography } from 'components/common/typography/typography';

export const AuthLayout: React.FC = ({ children }) => (
  <div className="h-screen flex flex-row">
    <div
      className="w-1/2"
      style={{
        backgroundColor: '#448891',
        backgroundImage: `url(${buildingIllustrationImage}), url(${buildingIllustration1pxGradientImage})`,
        backgroundRepeat: 'no-repeat, repeat-x',
        backgroundPosition: 'bottom left',
      }}
    >
      <Typography type="h5" className="text-white mt-16 3xl:mt-40 4xl:mt-48 ml-20">
        Dreams come true together with
      </Typography>
      <Typography type="h1" className="text-white mt-6 ml-20">
        Homevest
      </Typography>
    </div>
    <div className="flex items-center">
      <div className="w-102.5 ml-36 4xl:ml-90">
        {children}
      </div>
    </div>
  </div>
);
