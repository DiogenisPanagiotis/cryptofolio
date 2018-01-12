import axios from 'axios'

export const getUsers = () => axios.get('/api/users')

export const addUser = user => axios.post('/api/users', user)

export const redirectToDashboard = (localStorage, props) => {
	if (localStorage.user) {
		props.history.push('/dashboard')
	}
}

export const getCryptos = () => axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
