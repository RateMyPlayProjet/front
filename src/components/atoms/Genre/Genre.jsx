import React from "react";
import styled from "styled-components";
import { FaRegHeart, FaPlus  } from "react-icons/fa";

const StyledDiv = styled.div`
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
`;
const StyledH4 = styled.p`
    ${(props) => props.color ? 'color: '+ props.color + " ; " : "color: white; " };
    ${(props) => props.fontSize ? 'font-size: '+ props.fontSize + " ; " : "font-size: 16px; " };
    ${(props) => props.fontFamily ? 'font-family: '+ props.fontFamily + " ; " : "font-family: 'Montserrat', sans-serif; " };
    ${(props) => props.margin ? 'margin: '+ props.margin + " ; " : "margin: auto;" };
    ${(props) => props.textAlign ? 'text-align: '+ props.textAlign + " ; " : "text-align: left;" };
    ${(props) => props.marginLeft ? 'margin-left: '+ props.marginLeft + " ; " : "" };
    font-weight: normal;
`;
const StyledP = styled.p`
    margin:0;
`;
const Genre = ({...props}) => {
    return(
    <StyledDiv>
        <StyledH4 {...props}>
            Genre(s) : 
            <StyledP {...props}>{props.children}</StyledP>
        </StyledH4>
    </StyledDiv>
    );
}

export default Genre;