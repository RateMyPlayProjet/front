import React from 'react';
import { styled} from 'styled-components';
const StyledButton = styled.button`
${(props) => props.height ? 'height: '+ props.height + " ; " : " " };
${(props) => props.width ? 'width: '+ props.width + " ; " : " "};
${(props) => props.colorText ? 'color: '+ props.colorText + " ; " : "color: white"};
${(props) => props.backgroundColor ? 'background-color: '+ props.backgroundColor + " ; " : 'background: none;' };
${(props) => props.borderRadius ? 'border-radius: '+ props.borderRadius + " ; " : '' };
${(props) => props.fontSize ? 'font-size: '+ props.fontSize + " ; " : '' };
${(props) => props.border ? 'border-color: '+ props.border + " ; " : 'border: none;' };
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