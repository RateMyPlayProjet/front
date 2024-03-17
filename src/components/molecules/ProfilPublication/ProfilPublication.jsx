import React from "react";
import { Profil, Username, Date } from "../../atoms"; 
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 7%;
  margin-top: auto;
  margin-left: auto;
  display: flex
`;

const StyledDivInfo = styled.div`
  width: 7%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`;

const ProfilPublication = ({ data }) => {
  return (
    <StyledDiv>
    {data.map((x, i) => { /* foreach */
        let { src, username } = x;
        return (
            <StyledDiv>
                <Profil src={src}></Profil>
                <StyledDivInfo>
                    <Username>{username}</Username>
                    <Date></Date>
                </StyledDivInfo>
            </StyledDiv> 
        );
    })}
    
    </StyledDiv>
  );
};

export default ProfilPublication;
