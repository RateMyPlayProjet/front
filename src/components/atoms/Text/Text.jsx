import React from "react";
import styled from 'styled-components';

const StyledText = styled.p`
    color: #FFFFFF;
    ${(props) => props.fontSize ? 'font-size: '+ props.fontSize + " ; " : "font-size: 14px;" };
    text-align: justify;
    font-family: 'Montserrat', sans-serif;
    margin:0;
    ${(props) => props.marginTop ? 'margin-top: '+ props.marginTop + " ; " : "" };
    ${(props) => props.marginBottom ? 'margin-bottom: '+ props.marginBottom + " ; " : "" };
    ${(props) => props.width ? 'max-width: '+ props.width + " ; " : "width: 529px;" };
`;

const Text = ({ ...props }) => {
    return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;