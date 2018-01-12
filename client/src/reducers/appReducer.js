import { TOGGLE_SIGNUP_OR_LOGIN } from '../constants';

const initialState = {
    signup: true
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIGNUP_OR_LOGIN:
            return {
                ...state,
                signup: action.payload
            }                   
        default:
            return state
    }
}