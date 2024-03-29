import React, { useState, useEffect } from "react";
import { Gamers, Plateformes} from "../../atoms";
import { IoIosPeople } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import style from './PlusInfoGame.module.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding-left: 17%;
  padding-top: 17%;
`;


const PlusInfoGame = ({text="Hello",iconSize="30px"}) => {
    return (
      <div className={style.container}>
        <StyledDiv>
          <Gamers 
          icon={<IoIosPeople color="#3FA9F9" size={iconSize}/>}
          text={text}>
          </Gamers>
          <Plateformes 
          icon={<IoGameController color="#3FA9F9" size={iconSize}/>}
          text={text}>
          </Plateformes>
        </StyledDiv>
        
      </div>
    );
  };
  

export default PlusInfoGame;