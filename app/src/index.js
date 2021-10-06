import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';

import thunk from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux';


const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
