import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { useState } from "react";


function SupportFeedback(){
  const history = useHistory();
  const dispatch = useDispatch();

  const support = useSelector(store => store.review);

  dispatch({
    type:"SUPPORT_FEEDBACK"
  })

    const handleClick = () =>{
        history.push('/comments')
      }

    return(

        
        <div>
        <h1>How well are you being supported?</h1>
        <br />

        <br />
        <label for="supported">Support?</label>
        <br />
        <br />
        <input type="number" id="support" name="Support" min="1" max="5" />
        <button type="button" onClick={handleClick}>NEXT</button>
      </div>
    
        
    )
}

export default SupportFeedback;