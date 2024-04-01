import React, { useState, useEffect } from "react";
import { InputText, Text, Button } from "../../atoms"; 
import { ProfilPublication, GroupNote } from "../../molecules";
import axios from "axios";
import style from './Comments.module.css';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";

const StyledDiv = styled.div`
  padding-left:15px;
  padding-top: 5px
`;
const StyleNewComment = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 20px;
`;
const StyledComment = styled.div`
  margin-top : 10px;
  margin-left:10px;
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyleStar = styled.div`
  margin-right: 10px;
  margin-left:10px;
  text-align: center;
  padding:2px;
`;

const Comments = ({iconSize="30px"}) => {
  const [notices, setNotices] = useState([]);
  const [comment, setComment] = useState("");
  const [imageUrls, setImageUrls] = useState({});
  const [note, setNote] = useState(null);
  const { id, userId } = useParams();
  let i = 0;

  const fetchData = async () => {
    try {
      let userData = {};
      const response = await axios.get("http://localhost:8000/api/notice", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const noticesData = response.data;
      const filteredNotices = noticesData.filter(notice => notice.game && notice.game.id === parseInt(id));
      setNotices(filteredNotices);
      
      for (const notice of noticesData) {
        const userId = notice.user.id;
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:8000/api/images/user/${userId}`,
          headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
      setNote(notices[i].note)
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données d'image :", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  

  const noteStar = (note) => {
    switch (note) {
      case 1:
        return <StyledNote>
        <FaStar color="3FA9F9"/>
        {note}/5
      </StyledNote>;
      case 2:
        return <StyledNote>
          <StyleStar>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
          </StyleStar>
          {note}/5
        </StyledNote>;
      case 3:
        return <StyledNote>
          <StyleStar>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
          </StyleStar>
          {note}/5
        </StyledNote>;
      case 4:
        return <StyledNote>
          <StyleStar>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
          </StyleStar>
          {note}/5
        </StyledNote>; 
      case 5:
        return <StyledNote>
          <StyleStar>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
            <FaStar color="3FA9F9"/>
          </StyleStar>
          {note}/5
        </StyledNote>;
      default:
        return null;
    }
  };
  
  const handlePageChange = async() => {
    try {
      const data = {
        "comment": comment,
        "note": 1,
        "gameId": id
      };
  
      const config = {
        method: 'post',
        url: `http://localhost:8000/api/user/${userId}/notices/new`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        data: data
      };
  
      const response = await axios.request(config);
      console.log(response.data);
      // Rafraîchir les commentaires après l'ajout
      fetchData();
    } catch (error) {
      console.error("Erreur lors de la création de la notice :", error);
    }
  };
  return (
    <div className={style.container}>
      {notices.length > 0 ? (
        notices.map((notice, i) => (
          <StyledDiv key={notice.id}>
            <ProfilPublication
              date={notice.createAt} 
              username={notice.user.username}
              picture={imageUrls[notice.user.id]} 
            />
            {notice.user.id && (
              <>
                <GroupNote>{noteStar(notice.note)}</GroupNote>
                <StyledComment>
                  <Text>{notice.comment}</Text>
                </StyledComment>
              </>
            )}
          </StyledDiv>
        ))
      ) : (
        <div>Aucun commentaire disponible.</div>
      )}
      <StyleNewComment>
        <InputText width="878px" value={comment} onChange={(e) => setComment(e.target.value)} />
        <Button
          onClick={handlePageChange}
          icon={<IoIosSend color="#3FA9F9" size={iconSize}/>}
        ></Button>
      </StyleNewComment>
    </div>
  );
};

export default Comments;
