import { put, call } from 'redux-saga/effects'
import { Increment } from '@/api/index'
import { incrementSuccess, incrementFailure } from '@/store/actions/increment'

function* increment(action: { payload: {} }) {
  try {
    const data: Array<Object> = yield call(Increment as any, action.payload)
    console.log(data)
    // 创建并 yield 一个 dispatch Effect
    yield put(incrementSuccess(data))
  } catch (error) {
    yield put(incrementFailure(error))
  }
}
export { increment }
