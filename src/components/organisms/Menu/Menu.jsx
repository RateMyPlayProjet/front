import React from "react";
import { Logo, Profil, Button } from "../../atoms";
import { MenuButton } from "../../molecules";
import { Link, useParams } from "react-router-dom"; // Importer Link et useParams depuis React Router
import src from '../../../img/pp.jpg';

import styled from 'styled-components';
import MenuProfil from "../../molecules/MenuProfil/MenuProfil";

const StyledDiv = styled.div`
  background-color: black;
  height: 70px;
  color:white;
  display:flex;  
`;

const StyledLink = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display:flex;
  justify-content: space-around;
  width: 50%;
`;

const Menu = (/* { handler, data } */) => {
  const logoText = "Rate My Play"
  const { token } = useParams(); // Appel de useParams à l'intérieur de la fonction Menu

  const menuData = [
    {
      text: "Notes",
      data: "notes",
      path: "/notes", // Chemin vers la page "Notes"
    },
    {
      text: "RollRover",
      data: "rollRover",
      path: `/rollRover/${token}`, // Chemin vers la page "RollRover"
    },
    {
      text: "Ma liste",
      data: "liste",
      path: "/liste", // Chemin vers la page "Ma liste"
    },
  ];

  return (
    <StyledDiv>
      <Logo text={logoText}/>
      <StyledLink>
      {menuData.map((menuItem, i) => {
        const { text, path } = menuItem;
        return (
            <Link key={i} to={path}>
              <MenuButton>{text}</MenuButton>
            </Link>
        );
      })}
      </StyledLink>
      <MenuProfil></MenuProfil>
      <Link to="/profile"> {/* Rediriger vers la page de profil */}
        <Button /* onClick={handler} */ icon={<Profil src={src}/>}></Button>
      </Link>
    </StyledDiv>
  );
};

export default Menu;
