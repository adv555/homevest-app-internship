import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserData {
  id: string
  role: string,
}

export interface UserState {
  isAuth: boolean
  isVerify: boolean
  userData: UserData
  message: string | null
}

const initialState: UserState = {
  isVerify: true,
  isAuth: true,
  userData: {} as UserData,
  message: null
}

const { actions, reducer } = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserData>) => {
      state.isAuth = true
      state.isVerify = true
      state.userData = action.payload
    },
    logout: (state, action: PayloadAction<UserData>) => {
      state.isAuth = false
      state.userData = action.payload
    },
    verify: (state) => {
      state.isVerify = true
    },
    setMessage: (state, action: PayloadAction<{message: string | null}>) => {
      state.message = action.payload.message;
    }
  },
})

const asyncLoginSaga = () => ({ type: 'asyncLogin' })
const asyncLogoutSaga = () => ({ type: 'asyncLogout' })
const asyncCheckAuthSaga = () => ({ type: 'asyncCheckAuth' })
const asyncSIgnUpSaga = () => ({ type: 'asyncSignUp' })
const asyncVerifyEmailSaga = () => ({ type: 'asyncVerifyEmail' })
const asyncResetPasswordSaga = () => ({ type: 'asyncResetPassword' });
const asyncForgotPasswordSaga = () => ({ type: 'asyncForgotPassword' });

const UserActionCreator = {
  ...actions,
  asyncLoginSaga,
  asyncLogoutSaga,
  asyncCheckAuthSaga,
  asyncSIgnUpSaga,
  asyncVerifyEmailSaga,
  asyncResetPasswordSaga,
  asyncForgotPasswordSaga
}

export { reducer, UserActionCreator }
