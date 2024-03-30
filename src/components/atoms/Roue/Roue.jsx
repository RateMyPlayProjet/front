import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import { Wheel } from 'react-custom-roulette';
import axios from "axios";
import { useParams } from "react-router-dom";

const data = [
  { option: '0' },
  { option: '1' },
];

const Roue = () => {
  const [games, setGames] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { token, selectedGamesIds } = useParams();
  const [gameNames, setGameNames] = useState([]);
  const gameIds = selectedGamesIds ? selectedGamesIds.split(",") : [];

  useEffect(() => {
    const fetchDataForGameIds = async () => {
      const requests = [];
  
      gameIds.forEach((gameId) => {
        const config = {
          method: 'get',
          url: `http://localhost:8000/api/game/${gameId}`,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        requests.push(axios.request(config));
      });
  
      try {
        const responses = await axios.all(requests);
        const gameNames = responses.map(response => response.data.name);
        setGameNames(gameNames);
        console.log(gameNames)
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
  
    if (gameIds.length > 0) {
      fetchDataForGameIds();
    }
  }, [token]);
  
    
  
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
    {gameNames.length > 0 && (
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={gameNames.map((gameName) => ({
          option: gameName,
        }))}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
    )}

      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};

export default Roue;
