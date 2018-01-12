import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import LoginContainer from './loginContainer'
import SignupContainer from './signupContainer'
import '../index.css'

class App extends Component {
  	render() {
        let { signup } = this.props.appReducer
    	return (
            <div>{signup ? <SignupContainer/> : <LoginContainer/>}</div> 
    	)
  	}
}

function mapStateToProps(state) {
    const { appReducer, userReducer, signupReducer } = state
    return { appReducer, userReducer, signupReducer }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
