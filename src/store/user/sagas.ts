import { takeLatest, put, call, all } from 'redux-saga/effects'
import * as requests from '../../api/requests/user'
import * as ac from "./actions";

function* getUserInfo({payload} : any) {
  try {
    const response = yield call<any>(requests.getUserInfo, payload);
    yield put(ac.getUserInfoSuccess(response.data))
  } catch (e) {
    yield put(ac.getUserInfoFailure(e))
  }
}

function* getCommonInfo() {
  try {
    const {data} = yield call<any>(requests.getCommonInfo);
    yield put((ac.getCommonInfoSuccess(data.items, data.auctions)))
  }catch (e) {
    yield put(ac.getCommonInfoFailure(e))
  }
}

export default function* () {
  yield all([
    takeLatest(ac.GET_USER_INFO_REQUEST, getUserInfo),
    takeLatest(ac.GET_COMMON_INFO_REQUEST, getCommonInfo)
  ]);
}
