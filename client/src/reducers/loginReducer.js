import { HANDLE_CHANGE_USERNAME, HANDLE_CHANGE_PASSWORD, SET_INVALID } from '../constants';

const initialState = {
	username: '',
	password: '',
    invalid: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload.username,
                invalid: false
            }    
        case HANDLE_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
                invalid: false
            }
        case SET_INVALID:
            return {
                ...state,
                invalid: true
            }                   
        default:
            return state
    }
}