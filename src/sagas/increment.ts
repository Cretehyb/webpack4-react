import { put, call } from 'redux-saga/effects'
import { Increment } from '@/api/index'
import { incrementSuccess, incrementFailure } from '@/store/actions/increment'
import { SagaIterator } from 'redux-saga'

interface ActionConstruction {
  type: string,
  payload?: Object
}
const increment = function* (action: ActionConstruction) : SagaIterator {
  try {
    const data: any = yield call(Increment, action.payload)
    // 创建并 yield 一个 dispatch Effect
    yield put(incrementSuccess(data))
  } catch (error) {
    yield put(incrementFailure(error))
  }
}
export { increment }
