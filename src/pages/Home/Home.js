import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "../../components/atoms";
import { GroupCard, Menu, AlaUne, RollRover} from "../../components/organisms";

/* const invert = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
}); */

const menuData = [
  {
    text: "Notes",
    data: "notes",
  },
  {
    text: "RollRover",
    data: "rollRover",
  },
  {
    text: "Ma liste",
    data: "liste",
  },
];

const news = [
  {
    note: "5",
    src: "/static/media/alanWakeII.cde56ce5c506a59b34a0.png",
    title: "Alan Wake II",
    text: "Jeu d'horreur",
  },
  {
    note: "2",
    src: "/static/media/SilentHill.21636f1cbe6d1266efa3.png",
    title: "Nouveautés",
    text: "Jeu d'action",
  },
  {
    note: "1",
    src: "/static/media/alanWakeII.cde56ce5c506a59b34a0.png",
    title: "The Last of Us",
    text: "Jeu d'action",
  },
  {
    note: "4",
    src: "/static/media/SilentHill.21636f1cbe6d1266efa3.png",
    title: "Fortnite",
    text: "Jeu d'action",
  },
  {
    note: "3",
    src: "/static/media/alanWakeII.cde56ce5c506a59b34a0.png",
    title: "The Last of Us",
    text: "Jeu d'action",
  },
];

const recommandations = [
  {
    note: "5",
    src: "/static/media/alanWakeII.cde56ce5c506a59b34a0.png",
    title: "Alan Wake II",
    text: "Jeu d'horreur",
  },
  {
    note: "2",
    src: "/static/media/SilentHill.21636f1cbe6d1266efa3.png",
    title: "Nouveautés",
    text: "Jeu d'action",
  },
  {
    note: "1",
    src: "/static/media/alanWakeII.cde56ce5c506a59b34a0.png",
    title: "The Last of Us",
    text: "Jeu d'action",
  },
];

const alaUne = [
  {
    text: "A la Une",
    paragraph: "Suicide Squad : Kill the justice league",
  },
];

function Home() {
  const [page, setPage] = useState("notes");
  const navigate = useNavigate(); 

  const renderPage = () => {
    switch (page) {
      case "notes":
        return (
          <div>
            Hello world !
          </div>
        );
        break;
      case "rollRover":
        navigate('/rollRover');
        return null;
        break;

      default:
      case "liste":
        return <div>Chilly</div>;
        break;
    }
  };
  const handler = (pageName) => {
    setPage(pageName);
  };
  return (
    <>
      <Menu data={menuData} handler={handler}></Menu>
      <AlaUne data={alaUne}/>
      <GroupCard key="1" data={news} categ="Nouveautés"></GroupCard>
      <GroupCard key="2" data={recommandations} categ="Jeux du moment"></GroupCard>
      <GroupCard key="3" data={news} categ="Ma liste"></GroupCard>
      {renderPage()}
    </>
  );
}

export default Home;
