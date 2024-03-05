import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Paragraph } from './components/atoms';

function App() {
  let color = "blue"
  return (
    <React.Fragment>
    <div style={{
      backgroundColor : color
    }} className="App">
      Hello World
    </div>
      <Card>
        Alan Wake II
        <Paragraph>Test</Paragraph>
      </Card>
      
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Paragraph></Paragraph>
      
    </React.Fragment>
  );
}

export default App;
