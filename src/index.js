import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { useHistory } from "react-router-dom"; 
import logger from 'redux-logger';
import App from './components/App/App';

// const feedbackList =(state = [], action) =>{
//     if(action.type === 'GETFEEDBACK_LIST'){
//         return action.payload
//     }
//     return state

// }
// const history = useHistory();
const review = (state = [], action) => {
if(action === 'FEELINGS_FEEDBACK'){
    action.payload
}else if(action === 'UNDERSTANDING_FEEDBACK'){
    return action.payload
}else if(action ==='SUPPORT_FEEDBACK'){
    return action.payload
}else if(action === 'COMMENT_FEEDBACK'){
    return action.payload
}
    return state
}


const storeInstance = createStore(
    combineReducers({
    //    feedbackList 
       
        review
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
