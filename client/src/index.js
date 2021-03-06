import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App'
import dashboardContainer from './containers/dashboardContainer'
import './index.css'

render(
    <Provider store={store}>
        <BrowserRouter>
        	<Switch>
	            <Route exact path="/" component={App}/>
	            <Route exact path="/dashboard" component={dashboardContainer}/>
	            <Redirect from="/*" to="/" />
        	</Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
