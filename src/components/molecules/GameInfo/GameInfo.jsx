import React, { useState, useEffect } from "react";
import { Title, Text, Genre } from "../../atoms"; 
import styled from 'styled-components';
import GroupNote from "../GroupNote/GroupNote";
import axios from "axios";
import { useParams } from "react-router-dom";

const StyledDiv = styled.div`
  position: relative;
  height: 300px;
`;

const StyledInfo = styled.div`
  position: relative;
  z-index: 6;
  width: 80%;
  left: 60px;
`;

const StyledDivFond = styled.div`
  position: relative;
  z-index: 1;
  height: 6em;
  width: 100%;
  margin-bottom: 1em;
`;

const StyledFond = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const GameInfo = ({ handler, data, note, icon = <></>, iconSize="20px", ...props }) => {
  const [game, setGame] = useState(null);
  const [fondBackgroundImage, setFondBackgroundImage] = useState(null);
  const { token, id } = useParams();
  const [imageUrls, setImageUrls] = useState({});

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
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let imageData = {};
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:8000/api/images/game/${id}`,
          headers: { 
            'Authorization': `Bearer ${token}`
          },
          responseType: 'arraybuffer'
        };

        const response = await axios.request(config);
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const imageUrl = URL.createObjectURL(blob);
        imageData[id] = imageUrl;
        console.log(imageUrl)
        setImageUrls(imageData);
        
        
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
      }
    };
    fetchData();
  }, [token, id, game]);

  const noteStar = (note) => {
    // Your noteStar function code...
  };
  return (
    <StyledDiv>
      {game && (
      <>
        
        <StyledDivFond>
          {imageUrls[id] && <StyledFond src={imageUrls[id]} alt="Game" />}
        </StyledDivFond>
        <StyledInfo>
          <Title margin="0" marginLeft="15px" fontSize="32px">{game.name}</Title>
          <Genre margin="0" marginLeft="15px" fontFamily="Coolvetica" fontSize="20px" color="#846AF8"> 
            {game.genre && game.genre.join(", ")}
          </Genre>
          <Text>{game.description}</Text>
          <GroupNote>{noteStar(game.note)}</GroupNote>
        </StyledInfo>
      </>
      )}
    </StyledDiv>
  );
};

export default GameInfo;
