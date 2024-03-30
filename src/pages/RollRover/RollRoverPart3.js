import React, { useState } from "react";
import { RollRover, Menu} from "../../components/organisms";

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

function RollRoverPart3() {
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
      <RollRover/>
      {renderPage()}
    </>
  );
}

export default RollRoverPart3;
