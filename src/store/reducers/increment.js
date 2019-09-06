import {
  INCREMENT,
  INCREMENT_SUCCESS,
  INCREMENT_FAILURE
} from '../actions/increment'

const initialState = {
  musicList: []
}

export const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state }
    case INCREMENT_SUCCESS:
      state.musicList = action.payload
      return { ...state }
    case INCREMENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
