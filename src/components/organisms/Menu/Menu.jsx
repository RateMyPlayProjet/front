import React, { useState, useEffect } from "react";
import { Logo, Profil, Button } from "../../atoms";
import { MenuButton } from "../../molecules";
import { Link, useParams } from "react-router-dom"; // Importer Link et useParams depuis React Router
import axios from "axios";

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
  const logoText = "Rate My Play";
  const [imageUrls, setImageUrls] = useState({});
  const { token, userId } = useParams(); // Appel de useParams à l'intérieur de la fonction Menu

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        let imageData = {};
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:8000/api/images/user/${userId}`,
          headers: { 
            'Authorization': `Bearer ${token}`
          },
          responseType: 'arraybuffer'
        };
        if(userId != null){
          const response = await axios.request(config);
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(blob);
          imageData[userId] = imageUrl;
        }else{
          console.log("Ca ne fonctionne pas")
        }
        setImageUrls(imageData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
      }
    };
    fetchData();
  }, [userId, token]);

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
        <Button /* onClick={handler} */ icon={<Profil src={imageUrls[userId]}/>}></Button>
      </Link>
    </StyledDiv>
  );
};

export default Menu;
