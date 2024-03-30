import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";

const StyledDiv = styled.div`
    color : #3FA9F9;
    font-family: "Exo 2", sans-serif;
    font-size: 16px;
    width: -webkit-fill-available;
    padding-left: 15px;
    display: flex;

`;

const StyledCard = styled.div`
    min-width: 370px;
    min-height: 156px;
    max-width: 359px;
    border-radius: 15px;
    padding: 15px;
    margin: 10px 15px;
    display:flex;
    background-color: ${({ clickable, isSelected }) =>
      clickable && isSelected ? "rgba(90,145,249,0.65)" : "rgba(90,145,249,0.25)"};
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
    transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ clickable }) =>
      clickable ? "rgba(90,145,249,0.65)" : "rgba(90,145,249,0.25)"};
  }
`;

const ClickableCardForGame = ({ onClick, ...props}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsSelected(!isSelected);
  };

  return (
    <StyledCard
      clickable={onClick ? true : false}
      isSelected={isSelected}
      onClick={handleClick}
    >
        <StyledDiv>
            {props.children || "Cette card n'a pas de contenu"}
        </StyledDiv>
    </StyledCard>
  );
};

export default ClickableCardForGame;
