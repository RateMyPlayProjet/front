import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Utilisez useNavigate au lieu de useHistory
import { InputText, Title, Button, InputPassword } from "../../atoms"; 
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

const StyledDivInputName = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

const StyledDivForm = styled.div`
    margin-bottom: 20px;
`;

const StyledDivFormName = styled.div`
    margin-left: 15px;
`;

const Form = ({ handler, data, ...props }) => {
  const navigate = useNavigate(); 

  const handlePageChange = () => {
    navigate("/home");
  };

  return (
    <StyledDiv>
        <Title textAlign="center" fontFamily="'MADE Soulmaze'" fontSize="24px" margin="0 0 8px 0" color="#333">Register</Title>
        <StyledDivForm>
          <StyledDivInputName>
            <StyledDivForm>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Nom :</Title>
              <InputText width="203px"/>
            </StyledDivForm>
            <StyledDivFormName>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Prénom :</Title>
              <InputText width="203px"/>
            </StyledDivFormName>
          </StyledDivInputName>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Email :</Title>
              <InputText width="424px"/>
          </StyledDivInput>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Mot de passe :</Title>
              <InputPassword width="424px"/>
          </StyledDivInput>
          <StyledDivInput>
              <Title fontFamily="'Coolvetica'" fontSize="20px" margin="0 0 8px 0" color="#333">Confirmez votre mot de passe :</Title>
              <InputPassword width="424px"/>
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
        <Link fontFamily="'Coolvetica'" fontSize="14px" margin="0 0 8px 0" color="#333">Vous avez déjà un compte ? Connectez-vous</Link>
    </StyledDiv>
  );
};

export default Form;
