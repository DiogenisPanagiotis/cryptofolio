import { combineReducers } from 'redux'
import signupReducer from './signupReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	userReducer,
	signupReducer
})

export default rootReducer