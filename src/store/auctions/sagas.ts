import { takeLatest, put, call, all } from 'redux-saga/effects'
import * as requests from '../../api/requests/auction'
import * as ac from "./actions";

function* createNewAuction({payload} : any) {
  try {
    const { history } = payload;
    yield call<any>(requests.createNewAuction, payload.auctionInfo);
    yield put(ac.createNewAuctionSuccess());
    history.push('/auctions');
  } catch (e) {
    yield put(ac.createNewAuctionFailure(e))
  }
}

function* getUserAuctions() {
  try {
    const response = yield call<any>(requests.getUserAuctions);
    yield put(ac.getUserAuctionSuccess(response.data))
  } catch (e) {
    yield put(ac.getUserAuctionFailure(e))
  }
}

function* getAuction({payload:{id}}: any) {
  try {
    const { data } = yield call<any>(requests.getAuction, id);
    yield put(ac.getAuctionSuccess(data[0]))
  } catch (e) {
    yield put(ac.getAuctionFailure(e))
  }
}

export default function* () {
  yield all([
    takeLatest(ac.CREATE_NEW_AUCTION_REQUEST, createNewAuction),
    takeLatest(ac.GET_USER_AUCTIONS_REQUEST, getUserAuctions),
    takeLatest(ac.GET_AUCTION_REQUEST, getAuction)
  ]);
}
