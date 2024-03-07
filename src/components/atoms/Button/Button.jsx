import React from 'react';
import { styled} from 'styled-components';
const StyledButton = styled.button`
${(props) => props.height ? 'height: '+ props.height + " ; " : " " };
${(props) => props.width ? 'width: '+ props.width + " ; " : " "};
background: none;
color: white;
border: none;
font-family: 'Coolvetica', sans-serif;
`;

const Button = ({icon =(<></>), text="",  ...props}) =>{
    return(
        <StyledButton {...props}>
            {icon}
            {text}
        </StyledButton>
    )
}

export default Button;