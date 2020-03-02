import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

import authReducer from './reducer/authReducer'

const combineReducer = combineReducers({
    authReducer
})

export default createStore(combineReducer, applyMiddleware(promise))
