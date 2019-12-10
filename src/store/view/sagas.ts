import { takeLatest, put, all } from 'redux-saga/effects'
import * as ac from "./actions";

function* toggleSidebar() {
  try {
    yield put(ac.toggleSidebarSuccess())
  } catch (e) {
    yield put(ac.toggleSidebarFailure(e))
  }
}

export default function* () {
  yield all([
    takeLatest(ac.TOGGLE_SIDEBAR_REQUEST, toggleSidebar),
  ]);
}
