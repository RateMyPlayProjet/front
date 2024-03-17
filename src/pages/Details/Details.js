import React from "react";
import { InfoGame, Menu} from "../../components/organisms";

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


function Details() {
  /* const [page, setPage] = useState("lemon");

  const handler = (pageName) => {
    setPage(pageName);
  }; */
  return (
    <>
      <Menu data={menuData}></Menu>
      <InfoGame/>
      {/* <Comments paragraph={comments}></Comments> */}
    </>
  );
}

export default Details;
