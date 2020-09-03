import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import   counterReducer from './Reducers/counterReducer' 

import { watchIncreaseCounter } from './Sagas/counterSaga'
 
// import toggleName from './Reducers/NameReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    counterReducer,
    applyMiddleware(
        sagaMiddleware,
    )
)

sagaMiddleware.run(watchIncreaseCounter)

export { store }
