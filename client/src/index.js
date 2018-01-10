import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter>

	            <Route path="/" component={App}/>

        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
