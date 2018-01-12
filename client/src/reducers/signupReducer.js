import { HANDLE_CHANGE_EMAIL, HANDLE_CHANGE_USERNAME, HANDLE_CHANGE_PASSWORD, 
         TOGGLE_SIGNEDUP, SET_USERNAMETAKEN_TRUE,
         SET_USERNAMETAKEN_FALSE, SET_INVALID_SIGNUP } from '../constants';

const initialState = {
    email: '',
    username: '',
    password: '',
    signedup: false,
    usernameTaken: false,
    invalid: false
}

export default function signupReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                usernameTaken: false,
                invalid: false,
                signedup: false
            } 
        case HANDLE_CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload.username,
                usernameTaken: false,
                invalid: false,
                signedup: false
            }    
        case HANDLE_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
                usernameTaken: false,
                invalid: false,
                signedup: false

            }
        case TOGGLE_SIGNEDUP:
            return {
                ...state,
                signedup: action.payload
            }    
        case SET_USERNAMETAKEN_TRUE:
            return {
                ...state,
                usernameTaken: true
            }
        case SET_USERNAMETAKEN_FALSE:
            return {
                ...state,
                usernameTaken: false
            }
        case SET_INVALID_SIGNUP:
            return {
                ...state,
                invalid: true
            }    
        default:
            return state;
    }
}