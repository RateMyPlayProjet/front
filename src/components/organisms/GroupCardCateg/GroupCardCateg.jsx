import React, { useState, useEffect } from "react";
import { Card, ClickableCard, Title, Button, Text } from "../../atoms"; 
import styled from 'styled-components';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left:20px;
`;

const StyledBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledInfo = styled.div`
  margin-left: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledTitle = styled.div`
  display: flex;
`;

const StyledClickableCard = styled(Card)`
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
  ${({ isSelected }) => isSelected && `
    background-color: #f0f0f0;
  `}
`;

const GroupCard = ({ data, categ }) => {
  const [games, setGames] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/game", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setGames(response.data);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des jeux :", error);
      }
    };
    fetchGames();
  }, [token]);

  const handleCardClick = (category, index) => {
    setSelectedCategory(category);
    setSelectedCardIndex(index);
  };

  const handlePageChange = () => {
    navigate(`/rollRover/${selectedCategory}/${token}`);
  };

  return (
    <StyledDiv1>
      <Title margin="0">RollRover</Title>
      <Title margin="0" color="#846AF8" fontFamily="'Coolvetica'" fontSize="36px">Laissez la roue décider pour vous !</Title>
      <Text fontSize="20px" marginTop="20px" width="600px" marginBottom="50px">Choisissez vos genres de jeux préférés et lancez-vous !</Text>
      <StyledRow>
        {games.map((game, i) => (
          <ClickableCard
          onClick={() => handleCardClick(categ, i)}
          title="C'est moi chef"
          /* title={game.title} */
          description={game.description}/>
        ))}
      </StyledRow>
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

export default GroupCard;
