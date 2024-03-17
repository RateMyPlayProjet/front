import React from "react";
import { Title, Paragraph } from "../../atoms";
import { GroupTitle, MenuButton } from "../../molecules";
import style from '../../atoms/Card/Card.module.css';
import fond from '../../../img/image.png'

import styled from 'styled-components';

const StyledDiv = styled.div`
    padding:26px;
    margin-top: 56px;
    margin-left: 20px;
`;
const StyledDiv1 = styled.div`
  background-image: url(${fond});
  background-size: cover;
  background-position: center;
  display:flex;  
`;

const AlaUne = ({ data }) => {
  return (
    <StyledDiv1>
        {data.map((x, i) => { /* foreach */
        let { text, paragraph } = x;
        return (
            <StyledDiv>
                <Title fontSize="48px" text ={x.text}>{text}</Title>
                <Paragraph paragraph ={x.paragraph}>{paragraph}</Paragraph> 
            </StyledDiv> 
        );
      })}
    </StyledDiv1>
    
  );
};

export default AlaUne;