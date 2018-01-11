import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import { Link } from 'react-router-dom'
import '../index.css'

class loginContainer extends Component {

    componentDidMount() {
        const { getUsers } = this.props.actions
        getUsers()        
    }

    verifyUser() {
        const { getUsers, setInvalid } = this.props.actions
        let { username, password, invalid } = this.props.loginReducer
        let { users } = this.props.userReducer
        let { localStorage } = window

        if (users && users.length > 0) {
            for (let userModel of users) {
                if (userModel.username === username && userModel.password === password) {
                    let userCookie = JSON.stringify({ username: userModel.username })
                    localStorage.setItem('user', userCookie)
                    if (invalid === true) {
                        setInvalid()
                    }   
                    getUsers()
                    return
                }
            }
        }

        setInvalid()
    }

    logout() {
        let { localStorage } = window
        let { handleChangeUsername, handleChangePassword } = this.props.actions
        localStorage.removeItem('user')
        handleChangeUsername({ username: ''})
        handleChangePassword({ password: ''})
    }

    render() {
        let { username, password, invalid } = this.props.loginReducer
        let { handleChangeUsername, handleChangePassword } = this.props.actions
        let { localStorage } = window
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <h3 className="cryptofolio">Cryptofolio</h3>
                            <hr/>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail2">Username</label>
                                    <input 
                                        autoFocus
                                        disabled={localStorage.user ? true : false}
                                        value={username} 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail2" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Username"
                                        onChange = { ({target}) => handleChangeUsername({username: target.value}) }
                                        />
                                  </div>
                                  <div className="form-group form-group-password">
                                    <label htmlFor="exampleInputPassword2">Password</label>
                                    <input 
                                        disabled={localStorage.user ? true : false}
                                        value={password} 
                                        type="password" 
                                        className="form-control" 
                                        id="exampleInputPassword2" 
                                        placeholder="Password"
                                        onChange = { ({target}) => handleChangePassword({password: target.value}) }
                                        />
                                  </div>
                                  { localStorage.user ? <div className="alert alert-primary" role="alert"> Welcome {JSON.parse(localStorage.getItem('user')).username}! </div> : ''}
                                  { invalid && !localStorage.user ? <small id="postFormMessage" className="form-text text-muted">Invalid username or password.</small> : null}
                              </div>
                            </div>
                            <br/>
                            {
                                localStorage.user ?
                                <button onClick={() => this.logout()} type="submit" className="btn btn-danger btn-block">Logout</button>
                                :
                                <button onClick={() => this.verifyUser()} type="submit" className="btn btn-primary btn-block">Login</button>
                            }
                            <br/>
                            <div className="switchtosignup">Don't have an account? <Link to="/">Sign up</Link></div>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { userReducer, loginReducer } = state
    return { userReducer, loginReducer }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginContainer)