import React, { useState, useEffect } from "react";
import { Profil, Username, Date } from "../../atoms"; 
import { useParams } from "react-router-dom"; // Importez useParams de react-router-dom
import axios from "axios";
import styled from 'styled-components';

const StyledDiv = styled.div`
  
`;

const StyledDivInfo = styled.div`
  width: 7%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`;

const ProfilPublication = ({ data }) => {
  const [notices, setNotices] = useState([]);
  const { token, id } = useParams(); // Utilisez useParams de react-router-dom
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/notice',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
      .then((response) => {
        setNotices(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <StyledDiv>
      {notices.map((notice, i) => {
        if (notice.game.id == id) {
          return (
            <StyledDiv key={i}>
              {/* <Profil src={x.src}></Profil> */}
              <StyledDivInfo>
                <Username>{notice.user.username}</Username>
              </StyledDivInfo>
            </StyledDiv> 
          );
        } else {
          return null;
        }
      })}
    </StyledDiv>
  );
};

export default ProfilPublication;
