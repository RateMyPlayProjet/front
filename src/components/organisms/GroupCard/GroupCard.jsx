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
  const [imageUrls, setImageUrls] = useState({});
  const { token } = useParams();
  const navigate = useNavigate();

  const handlePageChange = (id) => {
    navigate(`/game/${id}/${token}`);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let imageData = {};
        for (const game of games) {
          const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:8000/api/images/game/${game.id}`,
            headers: { 
              'Authorization': `Bearer ${token}`
            },
            responseType: 'arraybuffer'
          };
          console.log(config.url)
          if(game.id == 96){
            const response = await axios.request(config);
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const imageUrl = URL.createObjectURL(blob);
            imageData[game.id] = imageUrl;
          }else{
            console.log("Ca ne fonctionne pas")
          }
          

        }
        setImageUrls(imageData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
      }
    };
    fetchData();
  }, [games, token]);

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
            switch (note) {
              case "1":
                return <StyledNote>
                <FaStar color="3FA9F9"/>
                {note}/5
              </StyledNote>;
              case "2":
                return <StyledNote>
                  <StyleStar>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                  </StyleStar>
                  {note}/5
                </StyledNote>;
              case "3":
                return <StyledNote>
                  <StyleStar>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                    <FaStar color="3FA9F9"/>
                  </StyleStar>
                  {note}/5
                </StyledNote>;
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
              default:
                return null;
            }
          }
          return (
            <Card key={i}>
              <Image src={imageUrls[game.id]}></Image>
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
