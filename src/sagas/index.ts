import { takeLatest } from 'redux-saga/effects'
import { increment } from '@/sagas/increment'
import { INCREMENT } from '@/store/actions/increment'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* rootSaga() {
  yield takeLatest(INCREMENT as any, increment)
}
export default rootSaga
