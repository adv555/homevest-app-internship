import * as React from 'react'
import clsx from 'clsx'

interface HederProps {
  children?: React.ReactNode
  position?: string
  navBarWidth?: string
}

const Header: React.FC<HederProps> = ({ position, navBarWidth, children }) => {
  return (
    <header
      className={clsx(
        'absolute inset-x-0 shadow-xl bg-white  mx-auto rounded-lg rounded-t-none  w-1440px px-75px ',
        position,
      )}
    >
      <div className={clsx(' m-auto  flex items-center justify-between ', navBarWidth)}>
        {children}
      </div>
    </header>
  )
}

export default Header
