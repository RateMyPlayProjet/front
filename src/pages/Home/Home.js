import React, { useState } from "react";
import "./Home.css";
import { ThemeProvider, styled } from "styled-components";
import { NightModeSwitch } from "../../components/molecules";
import { GroupCard, Menu, AlaUne, RollRover} from "../../components/organisms";

const night = {
  primary: "white",
  secondary: "#282c34",
};

const day = {
  primary: "#282c34",
  secondary: "white",
};

const StyledAppContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  height: 100vh;
  width: 100vw;
`;
const alaUne = [
  {
    text: "A la Une",
    paragraph: "Suicide Squad : Kill the justice league",
  },
];

function Home() {
  const isNightMode = true; // Définissez votre état du mode nuit ici
  const invert = () => (isNightMode ? night : day);
  return (
    <>
    <ThemeProvider theme={invert(isNightMode)}>
      <StyledAppContainer>
        <Menu>
        </Menu>
        <AlaUne data={alaUne}/>
        <GroupCard key="1" categ="Nouveautés"></GroupCard>
        <GroupCard key="2" categ="Jeux du moment"></GroupCard>
        <GroupCard key="3" categ="Ma liste"></GroupCard>
      </StyledAppContainer>
    </ThemeProvider>
    </>
  );
}

export default Home;
