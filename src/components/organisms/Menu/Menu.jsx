import React, { useState, useEffect } from "react";
import { Logo, Profil, Button } from "../../atoms";
import { MenuButton } from "../../molecules";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import MenuProfil from "../../molecules/MenuProfil/MenuProfil";

const StyledDiv = styled.div`
  background-color: ${props => props.isNightMode ? "black" : "white"};
  height: 70px;
  color: ${props => props.isNightMode ? "white" : "black"};
  display: flex;  
  align-items: center; /* Pour centrer le texte verticalement */
`;


const StyledLink = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display:flex;
  justify-content: space-around;
  width: 50%;
`;

const Menu = () => {
  const logoText = "Rate My Play";
  const [imageUrls, setImageUrls] = useState({});
  const { userId } = useParams();
  const [isNightMode, setIsNightMode] = useState(true); // Ajout de l'état du mode nuit
  const navigate = useNavigate();

  const home = `/home/${userId}`
  const handleNightMode = () => {
    setIsNightMode(prevMode => !prevMode); // Inverser l'état du mode nuit
  };

  const menuData = [
    {
      text: "Notes",
      data: "notes",
      path: "/notes",
    },
    {
      text: "RollRover",
      data: "rollRover",
      path: `/rollRover`,
    },
    {
      text: "Ma liste",
      data: "liste",
      path: "/liste",
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
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          responseType: 'arraybuffer'
        };
        if(userId != null){
          const response = await axios.request(config);
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(blob);
          imageData[userId] = imageUrl;
        }
        setImageUrls(imageData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };
    fetchData();
  }, [userId]);

  return (
    <StyledDiv isNightMode={isNightMode}>
      <Link to={home}>
        <Logo text={logoText} />
      </Link>
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
      <MenuProfil handler={handleNightMode} />
      <Link to="/profile">
        <Button icon={<Profil src={imageUrls[userId]}/>}></Button>
      </Link>
    </StyledDiv>
  );
};

export default Menu;