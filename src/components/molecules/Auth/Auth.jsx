import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Utilisez useNavigate au lieu de useHistory
import { InputText, Title, Button } from "../../atoms"; 
import styled from 'styled-components';


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
  const navigate = useNavigate(); 

  const handlePageChange = () => {
    navigate("/home");
  };

  return (
    <StyledDiv>
        <Title textAlign="center" fontFamily="'MADE Soulmaze'" fontSize="24px" margin="0 0 8px 0" color="#333">Login</Title>
        <StyledDivForm>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Email:</Title>
              <InputText/>
          </StyledDivInput>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Mot de passe :</Title>
              <InputText/>
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
          onClick={handlePageChange}
          text="Connexion"
        />
        <Link fontFamily="'Coolvetica'" fontSize="14px" margin="0 0 8px 0" color="#333">Vous n'avez pas de compte ? Inscrivez-vous</Link>
    </StyledDiv>
  );
};

export default Auth;
