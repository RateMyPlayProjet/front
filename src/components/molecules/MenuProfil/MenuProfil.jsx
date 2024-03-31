import React, { useState } from "react";
import { Button, Profil } from "../../atoms"; 
import styled from 'styled-components';
import {FaHeart, FaSearch} from "react-icons/fa";
import src from '../../../img/pp.jpg';

const StyledDiv = styled.div`
  width: 26%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: end;
`;

const MenuProfil = ({ handler, data, icon = <></>, iconSize="20px", ...props }) => {
  const [colorButton, setColorButton] = useState(false);
  const handlePageChange = () => {
    handler(data);
  };
  return (
    <StyledDiv>
      <Button
        onClick={handlePageChange}
        icon={<FaSearch color="#3FA9F9" size={iconSize}/>}
      ></Button>
      <Button
        onClick={handlePageChange}
        icon={<FaHeart color="#3FA9F9" size={iconSize}/>}
      ></Button>
    </StyledDiv>
  );
};

export default MenuProfil;
