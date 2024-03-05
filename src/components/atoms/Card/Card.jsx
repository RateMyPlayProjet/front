import React from "react";
import style from "./Card.module.css";
import { styled } from "styled-components";
import img1 from '../../../img/alanWakeII.png'

const CardStyle = styled.div`
background-color: ${(props) =>props.theme.secondary ?? "white"};
color:${(props) =>props.theme.primary ?? "white"};
`;

const Card = ({backgroundColor="rgba(90,145,249,0.25)", ...props}) => {
    /* return <CardStyle {...props}>{"Cette card n'a pas de contenu"}</CardStyle>; */
    let content = "Contenu du card"
    return <div className={style.styleCard} style={{backgroundColor:backgroundColor}}>
        <div className={style.flex}>
        <img className={style.img} src={img1} alt="Alan Wake II"/>
            <h1 className={style.title}>
                {props.children || "Cette card n'a pas de contenu"}
            </h1>
        </div>
        
    </div>;
};

export default Card;