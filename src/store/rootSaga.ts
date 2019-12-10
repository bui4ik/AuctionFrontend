import { all, fork} from 'redux-saga/effects'
import auth from './auth/sagas'
import view from './view/sagas'
import user from './user/sagas'
import item from './item/sagas'
import auctions from './auctions/sagas'

export default function* () {
  yield all([
    fork(auth),
    fork(view),
    fork(user),
    fork(item),
    fork(auctions)
  ])
}
