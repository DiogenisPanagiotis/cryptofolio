import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import { Link } from 'react-router-dom'
import '../index.css'

class signupContainer extends Component {

    componentDidMount() {
        const { getUsers } = this.props.actions
        window.addEventListener('resize', this.resize)
        getUsers()        
    }
    resize = () => this.forceUpdate()

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
    }

    addUser() {
        const { addUser, getUsers, toggleSignedup, setUsernameTakenTrue, 
        setUsernameTakenFalse, handleChangeUsername, handleChangePassword,
        handleChangeEmail, setInvalidSignup } = this.props.actions
        const { email, username, password, usernameTaken } = this.props.signupReducer
        const { users } = this.props.userReducer

        if (users && users.length > 0) {
            for (let userModel of users) {
                if (userModel.username === username) {
                    if (usernameTaken) {
                        return
                    }
                    setUsernameTakenTrue()
                    return
                }
            }
        }

        if (email.length > 0 && username.length > 0 && password.length > 0) {
            addUser({ email: email, username: username, password: password }).then(() => {
                handleChangeEmail({ email: '' })
                handleChangeUsername({ username: '' })
                handleChangePassword({ password: '' })
                setUsernameTakenFalse() 
                toggleSignedup() 
                getUsers()
            })
        }

        setInvalidSignup()
    }

    render() {
        const { email, username, password, signedup, usernameTaken, invalid } = this.props.signupReducer
        const { handleChangeEmail, handleChangeUsername, handleChangePassword } = this.props.actions
        let { innerWidth } = window
        let handleJumbotronHide = innerWidth < 451 ? 'jumbotron-hide' : ''
        let handleCardHide = innerWidth < 451 ? 'card-hide' : ''
        let handleCardBodyHide = innerWidth < 451 ? 'card-body-hide' : ''
        return (
            <div className='container'>
                <div className='row'>
                    <div id='mobile' className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className={`jumbotron ${handleJumbotronHide}`}>
                            <h1 className="cryptofolio">Cryptofolio</h1>
                            <div className={`card ${handleCardHide}`}>
                                <div className={`card-body ${invalid ? 'card-body-login' : ''} ${handleCardBodyHide}`}>
                                    <Link to="/login"><button type="submit" className="btn btn-primary btn-block">Login</button></Link>
                                    <div className="row">
                                        <div className='col-5'><hr/></div>
                                        <div className='col-2 or'> OR </div>
                                        <div className='col-5'><hr/></div>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            autoFocus
                                            maxLength={40}
                                            value={email} 
                                            type="email" 
                                            className={`form-control ${invalid ? 'is-invalid' : ''}`}  
                                            id="exampleInputEmail1" 
                                            placeholder="Email"
                                            onChange = { ({target}) => handleChangeEmail({email: target.value}) }
                                            />
                                    </div>                                    
                                    <div className="form-group">
                                        <input 
                                            maxLength={40}
                                            value={username} 
                                            type="email" 
                                            className={`form-control ${invalid ? 'is-invalid' : null}`}  
                                            id="exampleInputUsername1"  
                                            placeholder="Username"
                                            onChange = { ({target}) => handleChangeUsername({username: target.value}) }
                                            />
                                    </div>
                                    <div className="form-group form-group-password">
                                        <input 
                                            maxLength={40}
                                            value={password} 
                                            type="password" 
                                            className={`form-control ${invalid ? 'is-invalid' : null}`}  
                                            id="exampleInputPassword1" 
                                            placeholder="Password"
                                            onChange = { ({target}) => handleChangePassword({password: target.value}) }
                                            />
                                    </div>
                                    <button onClick={() => this.addUser()} type="submit" className="btn btn-primary btn-block">Sign up</button>
                                    { signedup && !usernameTaken ? <div className="alert alert-success" role="alert"> Thanks for signing up! </div> : '' }
                                    { usernameTaken  ? <small id="postFormMessage" className="form-text text-muted">Username is already taken.</small> : '' }
                                    { invalid  ? <small id="postFormMessage" className="form-text text-muted">Invalid credentials.</small> : '' }
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
                                    <div className="switchtosignup">Have an account? <Link to="/login">Login</Link></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(signupContainer)