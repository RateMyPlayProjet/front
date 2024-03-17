import React, { useState, useEffect } from "react";
import { Button, Card, Genre, Title, Image } from "../../atoms"; 
import styled from 'styled-components';
import style from "./GroupCard.module.css";
import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import { GroupNote } from "../../molecules";
import axios from "axios";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left:20px;
`;

const StyledInfo = styled.div`
  margin-left: 15px;
  width: 100%;
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledBtn = styled.div`
  display: flex;
  float: right;
`;

const StyleStar = styled.div`
  margin-right: 10px;
  text-align: center;
  padding:2px;
`;

const StyledTitle = styled.div`
  display: flex;
`;

const StyledIcon = styled.div`
  display: flex;
  margin-left: 100px;
  align-items: center;
`;

const GroupCard = ({ handler, data, card, icon = <></>, titleGame="", text="",title="", categ="", category, ...props }) => {
  const [titles, setTitles] = useState([]);
  const handlePageChange = () => {
    handler(data);
  };

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/game',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTA2Nzg0OTUsImV4cCI6MTcxMDY4MjA5NSwicm9sZXMiOlsiQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbiJ9.I1rhXvzPRDcIMWzovuEJQ6I7VZJdohJ4sySXAEnnQrkDz4itONMMLcbTDC0_Qr7fKDxXbWB_1vpl2HhT0uFXOyPRRDaJe6mbP-qpAspq2xgd_Kk6PXS40STu5YDc1f1kvLntMOBu2ZVMz1Fu13xH_JEGzJhXxJtsldQBv4Ck2ijEYa_dpSB6ELqXuZWUi-R1ED-HjOwJJAazZjcNHlf5FNbWeC9XMf2cR-fYIKpN1n8zGuQz1Vo0_8xRX6EjJIuW4TSA6lNDcLr_r3Wj2UWOcDEbv8rIxUeuEbooNveWC5CLCoWlMXd2VUbFF4SdYH69VXAxo3ySDdELsgk-qX0l4bkI5A4KZ_cvGAYgZY8eHVnMxFXHS9GvHUj5yCbwJBB_EQwh6JQq83IJ6dYjDJss8YMuUiaNe9cmkK-BdFk_IiSsubtVnyfsRBQ7d_EiaIaicapUe5qBkG6V3XoVxM8AM3Jkl9cFGlVwUeXZHWfe4uWDBia40joPM_buYT4sd4wD2b--t0XuU4DKSI1QNn4AtwAsmOagUgkHYMYJD3GtBoP2Kk5CZ_CJ_BSKEH6uAsgcI4P48DD1owqqy63jgM9tNbQ6gl7r84wNkgdAT4Rc7AcXYI-6CO9rOrm87YrcH_x44qmKnK0AbMz9E87F7MU6WEuW3TAl27OFsu1wXFS30l0'
      }
    };
    
    axios.request(config)
    .then((response) => {
      const gameData = response.data;
      const gameTitles = gameData.map(game => game.name); // Récupérer les noms des jeux
      setTitles(gameTitles); // Mettre à jour le state avec les noms des jeux
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <StyledDiv1>
      <Title fontFamily="'Coolvetica'" fontSize="24px" margin="0 0 8px 0" color="#FFF">{categ}</Title>
      <div className={style.container}>
        {data.map((x, i) => { /* foreach */
          let { text, title, src, note } = x;
          const noteStar = () => {
            console.log(note);
            switch (note) {
              case "1":
                return <StyledNote>
                <FaStar color="3FA9F9"/>
                {note}/5
              </StyledNote>;
                break;
              case "2":
                return <StyledNote>
                  <StyleStar>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                  </StyleStar>
                  {note}/5
                </StyledNote>;
                break;
              case "3":
                return <StyledNote>
                  <StyleStar>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                  </StyleStar>
                  {note}/5
                </StyledNote>;
                break;
              case "4":
                return <StyledNote>
                  <StyleStar>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                  </StyleStar>
                  {note}/5
                </StyledNote>;
                break;
              case "5":
                return <StyledNote>
                  <StyleStar>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                  </StyleStar>
                  {note}/5
                </StyledNote>;
                break;
            }
          }
          return (
            <Card key={i}>
              <Image src={src}></Image>
              <StyledInfo>
                <StyledTitle>
                  {titles.map((title, index) => (
                    <Title fontFamily="'Exo2" fontSize="16px">{title}</Title>
                  ))}
                  <StyledIcon>
                    <FaPlus></FaPlus>
                    <FaHeart></FaHeart>
                  </StyledIcon>
                </StyledTitle>
                <Genre text ={x.text}>{text}</Genre>
                  <GroupNote>{noteStar()}</GroupNote>
                <StyledBtn>
                  <Button width="121px;" height="27px" borderRadius="30px" backgroundColor="#846AF8" text="Plus d'info" onClick={handlePageChange} />
                </StyledBtn>
              </StyledInfo>
              
            </Card>
            
          );
        })}
        
      </div>
    </StyledDiv1>
    
  );
};

export default GroupCard;
