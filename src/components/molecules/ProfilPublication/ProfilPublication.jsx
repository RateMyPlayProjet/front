import React from "react";
import { Profil, Username, Date } from "../../atoms"; 
import axios from "axios";
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 7%;
  margin-top: auto;
  margin-left: auto;
  display: flex
`;

const StyledDivInfo = styled.div`
  width: 7%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`;

const ProfilPublication = ({ data }) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/api/notice',
    headers: { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTA3NTQzMTYsImV4cCI6MTcxMDc1NzkxNiwicm9sZXMiOlsiQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbiJ9.qXzYw-ZvYX9VpNgaQfXlfFVoZxryjNhe4tbmFRKY9vGo8W1DOm6n2MtxJKO8ss5IIK2vZqI7hllrWfsK6A9DURqE5_CjjvgnJ6u88JaGcm2zz2dhgcu6P6n00onynMNjGlI66rYTzlm9-1CMJpe8Jm4hHYK9SGaoskwgPki9YkC5UlHgfa4cxDnd1HTcpZYM1qjWmCRCUAzJY6BXeCHf9S99jvtcHIGSNnfQMjq_hPAI4qKwr74Qz5RCqNl_8G3-UBc8UIDXLckzAOJtXmO6YqosDvEVOaxaWIqKMVMj9X8aTZldBaiKtl7ptggl9SWbwFIGpoNvkhLT9YbOFp-aeUcwChRDtoLoVFp3lP2tAm1b6dSABPN8CQrzBWKOavp8svN6ws0h_aOSkMzNibf96McEY93A52IYxaHqub5E13b8Clv6j_v4MLcIq-ozEUVEguWh9xF6SuWC0wfu_zE6BwTIwaSyY1RusQXsDrT6q18qUlnhnQ_lDbN758kb01fbsU-UQQV9Bb99mdlB0ZuMk0nrOVsoFZlz0JR3E6CDAxesxQlQ69dvd_zMaiyOD1mdqbmmx8XQFzr4k7UG1VFM2Ct9WIFxWI_upIzZfDiw2HoAgDaKDgr5nppqztbfihbFyIRTpaW2hEANEE0n5Ydif40gkXohvYHooViffELq6OU'
    }
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <StyledDiv>
    {data.map((x, i) => { /* foreach */
        let { src, username } = x;
        return (
            <StyledDiv>
                <Profil src={src}></Profil>
                <StyledDivInfo>
                    <Username>{username}</Username>
                    <Date></Date>
                </StyledDivInfo>
            </StyledDiv> 
        );
    })}
    
    </StyledDiv>
  );
};

export default ProfilPublication;
