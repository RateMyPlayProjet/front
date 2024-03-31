import React, { useState, useEffect } from "react";
import { Roue, Title, Button } from "../../atoms"; 
import styled from 'styled-components';
import { GroupNote } from "../../molecules";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left:20px;
`;
const StyledDiv = styled.div`
    display : flex;
    flex-direction: column;
`;

const RollRover = () => {
  const { token, selectedCategoryIds } = useParams();
  const navigate = useNavigate();

  return (
    <StyledDiv1>
      <Title margin="0">RollRover</Title>
      <Title margin="0" color="#846AF8" fontFamily="'Coolvetica'" fontSize="36px">Laissez la roue décider pour vous !</Title>
      <StyledDiv>
        <Roue></Roue>
      </StyledDiv>
    </StyledDiv1>
  );
};

export default RollRover;
