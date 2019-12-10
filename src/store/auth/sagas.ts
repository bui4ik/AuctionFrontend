import { takeLatest, put, call, all } from 'redux-saga/effects'
import * as requests from '../../api/requests/authentication'
import * as ac from "./actions";


function* signIn({payload} : any) {
  try {
    const response = yield call<any>(requests.signIn, payload);
    yield localStorage.setItem('access-token', response.data.accessToken.accessToken);
    yield localStorage.setItem('expiration-time', response.data.accessToken.expirationTime);
    yield localStorage.setItem('refresh-token', response.data.refreshToken);
    yield put(ac.signinSuccess(response.data.accessToken.userId));
    yield initializeUser();
  } catch (e) {
    yield put(ac.signinFailure(e))
  }
}

function* initializeUser(){
  try {
    const { data } = yield call<any>(requests.initializeUser);
    yield put(ac.initializeUserSuccess(data))
  }catch (e) {
    yield put(ac.initializeUserFailure(e))
  }
}

function* logout() {
  yield localStorage.clear()
}


export default function* () {
  yield all([
    takeLatest(ac.SIGNIN_REQUEST, signIn),
    takeLatest(ac.INITIALIZE_USER_REQUEST, initializeUser),
    takeLatest(ac.LOGOUT, logout)
  ]);
}
