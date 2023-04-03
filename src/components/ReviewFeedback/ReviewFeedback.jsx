import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function ReviewFeedback(){
    
    const dispatch = useDispatch();
  
    const feedbackReview = useSelector(store => store.review);

    dispatch({
        type: 'REVIEW',
        
    })

    return(
        <>
                <div>
        <h1>Review Your Feedback</h1>
        <p>{feedbackReview.feelings}</p>
        <p>{feedbackReview.understanding}</p>
        <p>{feedbackReview.support}</p>
        <p>{feedbackReview.comments}</p>
        <button type="submit"> SUBMIT</button>
      </div>

        </>
    )
}

export default ReviewFeedback;