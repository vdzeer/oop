import { all } from 'redux-saga/effects'
import { ordersWatcher } from './orders'
import { userWatcher } from './user'

function* rootSaga() {
  yield all([userWatcher(), ordersWatcher()])
}

export default rootSaga
