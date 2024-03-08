import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    color: white;
    font-size: 24px;
    font-family: 'Coolvetica', sans-serif;
`;

const Section = ({ text = "", ...props })  => {
  return (
    <StyledH3 {...props}>
      {text}
    </StyledH3>
  );
}

export default Section;
