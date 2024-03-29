import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 57px;
  height: 57px;
  align-items: center;
  margin-right: 15px;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 57px;
  height: 57px;
  object-fit: cover;
`;

const Profil = ({...props} ) => {
  return (
    <StyledDiv>
      <StyledImage {...props} />
    </StyledDiv>
  );
};

export default Profil;
