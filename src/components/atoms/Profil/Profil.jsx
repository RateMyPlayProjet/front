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

const Profil = ({...props} ) => {
  return (
    <StyledDiv>
      <StyledImage {...props} />
    </StyledDiv>
  );
};

export default Profil;
