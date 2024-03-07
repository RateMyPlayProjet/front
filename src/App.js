import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Menu } from "./components/organisms";
import AlaUne from "./components/organisms/AlaUne/AlaUne";
import { GroupTitle } from "./components/molecules"; // Importez GroupTitle depuis son emplacement correct

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

  const handler = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <Menu data={menuData} handler={handler}></Menu>
      <AlaUne data={alaUne}/>
      {renderPage()}
    </>
  );
}

export default App;
