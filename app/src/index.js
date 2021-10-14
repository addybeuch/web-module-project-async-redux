import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers'

import { Provider } from 'react-redux';


const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(

    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
    </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
