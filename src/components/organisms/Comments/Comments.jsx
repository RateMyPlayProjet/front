import React from "react";
import { ProfilPublication, GroupNote } from "../../molecules";
import { Paragraph } from "../../atoms";

import styled from 'styled-components';

const StyledDiv = styled.div`
`;
const StyledDiv1 = styled.div`
    width: 952px;
    min-height: 404px;
    background-color: rgba(90,145,249,0.25);
    margin: 20px;
    border-radius: 15px;

`;

const Comments = ({ data, paragraph="", }) => {
    return (
      <StyledDiv1>
        {/* <ProfilPublication/> */}
        {/* {data.map((x, i) => {
        let {paragraph} = x;
        return (
            <StyledDiv key={i}> 
                <ProfilPublication/>
                <GroupNote></GroupNote>
                <Paragraph paragraph ={x.paragraph}>{paragraph}</Paragraph>
            </StyledDiv> 
        );
    })} */}

      </StyledDiv1>
    );
  };
  

export default Comments;