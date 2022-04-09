import jwt_decode from 'jwt-decode'
import { AxiosResponse } from 'axios'
import { loginResponse } from 'common/interfaces/response'
import { takeEvery, put, call } from 'redux-saga/effects'
import { authService } from 'services'
import { UserActionCreator } from '../user/userReducer'

export function* signUpSaga(action: any) {
  try {
    const res: AxiosResponse = yield call(authService.signUp, { ...action.payload })
    yield put(UserActionCreator.setMessage({message: null}));
  } catch (e) {
    console.error(e)
  }
}

export function* resetPassword(action: any){
  const { history } = action;
  try{
    const res: AxiosResponse = yield call(authService.resetPassword, action.code, action.password);
    yield put(UserActionCreator.setMessage({message: null}));
    history.push("/sign-in");
  }catch(e){
    yield put(UserActionCreator.setMessage({message: "Something goes wrong"}))
    console.error(e);
  }
}

export function* forgotPassword(action: any){
  try {
    const res: AxiosResponse = yield call(authService.forgotPassword, action.email);
    yield put(UserActionCreator.setMessage({message: "Reset link sended"}))
  } catch (e) {
    console.error(e);
    yield put(UserActionCreator.setMessage({message: null}));
  }
}

export function* verifyEmailSaga(action: any) {
  try {
    const res: AxiosResponse = yield call(authService.verifyEmail, action.code)
    yield put(UserActionCreator.verify());
    yield put(UserActionCreator.setMessage({message: null}));
  } catch (e) {
    yield put(UserActionCreator.setMessage({message: "Invalid activation code"}));
    console.error(e)
  }
}

export function* loginSaga(action: any) {
  try {
    const res: AxiosResponse<loginResponse> = yield call(
      authService.login,
      action.email,
      action.password,
    )

    const { id, role } = yield jwt_decode(res.data.accessToken)
    yield localStorage.setItem('token', res.data.accessToken)

    yield put(UserActionCreator.loginUser({ id, role }));
    yield put(UserActionCreator.setMessage({message: null}));
  } catch (e) {
    console.error(e)
    yield put(UserActionCreator.setMessage({message: "Wrong email of password"}));
  }
}

export function* checkAuthSaga() {
  try {
    const res: AxiosResponse = yield call(authService.checkAuth)

    const { id, role } = yield jwt_decode(res.data.accessToken)
    yield localStorage.setItem('token', res.data.accessToken)

    yield put(UserActionCreator.loginUser({ id, role }))
    yield put(UserActionCreator.setMessage({message: null}));
    
  } catch (e: any) {
    console.error(e)
  }
}

export function* logoutSaga() {
  const res: AxiosResponse = yield call(authService.logout);
  const { id, role } = yield jwt_decode(res.data.token)
  yield localStorage.removeItem('token')

  yield put(UserActionCreator.logout({ id, role }))
  yield put(UserActionCreator.setMessage({message: null}));
}

export function* authWatcher() {
  yield takeEvery(UserActionCreator.asyncLoginSaga().type, loginSaga)
  yield takeEvery(UserActionCreator.asyncCheckAuthSaga().type, checkAuthSaga)
  yield takeEvery(UserActionCreator.asyncLogoutSaga().type, logoutSaga)
  yield takeEvery(UserActionCreator.asyncSIgnUpSaga().type, signUpSaga)
  yield takeEvery(UserActionCreator.asyncVerifyEmailSaga().type, verifyEmailSaga)
  yield takeEvery(UserActionCreator.asyncResetPasswordSaga().type, resetPassword);
  yield takeEvery(UserActionCreator.asyncForgotPasswordSaga().type, forgotPassword);
}
