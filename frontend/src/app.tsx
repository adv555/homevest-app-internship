import { AccountSettingsPage } from 'pages/settings/account-settings/account-settings.page'
import PropertyDevelopersPage from 'pages/property-developers/property-developers.page'
import { DashboardMapPage } from 'pages/dashboard-map/dashboard-map.page'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoute } from 'common/enums'
import SignUpPage from 'pages/auth/sign-up/sign-up.page'
import { HomePage } from 'pages/home/home.page'
import { ApartmentPage } from 'pages/apartment/apartment-page'
import { Switch } from 'react-router-dom'
import SignIn from 'pages/auth/signIn/signIn'
import ForgotPassword from 'pages/auth/forgot-password/forgot-password.page'

import { UserActionCreator } from 'store/user/userReducer'
import VerifyEmail from 'pages/auth/verify-email/verify-email.page'
import { RootState } from 'common/types'
import ResetPassword from 'pages/auth/reset-password/reset-password.page'
import { PrivateRoute } from 'components/Routes/PrivateRoute'
import DashboardContainer from 'pages/investor/dashboard/investorDashboard'
import { PublicRoute } from 'components/Routes/PublicRoute'

const App: React.FC = () => {
  const { users } = useSelector(({ users }: RootState) => ({
    users,
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: UserActionCreator.asyncCheckAuthSaga().type })
    }
  }, [])
  const isAuth = users.isAuth
  const role = 'developer'
  return (
    <Switch>
      <PrivateRoute
        developerComponent={PropertyDevelopersPage}
        investorComponent={DashboardContainer}
        isAuth={isAuth}
        role={role}
        exact
        path={AppRoute.HOME_PAGE}
      />
      <PrivateRoute
        developerComponent={PropertyDevelopersPage}
        investorComponent={DashboardContainer}
        isAuth={isAuth}
        role={role}
        exact
        path={AppRoute.NEW_BUILDINGS}
      />
      <PrivateRoute
        developerComponent={DashboardMapPage}
        investorComponent={DashboardMapPage}
        isAuth={isAuth}
        role={role}
        exact
        path={AppRoute.MAP}
      />
      <PrivateRoute
        developerComponent={HomePage}
        investorComponent={DashboardContainer}
        isAuth={isAuth}
        role={role}
        exact
        path={AppRoute.INVESTOR_DASHBOARD}
      />
      <PrivateRoute
        developerComponent={ApartmentPage}
        investorComponent={DashboardContainer}
        isAuth={isAuth}
        role={role}
        exact
        path={AppRoute.SETTINGS_APARTMENT}
      />
      <PrivateRoute
        developerComponent={AccountSettingsPage}
        investorComponent={AccountSettingsPage}
        isAuth={isAuth}
        role={role}
        exact
        path={AppRoute.ACCOUNT_SETTINGS}
      />
      <PublicRoute component={SignIn} isAuth={isAuth} exact path={AppRoute.SIGN_IN} />
      <PublicRoute component={SignUpPage} isAuth={isAuth} exact path={AppRoute.SIGN_UP} />
      <PublicRoute
        component={ForgotPassword}
        isAuth={isAuth}
        exact
        path={AppRoute.FORGOT_PASSWORD}
      />
      <PublicRoute component={ResetPassword} isAuth={isAuth} exact path={AppRoute.RESET_PASSWORD} />
      <PublicRoute component={VerifyEmail} isAuth={isAuth} exact path={AppRoute.VERIFY_EMAIL} />
    </Switch>
  )
}

export default App
