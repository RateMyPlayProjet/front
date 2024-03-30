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


const GroupCard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/category',
      headers: { 
        'Authorization': `Bearer ${token}`
      },
    };
    
    axios.request(config)
    .then((response) => {
      setCategories(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [token]);

  const handleCardClick = (categoryId) => {
    setSelectedCategories([...selectedCategories, categoryId]);
  };

  const handlePageChange = () => {
    const selectedCategoryIds = selectedCategories.join(',');
    navigate(`/rollRover?categories=${selectedCategoryIds}/${token}`);
  };

  return (
    <StyledDiv1>
      <Title margin="0">RollRover</Title>
      <Title margin="0" color="#846AF8" fontFamily="'Coolvetica'" fontSize="36px">Laissez la roue décider pour vous !</Title>
      <Text fontSize="20px" marginTop="20px" width="600px" marginBottom="50px">Choisissez vos genres de jeux préférés et lancez-vous !</Text>
      <StyledRow>
        {categories.map((categ, i) => (
          <ClickableCard
          onClick={() => handleCardClick(categ.id)}
          title={categ.name}
          description={categ.description}/>
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
