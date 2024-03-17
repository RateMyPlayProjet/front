import React, { useState, useEffect } from "react";
import { Title, Text, Note } from "../../atoms"; 
import styled from 'styled-components';
import GroupNote from "../GroupNote/GroupNote";
import fond from '../../../img/alanDetails.jpg';
import axios from "axios";
import { useParams } from "react-router-dom";

const StyledDiv = styled.div`
  background-image: url(${fond});
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex; /* Utilisation de flexbox */
  flex-direction: column;
  justify-content: center; /* Centrer horizontalement */
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyleStar = styled.div`
  margin-right: 10px;
  text-align: center;
  padding:2px;
`;

const GameInfo = ({ handler, data, note, icon = <></>, iconSize="20px", ...props }) => {
  const [game, setGame] = useState(null); // Initialisez l'état local game à null

  const { token, id } = useParams();

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:8000/api/game/${id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
      .then((response) => {
        setGame(response.data); // Mettez à jour l'état local game avec les données de l'API
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, id]); // Assurez-vous de déclencher la requête chaque fois que token ou id change

  const noteStar = (note) => {
    // Votre code de gestion des étoiles de note
  };

  return (
    <StyledDiv>
      {game && ( // Vérifiez si game est défini avant de l'utiliser
        <>
          <Title margin="0" fontSize="32px">{game.name}</Title>
          <Title margin="0" fontFamily="Coolvetica" fontSize="20px" color="#846AF8">Genre(s) : 
            {game.genre.map((genre, index) => (
              <div key={index}>- {genre}</div>
            ))}
          </Title>
          <Text>{game.description}</Text>
          <GroupNote>{noteStar(game.note)}</GroupNote>
        </>
      )}
    </StyledDiv>
  );
};

export default GameInfo;
