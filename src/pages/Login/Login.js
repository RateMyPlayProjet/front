import React, { useState } from "react";
import { GroupCard, Menu, AlaUne} from "../../components/organisms";

function Login() {
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
      {/* <Menu data={menuData} handler={handler}></Menu>
      <AlaUne data={alaUne}/>
      <GroupCard key="1" data={news} categ="Nouveautés"></GroupCard>
      <GroupCard key="2" data={recommandations} categ="Jeux du moment"></GroupCard>
      <GroupCard key="3" data={news} categ="Ma liste"></GroupCard>
      {renderPage()} */}
    </>
  );
}

export default Login;
