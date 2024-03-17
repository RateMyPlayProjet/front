import React from 'react';
import { styled } from 'styled-components';

const StyledDate = styled.p`
  ${(props) => props.colorText ? 'color: '+ props.colorText + " ; " : "color: white"};
  ${(props) => props.fontSize ? 'font-size: '+ props.fontSize + " ; " : '' };
  font-family: 'Montserrat', sans-serif;
`;

const Date = ({icon =(<></>), text="",  ...props}) =>{
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    return(
        <StyledDate {...props}>
            {formattedDate} 
        </StyledDate>
    )
}

export default Date;
