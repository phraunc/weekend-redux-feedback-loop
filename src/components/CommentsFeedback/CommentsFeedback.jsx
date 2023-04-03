import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { useState } from "react";


function CommentsFeedback(){
  const history = useHistory();
  const dispatch = useDispatch();

  const comments = useSelector(store => store.review );

  dispatch({
    type:"COMMENT_FEEDBACK",
    payload: comments
  })
  

  const handleClick = () =>{
    
    history.push('/review')
  }

    return(
        
        <div>
        <h1>Any comments you want to leave?</h1>
        <br />

        <br />
        <label for="comments">Comments</label>
        <br />
        <br />
        <input type="text" id="comment" name="comment" />
        <button type="button" onClick={handleClick}>NEXT</button>
      </div>
    
        
    )
}

export default CommentsFeedback;