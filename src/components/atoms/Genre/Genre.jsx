import React from "react";
import styled from "styled-components";
import { FaRegHeart, FaPlus  } from "react-icons/fa";

const StyledDiv = styled.div`
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: normal;
`;
const StyleH4 = styled.h4`
    color: white
`;
const Genre = ({genre = "", text="", ...props}) => {
    return(
    <StyledDiv>
        <StyleH4 {...props}>
            Genre(s)
            <p {...props}>- {text}</p>
        </StyleH4>
    </StyledDiv>
    );
}

export default Genre;