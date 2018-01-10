import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../index.css'

class signupContainer extends Component {

    componentDidMount() {
        const { getUsers } = this.props.actions
        getUsers()        
    }

    addUser() {
        const { addUser, getUsers, toggleSignedup, setUsernameTakenTrue, 
        setUsernameTakenFalse, handleChangeUsername, handleChangePassword } = this.props.actions
        const { username, password, usernameTaken } = this.props.signupReducer
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

        if (username.length > 0 && password.length > 0) {
            addUser({ username: username, password: password }).then(() => {
                handleChangeUsername({ username: '' })
                handleChangePassword({ password: '' })
                setUsernameTakenFalse() 
                toggleSignedup() 
                getUsers()
            })
        }
    }

    render() {
        const { username, password, signedup, usernameTaken } = this.props.signupReducer
        const { handleChangeUsername, handleChangePassword } = this.props.actions
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sign Up</h5>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input 
                                            autoFocus
                                            value={username} 
                                            type="email" 
                                            className="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Username"
                                            onChange = { ({target}) => handleChangeUsername({username: target.value}) }
                                            />
                                    </div>
                                    <div className="form-group form-group-password">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input 
                                            value={password} 
                                            type="password" 
                                            className="form-control" 
                                            id="exampleInputPassword1" 
                                            placeholder="Password"
                                            onChange = { ({target}) => handleChangePassword({password: target.value}) }
                                            />
                                    </div>
                                    { signedup && !usernameTaken ? <div className="alert alert-success" role="alert"> Thanks for signing up! </div> : '' }
                                    { usernameTaken  ? <small id="postFormMessage" className="form-text text-muted">Username is already taken.</small> : '' }
                                </div>
                            </div>
                            <br/>
                            <button onClick={() => this.addUser()} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
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