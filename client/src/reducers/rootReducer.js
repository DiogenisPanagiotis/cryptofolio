import { combineReducers } from 'redux'
import userReducer from './userReducer'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
	userReducer,
	signupReducer,
	loginReducer
})

export default rootReducer