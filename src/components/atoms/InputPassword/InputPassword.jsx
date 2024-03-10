import React, { useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
${(props) => props.height ? 'height: '+ props.height + " ; " : "height:35px;" };
${(props) => props.width ? 'width: '+ props.width + " ; " : "width: 300px;" };
    font-size: 14px;
    border-radius: 10px;
    color: #333;
    background-color: rgba(255,255,250,0.5);
`;

const InputPassword = ({icon =(<></>), text="",  ...props}) => {

  return <StyledInput type="password" {...props} />;
  
}

export default InputPassword;
