import { INCREMENT_STATUS } from '@/store/actions/increment'

const initialState = {
  musicList: []
}

export const incrementReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case INCREMENT_STATUS.INCREMENT:
      return { ...state }
    case INCREMENT_STATUS.INCREMENT_SUCCESS:
      state.musicList = action.payload
      return { ...state }
    case INCREMENT_STATUS.INCREMENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
