import React, { useState } from "react";
import { Button, Card, Genre, Title, Image } from "../../atoms"; 
import styled from 'styled-components';
import style from "./GroupCard.module.css";
const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const GroupCard = ({ handler, data, icon = <></>, titleGame="", text="",title="", ...props }) => {
  const handlePageChange = () => {
    handler(data);
  };
  return (
    <StyledDiv1>
      <Title fontFamily="'Coolvetica'" fontSize="24px" color="#FFF">Nouveautés</Title>
      <div className={style.container}>
        {data.map((x, i) => { /* foreach */
          let { icon, text, title, data, src } = x;
          return (
            <Card key={i}>
              <Image src={src}></Image>
              <StyledInfo>
                <Title fontFamily="'Exo2" fontSize="16px">{title}</Title>
                <Genre text ={x.text}>{text}</Genre>
                <Button width="121px;" height="27px" borderRadius="30px" backgroundColor="#846AF8" text="Plus d'info" onClick={handlePageChange} />
              </StyledInfo>
              
            </Card>
            
          );
        })}
        
      </div>
    </StyledDiv1>
    
  );
};

export default GroupCard;
