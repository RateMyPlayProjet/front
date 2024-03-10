import React, { useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    height:35px;
    width: 300px;
    font-size: 14px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: rgba(255,255,250,0.5);
`;

const InputText = () => {
    const [value, setValue] = useState("");
    const handleText = (e) =>{
        if(value !== e.target.value){
            setValue(e.target.value);
        }
    };
  return <StyledInput /* onChange={handleText} */ />;
  
}

export default InputText;
