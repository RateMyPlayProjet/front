import React, { useContext, useState } from "react";
import { Note } from "../../atoms"; 
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const GroupNote = ({ handler, data, icon = <></>, ...props }) => {
  return (
    <StyledDiv>
      <Note
      text={props.children}></Note>
    </StyledDiv>
  );
};

export default GroupNote;
