import React from 'react';
import logo from "../../../img/Logo RMP.png";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  color: white;
`;

const Plateformes = ({ icon =(<></>), text="", ...props}) => {
  return (
    <StyledDiv {...props}>
        {icon}
        {text}
    </StyledDiv>
  );
}

export default Plateformes;