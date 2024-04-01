import React from "react";
import { GameInfo } from "../../molecules";

import styled from 'styled-components';

const StyledDiv = styled.div`
`;
const StyledDiv1 = styled.div`
`;

const InfoGame = ({ data }) => {
    return (
      <StyledDiv1>
        <StyledDiv> 
            <GameInfo />
        </StyledDiv> 
      </StyledDiv1>
    );
  };
  

export default InfoGame;