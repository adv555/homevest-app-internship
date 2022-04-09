import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/Navigation/NavLink'
import { ReactComponent as CompoundIcon } from 'assets/images/building-icon.svg'
import { ReactComponent as MapIcon } from 'assets/images/map-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { MenuItem } from 'components/Navigation/MenuItem'
import Button from 'components/common/button/button'
import { UserActionCreator } from 'store/user/userReducer'
import { useDispatch } from 'react-redux'

const AppBarDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const data = [
    {
      to: AppRoute.NEW_BUILDINGS,
      text: 'New buildings',
      icon: <CompoundIcon />,
    },
    {
      to: AppRoute.MAP,
      text: 'Map',
      icon: <MapIcon />,
    },
    {
      to: AppRoute.SEARCH,
      text: 'Search',
      icon: <SearchIcon />,
    },
  ]
  return (
    <>
      <div className="static flex flex-row items-center justify-between p-0">
        {data.map(({ text, to, icon }) => {
          return (
            <div key={text}>
              <Link to={to} className="text-black" activeClassName="text-green">
                <MenuItem text={text} itemStyles="mr-14" iconStyles="mr-2">
                  {icon}
                </MenuItem>
              </Link>
            </div>
          )
        })}
      </div>
      <Button nameBtn="secondary" label="Log out" onClick={() => {
        dispatch({ type: UserActionCreator.asyncLogoutSaga().type })}
      } />
    </>
  )
}

export default AppBarDashboard
