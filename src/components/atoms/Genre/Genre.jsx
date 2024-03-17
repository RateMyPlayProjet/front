import React from "react";
import styled from "styled-components";
import { FaRegHeart, FaPlus  } from "react-icons/fa";

const StyledDiv = styled.div`
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
`;
const StyledH4 = styled.p`
    color: white;
    font-weight: normal;
`;
const StyledP = styled.p`
    margin:0;
`;
const Genre = ({...props}) => {
    return(
    <StyledDiv>
        <StyledH4 {...props}>
            Genre(s)
            <StyledP {...props}>{props.children}</StyledP>
        </StyledH4>
    </StyledDiv>
    );
}

export default Genre;