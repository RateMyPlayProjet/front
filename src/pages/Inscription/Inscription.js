import React, { useState, useEffect } from "react";
import { Register } from "../../components/organisms";
import styled from "styled-components";
import fond from "../../img/fondLogin.png";

const StyledDiv = styled.div`
    background-image: url(${fond});
    height: 100vh; /* Assure que le fond s'étend sur toute la hauteur de la fenêtre */
    background-size: cover; /* Ajuste la taille de l'image pour couvrir toute la zone */
    background-position: center; /* Centre l'image */
`;

function Inscription() {
  const [page, setPage] = useState("lemon");

  useEffect(() => {
    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

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
        <Register />
      </StyledDiv>
    </>
  );
}

export default Inscription;
