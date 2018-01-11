import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import SignupContainer from './signupContainer'
import '../index.css'

class App extends Component {

  	render() {
    	return (
            <SignupContainer/>
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
