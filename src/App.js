import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Paragraph, Divider, Button, InputText } from './components/atoms';
import { FaAngry, FaSadCry, FaSmile, FaUser } from 'react-icons/fa';
/* const invert = ({primary,secondary}) =>{
  primary: secondary,
  secondary: primary,
}; */

const menuData = [
  {
    icon:<FaAngry></FaAngry>,
    text:"Pas Content",
    value:"angry",
  },
  {
    icon:<FaSmile></FaSmile>,
    text:"Content",
    value:"happy",
  },
  {
    icon:<FaSadCry></FaSadCry>,
    text:"Triste",
    value:"sad",
  }
];

function App() {
  console.log("Render APP")
  let color = "blue"
  return (
    <React.Fragment>
      <InputText></InputText>
    <Button icon={<FaUser />}></Button>
      <Card>
        Alan Wake II
        <Paragraph>Test</Paragraph>
      </Card>
      <Divider bgColor="blue"></Divider>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Paragraph></Paragraph>
      
    </React.Fragment>
  );
}

export default App;
