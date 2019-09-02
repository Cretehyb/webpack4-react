import { takeEvery } from 'redux-saga/effects'
import { increment } from './increment'
import { INCREMENT } from '../store/actions/increment.js'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* rootSaga() {
  yield takeEvery(INCREMENT, increment)
}
export default rootSaga
