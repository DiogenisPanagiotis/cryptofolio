import { GET_USERS, ADD_USER, HANDLE_CHANGE_USERNAME, HANDLE_CHANGE_PASSWORD, 
         TOGGLE_SIGNEDUP, SET_USERNAMETAKEN_TRUE, SET_USERNAMETAKEN_FALSE,
         SET_INVALID } from '../constants'

import * as service from '../services'

const actions = {

    getUsers: () => ({
        type: GET_USERS,
        payload: service.getUsers()
    }),
    addUser: (user) => ({
        type: ADD_USER,
        payload: service.addUser(user)
    }),
    handleChangeUsername: (username) => ({
        type: HANDLE_CHANGE_USERNAME,
        payload: username
    }),
    handleChangePassword: (password) => ({
        type: HANDLE_CHANGE_PASSWORD,
        payload: password
    }),    
    toggleSignedup: () => ({
        type: TOGGLE_SIGNEDUP
    }),
    setUsernameTakenTrue: () => ({
        type: SET_USERNAMETAKEN_TRUE
    }),
    setUsernameTakenFalse: () => ({
        type: SET_USERNAMETAKEN_FALSE
    }),
    setInvalid: () => ({
        type: SET_INVALID
    })       
}

export default actions