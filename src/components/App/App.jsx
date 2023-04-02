import React from 'react';
import axios from 'axios';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  // const dispatch = useDispatch();

  //setting local state to get my feedback list from the DB.
  // const [feedbackList, setFeedbackList] = useState([]);
  // const feedbackList = useSelector(store => store.feedbackList)

  // useEffect(() => {
  //   fetchFeedBackList();
  // }, []);

//   const fetchFeedBackList = () =>{

//     console.log('Fetching feedbacks! Dont be bad!')

//   //GET request to grab my list of feedbacks from my DB.
//   axios.get('/feedback')
//   .then((response) => {
//     console.log('responding!', response.data)
//     // setFeedbackList(response.data)
//     dispatch({type: "GETFEEDBACK_LIST", payload: response.data})
//   })
//   .catch((error) => {
//     console.log(error);
//   })

 
// }


  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/feeling">Feeling</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/support">Supported</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
        </ul>
      </nav>
      <div>
        <hr/>
        <Route path="/feeling">
        <FeelingFeedback />
        </Route>
        <Route path="content">
          
        </Route>
        <Route path="/support">

        </Route>
        <Route path="/comments">

        </Route>
        

        {/* <ul>
          {feedbackList.map((feedback) => (
            <li key ={feedback.id}>
              <p>{feedback.feeling}</p>
              <p>{feedback.understanding}</p>
              <p>{feedback.support}</p>
              <p>{feedback.comments}</p>
              <p>{feedback.flagged}</p>
              <p>{feedback.date}</p>
           </li>
          ))}
        
        </ul> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
