import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImgStyle = styled.img`
    width: 100px;
    height: 133.33px;
`;

const Image = ({...props}) => {
    return (
        <>
        <ImgStyle {...props} />
        </>
    );
};

export default Image;
