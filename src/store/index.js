import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store
