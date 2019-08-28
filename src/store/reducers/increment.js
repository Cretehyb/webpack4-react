import { INCREMENT, INCREMENT_SUCCESS, INCREMENT_FAILURE } from '../actions/increment'

const initialState = {
  // 自定义的初始状态
  number: 0
}

export const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state }
    case INCREMENT_SUCCESS:
      state.number +=100
      return {...state}
    case INCREMENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
