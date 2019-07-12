import { put, call, takeEvery } from 'redux-saga/effects'

function* fetchData(action) {
  try {
    const data = yield call(Api.fetchUser, action.payload)
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [takeEvery('FETCH_REQUESTED', fetchData)]
}
