import { combineReducers } from 'redux'
import { incrementReducer } from '@/store/reducers/increment'

const rootReducer = combineReducers({
  incrementReducer
})

export default rootReducer
