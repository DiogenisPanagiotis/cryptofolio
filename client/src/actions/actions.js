import { GET_USERS, ADD_USER, HANDLE_CHANGE_EMAIL, HANDLE_CHANGE_USERNAME, HANDLE_CHANGE_PASSWORD, 
         TOGGLE_SIGNEDUP, SET_USERNAMETAKEN_TRUE, SET_USERNAMETAKEN_FALSE,
         SET_INVALID, SET_INVALID_SIGNUP } from '../constants'

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
    handleChangeEmail: (email) => ({
        type: HANDLE_CHANGE_EMAIL,
        payload: email
    }),
    handleChangeUsername: (username) => ({
        type: HANDLE_CHANGE_USERNAME,
        payload: username
    }),
    handleChangePassword: (password) => ({
        type: HANDLE_CHANGE_PASSWORD,
        payload: password
    }),    
    toggleSignedup: (bool) => ({
        type: TOGGLE_SIGNEDUP,
        payload: bool
    }),
    setUsernameTakenTrue: () => ({
        type: SET_USERNAMETAKEN_TRUE
    }),
    setUsernameTakenFalse: () => ({
        type: SET_USERNAMETAKEN_FALSE
    }),
    setInvalid: () => ({
        type: SET_INVALID
    }),
    setInvalidSignup: () => ({
        type: SET_INVALID_SIGNUP
    })         
}

export default actions