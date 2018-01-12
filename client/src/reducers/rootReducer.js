import { combineReducers } from 'redux'
import userReducer from './userReducer'
import appReducer from './appReducer'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
	appReducer,
	userReducer,
	signupReducer,
	loginReducer
})

export default rootReducer