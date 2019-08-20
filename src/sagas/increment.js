import { put, call, takeEvery } from 'redux-saga/effects'
import { Increment } from '../api/index'
import { incrementSuccess, incrementFailure } from '../store/actions/increment'

export function* increment(action, {call, put}) {
  try {
    // const data = yield call(Increment, action.payload)
    const data = 10
      yield put(incrementSuccess(data))
  } catch (error) {
    yield put(incrementFailure(error))
  }
}
