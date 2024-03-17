import React, { useState, useEffect } from "react";
import { InfoGame, Menu, Comments} from "../../components/organisms";
import styled from "styled-components";

const recommandations = [
  {
    note: "5",
  },
];

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

const comments = [
  {
    paragraph: "Notes",
  },
];

function Details() {
  const [page, setPage] = useState("lemon");

  const handler = (pageName) => {
    setPage(pageName);
  };
  return (
    <>
      <Menu data={menuData} handler={handler}></Menu>
      <InfoGame data={recommandations}/>
      <Comments paragraph={comments}></Comments>
    </>
  );
}

export default Details;
