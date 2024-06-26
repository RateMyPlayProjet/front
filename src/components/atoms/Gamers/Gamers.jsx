import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  color: white;
`;

const Gamers = ({ icon = (<></>), ...props }) => {
  const [game, setGame] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
      setGame(response.data)
    })
    .catch((error) => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/");
      }
    });
  }, [id]);
  return (
    <StyledDiv {...props}>
      {icon}
      {game && <span>{game.nbJoueurs}</span>}
    </StyledDiv>
  );
}

export default Gamers;
