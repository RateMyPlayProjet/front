import React, { useState, useEffect } from "react";
import { Profil, Username } from "../../atoms"; 
import axios from "axios";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const StyledDiv = styled.div``;
const StyledDivInfo = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
`;

const ProfilPublication = () => {
  const [notices, setNotices] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const { token } = useParams(); // Utilisez useParams pour récupérer le token

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData = {};
        // Récupérer les données des publications
        const response = await axios.get("http://localhost:8000/api/notice", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const noticesData = response.data;
        setNotices(noticesData);

        // Récupérer les images des utilisateurs associés à chaque publication
        for (const notice of noticesData) {
          const userId = notice.user.id;
          const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:8000/api/images/user/${userId}`,
            headers: { 
              'Authorization': `Bearer ${token}`
            },
            responseType: 'arraybuffer'
          };
          const response = await axios.request(config);
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(blob);
          userData[userId] = imageUrl;
          console.log(userData[userId])
        }
        setImageUrls(userData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <StyledDiv>
      {notices.map((notice, i) => (
        <StyledDiv key={i}>
          <StyledDivInfo>
            {/* {notice.user.id === 105 && (
              <>
                <Profil src={imageUrls[notice.user.id]} />
                <Username>{notice.user.username}</Username>
              </>
            )} */}
          </StyledDivInfo>
        </StyledDiv> 
      ))}
    </StyledDiv>
  );
};

export default ProfilPublication;
