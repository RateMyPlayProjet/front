import React from "react";
import styled from 'styled-components';

const StyledParagraph = styled.h3`
    color: #846AF8;
    font-size: 36px;
    font-family: 'Coolvetica', sans-serif;
    margin-top:0;
`;

const Paragraph = ({ paragraph = "", ...props }) => {
    return <StyledParagraph {...props}>{paragraph}</StyledParagraph>;
};

export default Paragraph;