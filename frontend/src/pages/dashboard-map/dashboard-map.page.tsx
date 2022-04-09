import React from 'react'
import { useState } from 'react'
import { DashboardMapCard } from './components/dashboard-map-card/dashboard-map-card'
import { DashboardMap } from './components/dashboard-map/dashboard-map'
import { mockData } from './mock-data/mock-data'
import { DasboardMapFilters } from './components/dashboard-map-filters/dashboard-map-filters'
import { Header } from 'components/Navigation/Header'
import { Logo } from 'components/Navigation/Logo'
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard'
import SideBarDashboard from 'components/Navigation/SideBarDashboard/SideBarDashboard'

export const DashboardMapPage: React.FC = () => {
  const [active, setActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const onMenuClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onMenuClick} />
        <AppBarDashboard />
      </Header>
      <div className="absolute inset-x-0  mx-auto top-24 w-1440px px-75px  ">
        <div className="flex flex-row py-11">
          <div className="w-1/2">
            <DashboardMap items={mockData} />
          </div>
          <div>
            <DasboardMapFilters />
            {mockData.map(item => (
              <DashboardMapCard
                key={item.id}
                name={item.name}
                adress={item.adress}
                price={item.price}
                bedroom={item.bedroom}
                bathroom={item.bathroom}
                built={item.built}
                parking={item.parking}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {active && <SideBarDashboard isLoggedIn={isLoggedIn} />}
      </div>
    </>
  )
}
