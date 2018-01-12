import { GET_CRYPTOS, FULFILLED } from '../constants';

const initialState = {
	cryptocurrencies: null
}

export default function cryptoReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_CRYPTOS}_${FULFILLED}`:
            return {
                ...state,
                cryptocurrencies: action.payload.data
            }
        default:
            return state;
    }
}