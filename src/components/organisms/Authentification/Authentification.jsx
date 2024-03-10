import React from "react";
import { Auth } from "../../molecules";
import src from "../../../img/fondLogin.png"

import styled from 'styled-components';
import MenuProfil from "../../molecules/MenuProfil/MenuProfil";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Authentification = ({ handler, data }) => {
  return (
    <StyledDiv src={src}>
      <Auth/>
    </StyledDiv>
  );
};

export default Authentification;