import * as React from 'react'
import { AppRoute } from 'common/enums'
import { LinkProps } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

type Props = LinkProps & {
  to: AppRoute
  className?: string
  activeClassName?: string
}

const Link: React.FC<Props> = ({ children, to, className, activeClassName }) => (
  <NavLink to={to} className={className} activeClassName={activeClassName}>
    {children}
  </NavLink>
)

export default Link
