import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    color: #3FA9F9;
    font-size: 48px;
    font-family: 'MADE Soulmaze', sans-serif;
`;

const Title = ({ text = "", ...props })  => {
  console.log(text)
  return (
    <StyledH1 {...props}>
      {text}
    </StyledH1>
  );
}

export default Title;
