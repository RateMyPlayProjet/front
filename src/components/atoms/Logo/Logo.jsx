import React from 'react';
import logo from "../../../img/Logo RMP.png";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: 'MADE Soulmaze', sans-serif;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Logo = ({ text }) => {
  return (
    <StyledDiv>
      <StyledImg src={logo} alt="Logo" />
      {text && <span>{text}</span>}
    </StyledDiv>
  );
}

export default Logo;
