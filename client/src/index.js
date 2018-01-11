import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App'
// import signupContainer from './containers/signupContainer'
import loginContainer from './containers/loginContainer'
import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter>
        	<div>
	            <Route exact path="/" component={App}/>
	            <Route exact path="/login" component={loginContainer}/>
        	</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
