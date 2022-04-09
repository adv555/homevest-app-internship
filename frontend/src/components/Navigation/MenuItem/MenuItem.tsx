import * as React from 'react'
import clsx from 'clsx'
import { Typography } from 'components/common/typography/typography'

interface ItemProps {
  text?: string
  itemStyles?: string
  iconStyles?: string
  children?: React.ReactNode
}

const MenuItem: React.FC<ItemProps> = ({ text, itemStyles, iconStyles, children }) => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-center items-center static self-stretch  hover:text-green focus:text-green',
        itemStyles,
      )}
    >
      <div className={clsx('static h-8 w-8', iconStyles)}>{children}</div>
      <Typography type="h6" className=" whitespace-nowrap mt-2px ">
        {text}
      </Typography>
    </div>
  )
}

export default MenuItem
