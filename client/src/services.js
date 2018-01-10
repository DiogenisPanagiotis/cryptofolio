import axios from 'axios'

export const getUsers = () => axios.get('/api/users')

export const addUser = user => axios.post('/api/users', user)