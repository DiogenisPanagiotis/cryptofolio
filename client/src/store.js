import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducer from './reducers/rootReducer'

const createStoreWithMiddleware = applyMiddleware(
    promise(),
    createLogger(),
    thunk
)(createStore)

const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store