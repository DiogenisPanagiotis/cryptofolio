import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App'
import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter>
        	<div>
	            <Route path="/" component={App}/>
        	</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
