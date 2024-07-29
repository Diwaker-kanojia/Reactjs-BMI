import React, { useRef } from "react";
import { useReducer } from "react";

export function Form({ onHandle }) {
  let weight = useRef();
  let height = useRef();
  return (
    <>
      <form>
        <div className="input-box">
          <label htmlFor="Weight">Weight in(Kg)</label>
          <input id="Weight" type="text" ref={weight} 
          placeholder="Enter Your Weight"/>
        </div>
        <div className="input-box">
          <label htmlFor="height">Height in(cm)</label>
          <input id="height" type="text"  ref={height}
           placeholder="Enter Your Height"/>
        </div>
        <button onClick={() => onHandle(event,weight,height)}>Calculate</button>
      </form>
    </>
  );
}
