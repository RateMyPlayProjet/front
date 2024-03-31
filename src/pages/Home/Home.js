import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "../../components/atoms";
import { GroupCard, Menu, AlaUne, RollRover} from "../../components/organisms";

/* const invert = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
}); */

const alaUne = [
  {
    text: "A la Une",
    paragraph: "Suicide Squad : Kill the justice league",
  },
];

function Home() {
  return (
    <>
      <Menu></Menu>
      <AlaUne data={alaUne}/>
      <GroupCard key="1" categ="Nouveautés"></GroupCard>
      <GroupCard key="2" categ="Jeux du moment"></GroupCard>
      <GroupCard key="3" categ="Ma liste"></GroupCard>
    </>
  );
}

export default Home;
