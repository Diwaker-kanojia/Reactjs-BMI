import { useState } from "react";
import { Heading } from "./Components/Heading";
import { Form } from "./Components/Form";
import { Output } from "./Components/Output";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const handleClick = (event, weight, height) => {
    event.preventDefault();

    let heightValue = parseInt(height.current.value);
    let weightValue = parseInt(weight.current.value);
    height.current.value ="";
    weight.current.value ="";
    if (heightValue == "" || heightValue < 0 || isNaN(heightValue)) {
      setValue("Enter valid height");
    }
    if (weightValue == "" || weightValue < 0 || isNaN(weightValue)) {
      setValue("Enter valid weight");
    }else{
      const bmi = (weightValue/((heightValue*heightValue)/10000)).toFixed(2);
     if (bmi > 24.6) {
        setValue(`Over weight : ${bmi}`);
     }else if(bmi <=24.6 && bmi >=18.6) {
        setValue(`Normal weight : ${bmi}`);
     } else if(bmi <18.6){
        setValue(`Under weight : ${bmi}`);
     }
    }
  };

  return (
    <>
      <div className="wrapper">
        <Heading />
        <Form onHandle={handleClick} />
        <Output setValue={setValue} value={value} />
      </div>
    </>
  );
}

export default App;
