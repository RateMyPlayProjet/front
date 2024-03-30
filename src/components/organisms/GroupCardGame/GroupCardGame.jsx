import React, { useState, useEffect } from "react";
import { ClickableCardForGame, Title, Button, Text, Genre, Image } from "../../atoms"; 
import styled from 'styled-components';
import { GroupNote } from "../../molecules";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left:20px;
`;

const StyledDivCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left:20px;
`;
const StyledDiv = styled.div`
    display : flex;
    flex-direction: column;
`;

const StyledInfo = styled.div`
  margin-left: 15px;
  width: 100%;
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledBtnInfo = styled.div`
  display: flex;
  float: right;
`;

const StyleStar = styled.div`
  margin-right: 10px;
  text-align: center;
  padding:2px;
`;

const StyledTitle = styled.div`
  display: flex;
`;

const StyledBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCard = styled.div`
  display: flex;
  
`;

const GroupCardGame = () => {
  const [categories, setCategories] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const { token, selectedCategoryIds } = useParams();
  const navigate = useNavigate();

  const categoryIds = selectedCategoryIds.split(",");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryPromises = categoryIds.map((categoryId) => {
          return axios.get(`http://localhost:8000/api/category/${categoryId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        });
        
        const categoryResponses = await Promise.all(categoryPromises);
        const categoryData = categoryResponses.map((response) => response.data);
        setCategories(categoryData);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
  
    fetchCategories();
  }, []);
  

  const handleCardClick = (gameId) => {
    setSelectedGames([...selectedGames, gameId]);
  };

  const handlePageChange = () => {
    const selectedGamesIds = selectedGames.join(',');
    navigate(`/rollRover/games/${selectedGamesIds}/${token}`);
  };

  return (
    <StyledDiv1>
      <Title margin="0">RollRover</Title>
      <Title margin="0" color="#846AF8" fontFamily="'Coolvetica'" fontSize="36px">Laissez la roue décider pour vous !</Title>
      <Text fontSize="20px" marginTop="20px" width="600px" marginBottom="50px">Choisissez !</Text>
      <StyledDiv>
        {categories.map((categ, index) => (
          <StyledDivCard key={index}>
            <Title fontFamily="'Coolvetica'" fontSize="24px" margin="0 0 8px 0" color="#FFF">{categ.name}</Title>
            <StyledCard>
            {categ.games.map((game, gameIndex) => (
              <ClickableCardForGame
                key={gameIndex}
                onClick={() => handleCardClick(game.id)}
                title={game.name}
                description={game.description}
              >
                <Image src={imageUrls[game.name]}></Image>
                <StyledInfo>
                  <StyledTitle>
                    <Title fontFamily="'Exo2" fontSize="16px">{game.name}</Title>
                  </StyledTitle>
                  <Genre>
                    {game.genre.map((genre, index) => (
                      <div key={index}>- {genre}</div>
                    ))}
                  </Genre>
                  {/* <GroupNote>{noteStar()}</GroupNote> */}
                  <StyledBtnInfo>
                    <Button width="121px;" height="27px" borderRadius="30px" backgroundColor="#846AF8" text="Plus d'info" onClick={() => handlePageChange(game.id)} />
                  </StyledBtnInfo>
                </StyledInfo>
              </ClickableCardForGame>
            ))}
            </StyledCard>
          </StyledDivCard>
        ))}
      </StyledDiv>
      <StyledBtn>
        <Button 
          backgroundColor="white"
          width="203px"
          height="53px"
          borderRadius="20px"
          colorText="#3D2DEF"
          fontSize="16px"
          border="#3D2DEF"
          onClick={handlePageChange}
          text="Suivant"
        />
      </StyledBtn>
    </StyledDiv1>
  );
};

export default GroupCardGame;
