import React, { Component } from 'react'

class App extends Component {

	state = { hello: []}

	do = () => {

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
        		<h2>Cryptofolio</h2>
        		{this.do()}
        	</div>
      	</div>
    	)
  	}
}

export default App
