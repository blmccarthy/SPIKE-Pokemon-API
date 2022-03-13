import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// =============================================================================================== // 
// REDUCERS
// =============================================================================================== // 

const cardsReducer = (state = [], action) => {
    if(action.type === 'SET_CARDS') {
        return action.payload;
    }
    return state;
}

const setsReducer = (state = [], action) => {
    if(action.type === 'SET_SETS') {
        return action.payload;
    }
    return state;
}

// =============================================================================================== // 
// STORE
// =============================================================================================== // 

const storeInstance = createStore(
    combineReducers({
        cardsReducer,
        setsReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
