import { INCREMENT, INCREMENT_SUCCESS, INCREMENT_FAILURE } from '../actions/increment'

const initialState = {
  // 自定义的初始状态
  number: 0
}

export const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      state.number += 1
      return { ...state }
      break;
    case INCREMENT_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
      ;
    case INCREMENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      break;
    default:
      return state
  }
}
