import { GET_USERS, FULFILLED } from '../constants';

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_USERS}_${FULFILLED}`:
            return {
                ...state,
                users: action.payload.data
            }
        default:
            return state;
    }
}