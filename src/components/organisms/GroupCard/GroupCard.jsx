import React, { useState, useEffect } from "react";
import { Button, Card, Genre, Title, Image } from "../../atoms"; 
import styled from 'styled-components';
import style from "./GroupCard.module.css";
import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import { GroupNote } from "../../molecules";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
  const [games, setGames] = useState([]);
  const { token } = useParams();
  const navigate = useNavigate();

  const handlePageChange = (id) => {
    navigate(`/game/${id}/${token}`);
  };

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/game',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    
    axios.request(config)
    .then((response) => {
      setGames(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [token]);

  return (
    <StyledDiv1>
      <Title fontFamily="'Coolvetica'" fontSize="24px" margin="0 0 8px 0" color="#FFF">{categ}</Title>
      <div className={style.container}>
        {games.map((game, i) => {
          let {note} = game;
          const noteStar = () => {
            /* console.log(note); */
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
              <StyledInfo>
                <StyledTitle>
                  <Title fontFamily="'Exo2" fontSize="16px">{game.name}</Title>
                  <StyledIcon>
                    <FaPlus></FaPlus>
                    <FaHeart></FaHeart>
                  </StyledIcon>
                </StyledTitle>
                  <Genre>
                    {game.genre.map((genre, index) => (
                      <div key={index}>- {genre}</div>
                    ))}
                  </Genre>
                  <GroupNote>{noteStar()}</GroupNote>
                <StyledBtn>
                  <Button width="121px;" height="27px" borderRadius="30px" backgroundColor="#846AF8" text="Plus d'info" onClick={() => handlePageChange(game.id)} />
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
