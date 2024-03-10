import React, { useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    ${(props) => props.height ? 'height: '+ props.height + " ; " : "height:35px;" };
    ${(props) => props.width ? 'width: '+ props.width + " ; " : "width: 300px;" };
    ${(props) => props.marginLeft ? 'margin-left: '+ props.marginLeft + " ; " : "" };
    font-size: 14px;
    border-radius: 10px;
    color: #333;
    background-color: rgba(255,255,250,0.5);
`;

const InputText = ({icon =(<></>), text="",  ...props}) => {
    const [value, setValue] = useState("");
    const handleText = (e) =>{
        if(value !== e.target.value){
            setValue(e.target.value);
        }
    };
  return <StyledInput {...props} />;
  
}

export default InputText;
