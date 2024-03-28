import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 57px;
  height: 57px;
  border-radius: 50%;
`;

const Profil = ({ src }) => {
  return (
    <StyledDiv>
      <StyledImage src={src} alt="Profile Image" />
    </StyledDiv>
  );
};

export default Profil;
