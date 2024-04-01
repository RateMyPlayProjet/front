import React from "react";
import { Button } from "../../atoms"; 
import styled from 'styled-components';
import { FaHeart } from "react-icons/fa";
import { MdModeNight } from "react-icons/md";

const StyledDiv = styled.div`
  width: 26%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: end;
`;

const MenuProfil = ({ handler, data, icon = <></>, iconSize="20px", isNightMode, ...props }) => {
  const handlePageChange = () => {
    handler(data);
  };

  const handleSunButtonClick = () => {
    handler();
  };

  return (
    <StyledDiv>
      <Button
        onClick={handleSunButtonClick}
        icon={<MdModeNight color={isNightMode ? 'white' : '#3FA9F9'} size={iconSize}/>}
      ></Button>
      <Button
        onClick={handlePageChange}
        icon={<FaHeart color="#3FA9F9" size={iconSize}/>}
      ></Button>
    </StyledDiv>
  );
};

export default MenuProfil;
