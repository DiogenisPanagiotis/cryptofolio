import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import { Link, withRouter } from 'react-router-dom'
import '../index.css'

class navContainer extends Component {

    componentDidMount() {
        let { localStorage } = window
        let { toggleSignupOrLogin } = this.props.actions
        if (!localStorage.user) {
            toggleSignupOrLogin(false)
            this.props.history.push('/')
        }
    }

    logout() {
        localStorage.removeItem('user')
        this.props.history.push('/')
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
              <a id="Cryptofolio" className="navbar-brand" href="/">Cryptofolio</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to='/' onClick={() => this.logout()}> <span className="nav-link">Logout</span></Link>
                  </li>
                </ul>
              </div>
            </nav>
    	)
  	}
}

function mapStateToProps(state) {
    const { userReducer } = state
    return { userReducer }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navContainer))
