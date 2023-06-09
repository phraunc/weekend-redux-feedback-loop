import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { useState } from "react";

function FeelingFeedback() {
  const history = useHistory();
  const dispatch = useDispatch();


  const handleClick = () =>{
    history.push('/content')
  }

  dispatch({
    type: 'FEELINGS_FEEDBACK',
  })


  return (
    <>
      <div>
        <h1>How are you feeling today?</h1>
        <br />

        <br />
        <label for="feelings">Feeling</label>
        <br />
        <br />
        <input type="number" id="feelings" name="feelings" min="1" max="5" />
        <button type="button" onClick={handleClick}>NEXT</button>
      </div>
    </>
  );
}

export default FeelingFeedback;
