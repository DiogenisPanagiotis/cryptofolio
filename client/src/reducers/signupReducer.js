import { HANDLE_CHANGE_EMAIL, HANDLE_CHANGE_USERNAME, HANDLE_CHANGE_PASSWORD, 
         TOGGLE_SIGNEDUP, SET_USERNAMETAKEN_TRUE,
         SET_USERNAMETAKEN_FALSE } from '../constants';

const initialState = {
    email: '',
    username: '',
    password: '',
    signedup: false,
    usernameTaken: false
}

export default function signupReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                usernameTaken: false
            } 
        case HANDLE_CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload.username,
                usernameTaken: false
            }    
        case HANDLE_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
                usernameTaken: false
            }
        case TOGGLE_SIGNEDUP:
            return {
                ...state,
                signedup: true
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
        default:
            return state;
    }
}