import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import mainReducer from './AppReducer'

const appStore=createStore(mainReducer)
ReactDOM.render(
  <Provider store={appStore}>
      <BrowserRouter>
           <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
