import { put, call } from 'redux-saga/effects'
import Api from '../api/index'
import {  incrementSuccess, incrementFailure } from '../store/actions/increment'

export function* increment(action) {
  try {
    const data = yield call(Api.Increment,action.payload)
    console.log(data)
    // 创建并 yield 一个 dispatch Effect
    yield put(incrementSuccess(data))
  } catch (error) {
    yield put(incrementFailure(error))
  }
}
