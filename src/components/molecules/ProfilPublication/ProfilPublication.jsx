import React, { useState, useEffect } from "react";
import { Profil, Username, Text } from "../../atoms"; 
import styled from 'styled-components';
import moment from 'moment';

const StyledDiv = styled.div`
  margin-top: 30px;
`;

const StyledUserInfo = styled.div`
  padding-top: 10px;
  margin: 0;
`;

const StyledDivInfo = styled.div`
  margin-top: auto;
  margin-left: 10px;
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
`;


const ProfilPublication = ({ username, date, picture }) => {
  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY'); // Formatage de la date avec Moment.js
  };
  return (
    <StyledDiv>
      <StyledDivInfo>
        <Profil src={picture} />
        <StyledUserInfo>
          <Username>{username}</Username>
          <Text>{formatDate(date)}</Text>
        </StyledUserInfo>
      </StyledDivInfo>
    </StyledDiv>
  );
};

export default ProfilPublication;
