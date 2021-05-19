// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';
import selectedGroupReducer from './reducers/selected_group_reducer';

const identifyReducer = (state = null) => state;

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  selectedGroup: selectedGroupReducer,
  channels: identifyReducer,
  currentUser:identifyReducer
});

const middlewares = applyMiddleware(reduxPromise,logger)

const initialState = {
  messages: [],
  channels: ['general','react', 'paris','522'],
  currentUser: prompt('What is your username?' || `anonymous${Math.floor(10 +(Math.random()*90))}`),
  selectedGroup: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
