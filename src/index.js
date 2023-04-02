import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App/App';

// const feedbackList =(state = [], action) =>{
//     if(action.type === 'GETFEEDBACK_LIST'){
//         return action.payload
//     }
//     return state

// }

const feelingFeedback = (state =[], action) => {

    return

    return state

}


const storeInstance = createStore(
    combineReducers({
    //    feedbackList 
        feelingFeedback
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
