import React from "react";
import { InfoGame, Menu, Comments, PlusInfoGame} from "../../components/organisms";
import styled from "styled-components";
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

const StyledDiv = styled.div`
  height: 70px;
  color:white;
  display:flex;  
`;

function Details() {
  return (
    <>
      <Menu data={menuData}></Menu>
      <InfoGame/>
      <StyledDiv>
        <Comments></Comments>
        <PlusInfoGame/>
      </StyledDiv>
      
    </>
  );
}

export default Details;
