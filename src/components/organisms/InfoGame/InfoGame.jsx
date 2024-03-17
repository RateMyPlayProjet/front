import React from "react";
import { GameInfo } from "../../molecules";
import fond from '../../../img/image.png'

import styled from 'styled-components';

const StyledDiv = styled.div`
`;
const StyledDiv1 = styled.div`
`;

const InfoGame = ({ data }) => {
    return (
      <StyledDiv1>
          {data && data.map((x, i) => {
              let {note} = x;
              return (
                  <StyledDiv key={i}> 
                      <GameInfo note={note} />
                  </StyledDiv> 
              );
          })}
      </StyledDiv1>
    );
  };
  

export default InfoGame;