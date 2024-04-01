import React, { useState, useEffect } from "react";
import { Button, Card, Genre, Title, Image } from "../../atoms"; 
import styled from 'styled-components';
import style from "./GroupCard.module.css";
import { FaStar, FaCheck, FaPlus, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { accountService } from "../../../_services/account.service";
import { useNavigate, useParams } from "react-router-dom";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 20px;
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
  padding: 2px;
`;

const StyledTitle = styled.div`
  display: flex;
`;

const StyledIcon = styled.div`
  display: flex;
  margin-left: 100px;
  align-items: center;
`;

const GroupCard = ({ handler, data, card, titleGame = "", text = "", title = "", categ = "", category, ...props }) => {
  const [games, setGames] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const { userId } = useParams();
  const [iconStates, setIconStates] = useState({}); // État pour chaque bouton
  const navigate = useNavigate();

  const handlePageChange = (id) => {
    navigate(`/game/${userId}/${id}`);
  };
  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/game', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setGames(response.data);
      // Initialiser les états des icônes pour chaque jeu
      const initialIconStates = {};
      response.data.forEach(game => {
        initialIconStates[game.id] = false; // false pour le bouton initial
      });
      setIconStates(initialIconStates);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        // Token expiré, rafraîchissez le token
        try {
          await accountService.refreshToken();
          // Rejouez la requête
          fetchGames();
        } catch (refreshError) {
          console.error('Erreur lors du rafraîchissement du token:', refreshError);
          // Gérer l'erreur de rafraîchissement
        }
      }
    }
  };

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/game',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };
    
    axios.request(config)
    .then((response) => {
      setGames(response.data);
      // Initialiser les états des icônes pour chaque jeu
      const initialIconStates = {};
      response.data.forEach(game => {
        initialIconStates[game.id] = false; // false pour le bouton initial
      });
      setIconStates(initialIconStates);
    })
    .catch((error) => {
      console.log(error);
    });
    
    const fetchData = async () => {
      try {
        let imageData = {};
        for (const game of games) {
          const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:8000/api/images/game/${game.id}`,
            headers: { 
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            responseType: 'arraybuffer'
          };
          if(game.id != null){
            const response = await axios.request(config);
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const imageUrl = URL.createObjectURL(blob);
            imageData[game.id] = imageUrl;
          } else {
            console.log("Ca ne fonctionne pas")
          }
        }
        setImageUrls(imageData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
        if (error.response && error.response.status === 401) {
          // Token expiré, rafraîchissez le token
          try {
            await accountService.refreshToken();
            // Rejouez la requête
            fetchGames();
          } catch (refreshError) {
            console.error('Erreur lors du rafraîchissement du token:', refreshError);
          }
        }
      }
    };
    fetchData();
  });

  const handleButtonClick = (id) => {
    // Mettre à jour le jeu avec l'ID fourni
    console.log(`Bouton cliqué pour le jeu avec l'ID: ${id}`);

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:8000/api/game/${id}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
    // Mettre à jour l'état de l'icône uniquement pour le jeu cliqué
    setIconStates(prevState => ({
      ...prevState,
      [id]: true // Mettre à jour l'état de l'icône pour ce jeu à true
    }));
  };

  return (
    <StyledDiv1>
      <Title fontFamily="'Coolvetica'" fontSize="24px" margin="0 0 8px 0" color="#FFF">{categ}</Title>
      <div className={style.container}>
        {games.map((game, i) => {
          let { note } = game;
          const noteStar = () => {
            switch (note) {
              case "1":
                return (
                  <StyledNote>
                    <FaStar color="3FA9F9"/>
                    {note}/5
                  </StyledNote>
                );
              case "2":
                return (
                  <StyledNote>
                    <StyleStar>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                    </StyleStar>
                    {note}/5
                  </StyledNote>
                );
              case "3":
                return (
                  <StyledNote>
                    <StyleStar>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                    </StyleStar>
                    {note}/5
                  </StyledNote>
                );
              case "4":
                return (
                  <StyledNote>
                    <StyleStar>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                    </StyleStar>
                    {note}/5
                  </StyledNote>
                );
              case "5":
                return (
                  <StyledNote>
                    <StyleStar>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                      <FaStar color="3FA9F9"/>
                    </StyleStar>
                    {note}/5
                  </StyledNote>
                );
              default:
                return null;
            }
          };
          return (
            <Card key={i}>
              <Image src={imageUrls[game.id]}></Image>
              <StyledInfo>
                <StyledTitle>
                  <Title fontFamily="'Exo2" fontSize="16px">{game.name}</Title>
                  <StyledIcon>
                    <Button icon={iconStates[game.id] ? <FaCheck /> : <FaPlus />} onClick={() => handleButtonClick(game.id)} />
                    <Button icon={iconStates[game.id] ? <FaHeart /> : <CiHeart />} onClick={() => handleButtonClick(game.id)} />
                  </StyledIcon>
                </StyledTitle>
                  <Genre>
                    {game.genre.map((genre, index) => (
                      <div key={index}>- {genre}</div>
                    ))}
                  </Genre>
                  {noteStar()}
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