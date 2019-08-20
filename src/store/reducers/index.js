import { combineReducers } from 'redux'
import { incrementReducer } from './increment'

const rootReducer = combineReducers({
  incrementReducer
})

export default rootReducer
