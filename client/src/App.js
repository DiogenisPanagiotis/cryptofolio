import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import './index.css'
import { Link } from 'react-router-dom'

class App extends Component {

  	render() {
    	return (
      		<div className="container">
        		<div className="jumbotron">
        		<h2>Cryptofolio!</h2>
        	</div>
      	</div>
    	)
  	}
}

function mapStateToProps(state) {
    const { userReducer, signupReducer } = state
    return { userReducer, signupReducer }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
