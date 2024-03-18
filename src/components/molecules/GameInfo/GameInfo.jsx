import React, { useState, useEffect } from "react";
import { Title, Text, Genre } from "../../atoms"; 
import styled from 'styled-components';
import GroupNote from "../GroupNote/GroupNote";
import fond from '../../../img/alanDetails.jpg';
import { FaStar } from "react-icons/fa";
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
  const [game, setGame] = useState([]); // Initialisez l'état local game à null

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
  };
  return (
    <StyledDiv>
      {game && (
        <>
          <Title margin="0" marginLeft="15px" fontSize="32px">{game.name}</Title>
          <Genre margin="0" marginLeft="15px" fontFamily="Coolvetica" fontSize="20px" color="#846AF8"> 
            {game.genre && game.genre.join(", ")}
          </Genre>
          <Text>{game.description}</Text>
          <GroupNote>{noteStar(game.note)}</GroupNote>
        </>
      )}
    </StyledDiv>
  );
};

export default GameInfo;
