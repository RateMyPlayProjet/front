import React, { useState, useEffect } from "react";
import { Profil, Username, Text } from "../../atoms"; 
import axios from "axios";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import moment from 'moment';

const StyledDiv = styled.div`
  margin-top: 30px;
`;

const StyledUserInfo = styled.div`
  margin: 0;
`;

const StyledDivInfo = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
`;


const ProfilPublication = () => {
  const [notices, setNotices] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [note, setNote] = useState(null);
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
          const pictures = notice.user.picture;
          if(pictures != null){
            const response = await axios.request(config);
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const imageUrl = URL.createObjectURL(blob);
            userData[notice.user.id] = imageUrl;
          }
          
        }
        setImageUrls(userData);
        setNote(notices[0].note)
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
      }
    };
    fetchData();
  }, [token]);

  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY'); // Formatage de la date avec Moment.js
  };
  return (
    <StyledDiv>
      {notices.map((notice, i) => (
        <StyledDiv key={i}>
          <StyledDivInfo>
            {notice.user.id && (
              <>
                <Profil src={imageUrls[notice.user.id]} />
                <StyledUserInfo>
                  <Username>{notice.user.username}</Username>
                  <Text>{formatDate(notice.createAt)}</Text>
                </StyledUserInfo>
                
              </>
            )}
          </StyledDivInfo>
        </StyledDiv> 
      ))}
    </StyledDiv>
  );
};

export default ProfilPublication;
