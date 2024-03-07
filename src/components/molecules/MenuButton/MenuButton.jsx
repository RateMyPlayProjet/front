import React, { useState } from "react";
import { Button } from "../../atoms"; 
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa";

const StyledDiv = styled.div`
  padding-top: 5px;
  align-items: center;
  width: 33%;
  margin: auto;
`;

const MenuButton = ({ handler, data, icon = <></>, ...props }) => {
  const [colorButton, setColorButton] = useState(false);
  const handlePageChange = () => {
    handler(data);
  };
  return (
    <StyledDiv>
      <Button
        onClick={handlePageChange}
        color={colorButton}
        text={props.children}
      ></Button>
    </StyledDiv>
  );
};

export default MenuButton;
