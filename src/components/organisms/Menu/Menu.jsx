import React from "react";
import { Logo, Profil, Button } from "../../atoms";
import { MenuButton } from "../../molecules";
import src from '../../../img/pp.jpg';

import styled from 'styled-components';
import MenuProfil from "../../molecules/MenuProfil/MenuProfil";

const StyledDiv = styled.div`
  background-color: black;
  height: 70px;
  color:white;
  display:flex;  
`;

const Menu = ({ handler, data }) => {
  const logoText = "Rate My Play"
  return (
    <StyledDiv>
      <Logo text={logoText}/>
      {data.map((x, i) => { /* foreach */
        let { icon, text, data } = x;
        return (
          <MenuButton key={i} handler={handler} icon={icon} data={data}>
            {text}
          </MenuButton>
          
        );
      })}
      <MenuProfil></MenuProfil>
      <Button onClick={handler} icon={<Profil src={src}/>}>
      </Button>
    </StyledDiv>
  );
};

export default Menu;