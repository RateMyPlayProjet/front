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
          {/* {data && data.map((x, i) => {
              let {note} = x;
              return (
                  <StyledDiv key={i}> 
                      <GameInfo note={note} />
                  </StyledDiv> 
              );
          })} */}
      </StyledDiv1>
    );
  };
  

export default InfoGame;