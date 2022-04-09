import React from 'react'
import { useState } from 'react'
import { SideBar } from 'components/Navigation/SideBar'
import { Header } from 'components/Navigation/Header'
import { Logo } from 'components/Navigation/Logo'
import '../../assets/styles/tailwind.css'
import FormApartment from './component/formApartment'
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard'

export const ApartmentPage: React.FC = () => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(true)
  }

  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onClick} />
        <AppBarDashboard />
      </Header>
      <FormApartment />
      {active && <SideBar />}
    </>
  )
}
