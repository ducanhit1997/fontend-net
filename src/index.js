import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'; 
const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,  
 document.getElementById('root'));
serviceWorker.unregister();
