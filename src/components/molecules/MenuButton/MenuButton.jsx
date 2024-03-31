import React, { useState } from "react";
import { Button } from "../../atoms"; 
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa";

const StyledDiv = styled.div`
  display:flex;
  justify-content: space-between;
`;

const MenuButton = ({ handler, data, icon = <></>, ...props }) => {
  const handlePageChange = () => {
    handler(data);
  };
  return (
    <StyledDiv>
      <Button
        onClick={handlePageChange}
        colorText="white"
        fontSize="18px"
        text={props.children}
      ></Button>
    </StyledDiv>
  );
};

export default MenuButton;
