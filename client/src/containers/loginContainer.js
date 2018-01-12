import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import { Link } from 'react-router-dom'
import passwordHash from 'password-hash'
import '../index.css'

class loginContainer extends Component {

    componentDidMount() {
        const { getUsers } = this.props.actions
        window.addEventListener('resize', this.resize)
        getUsers()        
    }

    resize = () => this.forceUpdate()

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
    }

    verifyUser() {
        const { getUsers, setInvalid } = this.props.actions
        let { username, password, invalid } = this.props.loginReducer
        let { users } = this.props.userReducer
        let { localStorage } = window

        if (users && users.length > 0) {
            for (let userModel of users) {
                let verifyPassword = passwordHash.verify(password, userModel.password)
                if (userModel.username === username && verifyPassword) {
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
        let { localStorage, innerWidth } = window
        let handleJumbotronHide = innerWidth < 451 ? 'jumbotron-hide' : ''
        let handleCardHide = innerWidth < 451 ? 'card-hide' : ''
        let handleCardBodyHide = innerWidth < 451 ? 'card-body-hide' : ''
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className={`jumbotron ${handleJumbotronHide}`}>
                            <h1 className="cryptofolio">Cryptofolio</h1>
                            <div className={`card ${handleCardHide}`}>
                                <div className={`card-body ${invalid ? 'card-body-login' : ''} ${handleCardBodyHide}`}>
                                    <div className="form-group">
                                        <input 
                                            autoFocus
                                            maxLength={40}
                                            disabled={localStorage.user ? true : false}
                                            value={username} 
                                            type="email" 
                                            className={`form-control ${invalid ? 'is-invalid' : null}`} 
                                            id="exampleInputEmail2" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Username"
                                            onChange = { ({target}) => handleChangeUsername({username: target.value}) }
                                            />
                                    </div>
                                    <div className="form-group form-group-password">
                                        <input 
                                            disabled={localStorage.user ? true : false}
                                            maxLength={40}
                                            value={password} 
                                            type="password" 
                                            className={`form-control ${invalid ? 'is-invalid' : null}`} 
                                            id="exampleInputPassword2" 
                                            placeholder="Password"
                                            onChange = { ({target}) => handleChangePassword({password: target.value}) }
                                            />
                                    </div>
                                    {
                                        localStorage.user ?
                                        <button onClick={() => this.logout()} type="submit" className="btn btn-danger btn-block">Logout</button>
                                        :
                                        <button onClick={() => this.verifyUser()} type="submit" className="btn btn-primary btn-block">Login</button>
                                    }
                                    { localStorage.user ? <div className="alert alert-primary" role="alert"> Welcome {JSON.parse(localStorage.getItem('user')).username}! </div> : ''}
                                    { invalid && !localStorage.user ? <small id="postFormMessage" className="form-text text-muted">Invalid username or password.</small> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className={`jumbotron jumbotron-switch ${handleJumbotronHide}`}>
                            <div className={`card ${handleCardHide}`}>
                                <div className={`card-body card-body-switch ${handleCardBodyHide}`}>
                                    <div className="switchtosignup">Don't have an account? <Link to="/">Sign up</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
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