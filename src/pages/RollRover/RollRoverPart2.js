import React, { useState } from "react";
import { GroupCardGame, Menu} from "../../components/organisms";

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

function RollRoverPart2() {
  const [page, setPage] = useState("notes");

  const renderPage = () => {
    switch (page) {
      case "notes":
        return null;
        break;
      case "rollRover":
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
      <GroupCardGame/>
      {renderPage()}
    </>
  );
}

export default RollRoverPart2;
