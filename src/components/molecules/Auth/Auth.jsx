import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Utilisez useNavigate au lieu de useHistory
import { InputText, Title, Button } from "../../atoms"; 
import { accountService } from "../../../_services/account.service";
import styled from 'styled-components';
import axios from "axios";

const StyledDiv = styled.div`
    width: 546px;
    height: 546px;
    border-radius: 20px;
    margin-top: 7%;
    background-color: rgb(255,255,255,0.65);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledDivInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const StyledDivForm = styled.div`
    margin-bottom: 20px;
`;

const Auth = ({ handler, data, ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:8000/api/login_check', { username, password })
      .then(response => {
        accountService.saveToken(response.data.token)
        accountService.saveResfreshToken(response.data.refresh_token)
        axios.get(`http://localhost:8000/api/user/${username}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(userResponse => {
          const userId = userResponse.data.id;
          navigate(`/home/${userId}`);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération de l'ID de l'utilisateur:", error);
        });
      })
      .catch(error => {
        console.error("Erreur de connexion:", error);
      });
  };
  

  return (
    <StyledDiv>
        <Title textAlign="center" fontFamily="'MADE Soulmaze'" fontSize="24px" margin="0 0 8px 0" color="#333">Login</Title>
        <StyledDivForm>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Username :</Title>
              <InputText value={username} onChange={(e) => setUsername(e.target.value)} />
          </StyledDivInput>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Mot de passe :</Title>
              <InputText type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </StyledDivInput>
        </StyledDivForm>
        <Button 
          backgroundColor="white"
          width="203px"
          height="53px"
          borderRadius="20px"
          colorText="#3D2DEF"
          fontSize="16px"
          border="#3D2DEF"
          onClick={handleLogin}
          text="Connexion"
        />
        <Link to="/signup" fontFamily="'Coolvetica'" fontSize="14px" margin="0 0 8px 0" color="#333">Vous n'avez pas de compte ? Inscrivez-vous</Link>
    </StyledDiv>
  );
};

export default Auth;
