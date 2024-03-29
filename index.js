import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import App1 from './App1'
import * as serviceWorker from './serviceWorker';
import Welcome from './text_t'
import Index from './reducers/index'
import {Provider} from 'react-redux'


const store= createStore(Index); 

ReactDOM.render(<Provider store={store}>
    <App1 />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
