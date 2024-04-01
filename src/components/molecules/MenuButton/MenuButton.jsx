import React, { useState } from "react";
import { Button } from "../../atoms"; 
import styled from 'styled-components';

const StyledDiv = styled.div`
  display:flex;
  justify-content: space-between;
`;

const MenuButton = ({ handler, data, icon = <></>, ...props }) => {

  return (
    <StyledDiv>
      <Button
        colorText="#3FA9F9"
        fontSize="18px"
        text={props.children}
      ></Button>
    </StyledDiv>
  );
};

export default MenuButton;
