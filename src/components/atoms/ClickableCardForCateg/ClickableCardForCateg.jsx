import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";

const StyledCard = styled.div`
    min-width: 370px;
    min-height: 124px;
    max-width: 359px;
    border-radius: 15px;
    padding: 15px;
    margin: 10px 15px;
    background-color: ${({ clickable, isSelected }) =>
      clickable && isSelected ? "#3FA9F9" : "rgba(132,106,248,0.75)"};
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
    transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ clickable }) =>
      clickable ? "#3FA9F9" : "rgba(132,106,248,0.75)"};
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
`;

const IconContainer = styled.div`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClickableCardForCateg = ({ onClick, title, description }) => {
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
    <StyledTitle>
        <Title>{title}</Title>
        <IconContainer isSelected={isSelected}>
        <FaCheck />
      </IconContainer>
    </StyledTitle>
      <Description>{description}</Description>
    </StyledCard>
  );
};

export default ClickableCardForCateg;
