import React, { useState, useEffect } from "react";
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
  const [page, setPage] = useState("lemon");

  useEffect(() => {
    // Réinitialiser l'arrière-plan du body lors du démontage du composant
    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []); // Effet s'exécute uniquement une fois lors du montage initial

  const renderPage = () => {
    switch (page) {
      case "carrot":
        return (
          <div>
            {/* <Clock /> */}
          </div>
        );
      case "lemon":
        return <div>Lemon</div>;
      default:
      case "chili":
        return <div>Chilly</div>;
    }
  };

  const handler = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <StyledDiv>
        <Authentification />
      </StyledDiv>
    </>
  );
}

export default Login;
