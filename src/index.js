import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import KeepItApp from './reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import firebaseConfig from './configs/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const store = createStore(KeepItApp, applyMiddleware(thunk))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
