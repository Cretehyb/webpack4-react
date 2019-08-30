import { put, call, takeEvery } from 'redux-saga/effects'
import { Increment } from '../api/index'
import { incrementSuccess, incrementFailure } from '../store/actions/increment'

export function* increment(action) {
  const data = yield call(() => action.payload)
  yield put(incrementSuccess(data))
  // try {
  //   // const datas = yield call(Increment, action.payload)
  //   const data = yield call(() => 56);
  //   // 创建并 yield 一个 dispatch Effect
  //   yield put(incrementSuccess())
  // } catch (error) {
  //   yield put(incrementFailure(error))
  // }
}
