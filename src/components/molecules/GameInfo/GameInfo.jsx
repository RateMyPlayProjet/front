import React, { useState, useEffect } from "react";
import { Title, Text, Genre } from "../../atoms"; 
import styled from 'styled-components';
import GroupNote from "../GroupNote/GroupNote";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { accountService } from "../../../_services/account.service";

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

const StyledNote = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyleStar = styled.div`
  margin-right: 10px;
  margin-left:10px;
  text-align: center;
  padding:2px;
`;

const GameInfo = ({ handler, data, icon = <></>, iconSize="20px", ...props }) => {
  const [game, setGame] = useState(null);
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:8000/api/game/${id}`,
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };

    axios.request(config)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let imageData = {};
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:8000/api/images/game/${id}`,
          headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          responseType: 'arraybuffer'
        };

        const response = await axios.request(config);
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const imageUrl = URL.createObjectURL(blob);
        imageData[id] = imageUrl;
        setImageUrls(imageData);
        
        
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
      }
    };
    fetchData();
    setNote(game?.notices[0]?.note)
  }, [id, game]);

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
      case 4:
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
          <GroupNote>{noteStar()}</GroupNote>
        </StyledInfo>
      </>
      )}
    </StyledDiv>
  );
};

export default GameInfo;
