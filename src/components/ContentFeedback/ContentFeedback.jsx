import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { useState } from "react";


function ContentFeedback(){
  const history = useHistory();
  const dispatch = useDispatch();

  const understanding = useSelector(store => store.review);

  dispatch({
    type:"UNDERSTANDING_FEEDBACK",
    
  })

  const handleClick = () =>{
        history.push('/support')
      }

    return(

        <div>
        <h1>How well are you understanding the content?</h1>
        <br />

        <br />
        <label htmlFor="understanding">Understanding?</label>
        <br />
        <br />
        <input type="number" id="understanding" name="understanding" min="1" max="5" />
        <button type="button" onClick={handleClick}>NEXT</button>
      </div>
    
    )
}

export default ContentFeedback;