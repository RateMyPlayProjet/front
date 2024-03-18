import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    ${(props) => props.color ? 'color: '+ props.color + " ; " : "color: #3FA9F9; " };
    ${(props) => props.fontSize ? 'font-size: '+ props.fontSize + " ; " : "font-size: 48px; " };
    ${(props) => props.fontFamily ? 'font-family: '+ props.fontFamily + " ; " : "font-family: 'MADE Soulmaze', sans-serif;" };
    ${(props) => props.margin ? 'margin: '+ props.margin + " ; " : "margin: auto;" };
    ${(props) => props.textAlign ? 'text-align: '+ props.textAlign + " ; " : "text-align: left;" };
    ${(props) => props.marginLeft ? 'margin-left: '+ props.marginLeft + " ; " : "" };
    ${(props) => props.width ? 'width: '+ props.width + " ; " : "" };
`;

const Title = ({ text = "", ...props })  => {
  return (
    <StyledH1 {...props}>
      {props.children}
    </StyledH1>
  );
}

export default Title;
