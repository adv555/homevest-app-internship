import React from 'react'
import { Typography } from 'components/common/typography/typography'
import clsx from 'clsx';

interface LayoutProps {
  children?: React.ReactNode
  title?: string
  className?: string;
}

const Dashboardlayout: React.FC<LayoutProps> = ({ children, title, className }) => {
  return (
    <div className={clsx('absolute inset-x-0 mx-auto top-24 w-1440px px-75px', className)}>
      <div className="flex flex-col">
        <div className=" mb-10">
          <Typography type="h2">{title}</Typography>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Dashboardlayout
