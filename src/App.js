import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let myFunc = ()=>{
    console.log("Execute de myFunc");
    return true;
  };
  
  myFunc;

  let jsonObj = {
    varOne: true,
    varTwo: false,
    varThree: "true",
    varFour: "false",
    varFive: 1,
  };

  let { varOne,varTwo } = jsonObj;

  const getIntPlusOne = (int) => {
    return int.varFive++;
  };

  const getIntPlusOneP = ({varFive}) => {
    return varFive++;
  };

  const sentenceConstructor = (...params) =>{
    let sentence = ''
    params.map((x,i) => {
      sentence += x
    });
    return sentence;
  };

  sentenceConstructor('ga','bu');

  const mySecondFunc = ({varOne}, {varTwo, ...properties}) =>{
    console.log(varOne)
    console.log(varTwo)
    console.log(properties.varFive)
  }

  mySecondFunc(jsonObj,jsonObj)

  const crashOuFenek = (true ? console.log("Papier mon gars") : console.log("Feuilles longues comme Fei Long")) ? console.log("It's true") : console.log("It's false");

  return (
    <div className="App"></div>
  );
}







export default App;
