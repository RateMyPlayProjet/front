import React from "react";
// import style from "./Card.module.css";
import { styled } from "styled-components";
import img1 from '../../../img/cards/alanWakeII.png';

const ImgStyle = styled.img`
    width: 100px;
    height: 133.33px;
`;


const Image = ({...props}) => {
    return <ImgStyle {...props} />;
};

export default Image;
