import React from "react";
import styled from 'styled-components';

const StyledText = styled.p`
    color: #FFFFFF;
    font-size: 14px;
    text-align: justify;
    font-family: 'Montserrat', sans-serif;
    margin:0;
    max-width: 529px;
`;

const Text = ({ ...props }) => {
    return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;