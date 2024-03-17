import React, { useState } from "react";
import { Title, Text, Note } from "../../atoms"; 
import styled from 'styled-components';
import GroupNote from "../GroupNote/GroupNote";
import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import fond from '../../../img/alanDetails.jpg';

const StyledDiv = styled.div`
  background-image: url(${fond});
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex; /* Utilisation de flexbox */
  flex-direction: column;
  justify-content: center; /* Centrer horizontalement */
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyleStar = styled.div`
  margin-right: 10px;
  text-align: center;
  padding:2px;
`;

const GameInfo = ({ handler, data, note, icon = <></>, iconSize="20px", ...props }) => {
  const noteStar = () => {
      console.log(note); // Utilisez la valeur de note provenant des props
      switch (note) {
        case "1":
          return (
            <StyledNote>
              <FaStar color="3FA9F9"/>
              {note}/5
            </StyledNote>
          );
        case "2":
          return (
            <StyledNote>
              <StyleStar>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
              </StyleStar>
              {note}/5
            </StyledNote>
          );
        case "3":
          return (
            <StyledNote>
              <StyleStar>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
              </StyleStar>
              {note}/5
            </StyledNote>
          );
        case "4":
          return (
            <StyledNote>
              <StyleStar>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
              </StyleStar>
              {note}/5
            </StyledNote>
          );
        case "5":
          return (
            <StyledNote>
              <StyleStar>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
                <FaStar color="3FA9F9"/>
              </StyleStar>
              {note}/5
            </StyledNote>
          );
        default:
          return null;
      }
    }
return (
  <StyledDiv>
      <Title margin="0" fontSize="32px">Alan Wake II</Title>
      <Title margin="0" fontFamily="Coolvetica" fontSize="20px" color="#846AF8">Genre(s) : Jeu d'horreur</Title>
      <Text>Le studio derrière Control présente un jeu d'horreur et de survie psychologique avec deux protagonistes et deux mondes très différents. Saga Anderson est une agente du FBI talentueuse appelée pour enquêter sur une série de meurtres rituels dans la petite ville de Bright Falls, au nord de la côte ouest des États-Unis.</Text>
      <GroupNote>{noteStar()}</GroupNote> {/* Appel de la fonction noteStar sans paramètre */}
  </StyledDiv>
  );
};

export default GameInfo;
