import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/common'
import { ReactComponent as HomeIcon } from 'assets/images/home-icon.svg'
import { ReactComponent as BurgerIcon } from 'assets/images/burger-icon.svg'
import { Typography } from 'components/common/typography/typography'

interface LogoProps {
  onClick?: () => void
}

const Logo: React.FC<LogoProps> = ({ onClick }) => (
  <div className="flex flex-row items-end justify-start p-0 static text-green">
    <span className="flex flex-row items-center justify-center">
      <HomeIcon />
    </span>
    <div className="flex flex-row items-start justify-start text-green w-80">
      <Link to={AppRoute.HOME_PAGE}>
        <Typography type="h3" className=" text-green mx-4">
          Homevest
        </Typography>
      </Link>
      <div onClick={onClick}>
        <BurgerIcon />
      </div>
    </div>
  </div>
)

export default Logo
