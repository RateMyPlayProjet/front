import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Wheel } from 'react-custom-roulette';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display:flex;
  justify-content: space-around;
  margin-top: 20px;
`

const Roue = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { selectedGamesIds } = useParams();
  const [gameNames, setGameNames] = useState([]);
  const gameIds = selectedGamesIds ? selectedGamesIds.split(",") : [];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataForGameIds = async () => {
      const requests = [];
  
      gameIds.forEach((gameId) => {
        const config = {
          method: 'get',
          url: `http://localhost:8000/api/game/${gameId}`,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        };
        requests.push(axios.request(config));
      });
  
      try {
        const responses = await axios.all(requests);
        const gameNames = responses.map(response => response.data.name);
        setGameNames(gameNames);
      } catch (error) {
        console.error("Error fetching games:", error);
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };
  
    if (gameIds.length > 0) {
      fetchDataForGameIds();
    }
  }, []);
  
    
  
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * gameNames.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
    <StyledDiv>
    {gameNames.length > 0 && (
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={gameNames.map((gameName) => ({
          option: gameName, style: {backgroundColor: "rgba(132,106,248)", textColor: "black", fontFamily:"'Exo 2'"}
        }))}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
    )}
    </StyledDiv>
    <StyledDiv>
      <Button 
            backgroundColor="white"
            width="203px"
            height="53px"
            borderRadius="20px"
            colorText="#3D2DEF"
            fontSize="16px"
            border="#3D2DEF"
            onClick={handleSpinClick}
            text="Fais tourner !"
          />
    </StyledDiv>
      
    
    </>
  );
};

export default Roue;
