import React, { useState } from "react";
import "./App.css";
import { GroupCard, Menu, AlaUne} from "./components/organisms";
import src from './img/SilentHill.png';

const invert = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
});

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

const card = [
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

const alaUne = [
  {
    text: "A la Une",
    paragraph: "Suicide Squad : Kill the justice league",
  },
];

function App() {
  const [page, setPage] = useState("lemon");

  const renderPage = () => {
    switch (page) {
      case "carrot":
        return (
          <div>
            {/* <Clock /> */}
          </div>
        );
        break;
      case "lemon":
        return <div>Lemon</div>;
        break;

      default:
      case "chili":
        return <div>Chilly</div>;
        break;
    }
  };
  /* const noteStar = () => {
    switch (note) {
      case "1":
        return (
          <div>
           
          </div>
        );
        break;
      case "2":
        return <div>Lemon</div>;
        break;
      case "3":
        return <div>Chilly</div>;
        break;
      case "4":
        return <div>Chilly</div>;
        break;
      case "5":
        return <div>Chilly</div>;
        break;
    }
}}; */
  const stars = card["0"].note;
  /* console.log(stars); */
  const handler = (pageName) => {
    setPage(pageName);
  };
  return (
    <>
      <Menu data={menuData} handler={handler}></Menu>
      <AlaUne data={alaUne}/>
      <GroupCard key="1" data={card}></GroupCard>
      <GroupCard key="2" data={card}></GroupCard>
      <GroupCard key="3" data={card}></GroupCard>
      {renderPage()}
    </>
  );
}

export default App;
