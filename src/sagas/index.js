import { takeEvery } from 'redux-saga/effects';

import { increment } from './increment'
import { INCREMENT } from '../store/actions/increment'


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeEvery(INCREMENT, increment),
  ]
}
