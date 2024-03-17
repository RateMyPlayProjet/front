import React from "react";
import style from "./Card.module.css";
import { styled } from "styled-components";
import img1 from '../../../img/cards/alanWakeII.png'

const CardStyle = styled.div`
    min-width: 370px;
    min-height: 156px;
    border-radius: 15px;
    padding: 15px;
    margin: 10px 15px;
    display:flex;
`;

const StyledDiv = styled.div`
    color : #3FA9F9;
    font-family: "Exo 2", sans-serif;
    font-size: 16px;
    width: -webkit-fill-available;
    padding-left: 15px;
    display: flex;

`;


const Card = ({backgroundColor="rgba(90,145,249,0.25)", ...props}) => {
    /* return <CardStyle {...props}>{"Cette card n'a pas de contenu"}</CardStyle>; */
    return (
    <CardStyle style={{backgroundColor:backgroundColor}}>
        <StyledDiv >
            {props.children || "Cette card n'a pas de contenu"}
        </StyledDiv>
    </CardStyle>);
};

export default Card;