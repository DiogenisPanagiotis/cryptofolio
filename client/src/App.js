import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

	state = { hello: []}

    post = () => {
        console.log('post')
        axios.post('/api/users', {username: 'diogenis', password: 'panagiotis'})
    }

	do = () => {

    	axios.get('/api/users')
            .then(res => {
                console.log(res.data)
            })   

    }

    hello = () => {
        fetch('/api/hello')
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }

  	render() {
    	return (
      		<div className="container">
        		<div className="jumbotron">
        		<h2>Cryptofolio!</h2>
                <button onClick={() => this.post()}>post</button>
                <button onClick={() => this.do()}>get</button>
        		<button onClick={() => this.hello()}>hello</button>
        	</div>
      	</div>
    	)
  	}
}

export default App
