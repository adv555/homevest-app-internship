/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'components/Navigation/NavLink'
import { AppRoute } from 'common/enums'
import { MenuItem } from 'components/Navigation/MenuItem'
import { ReactComponent as SettingsIcon } from 'assets/images/settings-icon.svg'
import { ReactComponent as ApartmentIcon } from 'assets/images/apartment-icon.svg'
import { ReactComponent as ReportsIcon } from 'assets/images/reports-icon.svg'
import { ReactComponent as NotificationIcon } from 'assets/images/notification-icon.svg'
import { ReactComponent as MessageIcon } from 'assets/images/message-icon.svg'
import { ReactComponent as InvestmentIcon } from 'assets/images/investments-icon.svg'
import { ReactComponent as FavouriteIcon } from 'assets/images/heart-icon.svg'
import { Typography } from 'components/common/typography/typography'
import { useSelector } from 'react-redux'
import { RootState } from 'common/types'

interface Props {
  isLoggedIn?: boolean
}

const SideBarDashboard: React.FC<Props> = ({ isLoggedIn }) => {
  const { users } = useSelector(({ users }: RootState) => ({
    users,
  }))
  const role = users.userData.role
  const investmentData = [
    {
      to: AppRoute.ACCOUNT_SETTINGS,
      text: 'Account Settings',
      icon: <SettingsIcon />,
    },
    {
      to: AppRoute.REPORTS,
      text: 'Reports',
      icon: <ReportsIcon />,
    },
    {
      to: AppRoute.NOTIFICATIONS,
      text: 'Notifications',
      icon: <NotificationIcon />,
    },
    {
      to: AppRoute.MESSAGES,
      text: 'Messages',
      icon: <MessageIcon />,
    },
    {
      to: AppRoute.MY_INVESTMENTS,
      text: 'My investments',
      icon: <InvestmentIcon />,
    },
    {
      to: AppRoute.FAVOURITES,
      text: 'Favourites',
      icon: <FavouriteIcon />,
    },
  ]
  const DeveloperData = [
    {
      to: AppRoute.ACCOUNT_SETTINGS,
      text: 'Account Settings',
      icon: <SettingsIcon />,
    },
    {
      to: AppRoute.SETTINGS_APARTMENT,
      text: 'Apartment Settings',
      icon: <ApartmentIcon />,
    },
    {
      to: AppRoute.REPORTS,
      text: 'Reports',
      icon: <ReportsIcon />,
    },
    {
      to: AppRoute.NOTIFICATIONS,
      text: 'Notifications',
      icon: <NotificationIcon />,
    },
    {
      to: AppRoute.MESSAGES,
      text: 'Messages',
      icon: <MessageIcon />,
    },
    {
      to: AppRoute.FAVOURITES,
      text: 'Favourites',
      icon: <FavouriteIcon />,
    },
  ]

  return (
    <div className=" flex flex-col gap-8 items-start p-4 absolute w-286px top-0 left-75px shadow-header bg-white rounded-lg z-20">
      {role === 'investor'
        ? investmentData.map(({ text, to, icon }) => {
            return (
              <div key={text}>
                <Link to={to} className="text-lightblue" activeClassName="text-green">
                  <MenuItem text={text} iconStyles="mr-4">
                    {icon}
                  </MenuItem>
                </Link>
              </div>
            )
          })
        : DeveloperData.map(({ text, to, icon }) => {
            return (
              <div key={text}>
                <Link to={to} className="text-lightblue" activeClassName="text-green">
                  <MenuItem text={text} iconStyles="mr-4">
                    {icon}
                  </MenuItem>
                </Link>
              </div>
            )
          })}

      <div className="flex flex-col gap-4">
        <div>
          <Typography type="body-large-medium">Currency</Typography>
        </div>
        <div className="flex flex-row gap-2 ">
          <span className="bg-light-grey-2 py-1 px-10px rounded" data-name="with-rough-repairs">
            <Typography type="body-large-medium">hryvnia</Typography>
          </span>
          <span className="bg-light-grey-2 py-1 px-10px rounded" data-name="under-repair">
            <Typography type="body-large-medium">dollar</Typography>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Typography type="body-large-medium">Language</Typography>
        </div>
        <div className="flex flex-row gap-2 ">
          <span className="bg-light-grey-2 py-1 px-10px rounded" data-name="with-rough-repairs">
            <Typography type="body-large-medium">ukrainian</Typography>
          </span>
          <span className="bg-light-grey-2 py-1 px-10px rounded" data-name="under-repair">
            <Typography type="body-large-medium">english</Typography>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SideBarDashboard
