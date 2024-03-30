import React, { useState } from "react";
import axios from 'axios';
import { Authentification } from "../../components/organisms";
import styled from "styled-components";
import fond from "../../img/fondLogin.png";

const StyledDiv = styled.div`
    background-image: url(${fond});
    height: 100vh; /* Assure que le fond s'étend sur toute la hauteur de la fenêtre */
    background-size: cover; /* Ajuste la taille de l'image pour couvrir toute la zone */
    background-position: center; /* Centre l'image */
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Pour éviter que le formulaire ne se soumette de manière conventionnelle

    try {
      const response = await axios.post('http://localhost:8000/api/login_check', {
        username: username,
        password: password,
      });
      console.log(response.data); // Traitez la réponse du backend ici
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <>
      <StyledDiv>
        <Authentification 
          onSubmit={handleSubmit}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </StyledDiv>

    </>
  );
}

export default Login;
