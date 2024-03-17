import React from "react";
import styled from 'styled-components';

const StyledText = styled.p`
    color: #FFFFFF;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
`;

const Username = ({ ...props }) => {
    return <StyledText {...props}>{props.children}</StyledText>;
};

export default Username;