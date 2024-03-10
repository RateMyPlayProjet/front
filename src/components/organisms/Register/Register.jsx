import React from "react";
import { Form } from "../../molecules";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Register = ({ handler, data }) => {
  return (
    <StyledDiv>
      <Form/>
    </StyledDiv>
  );
};

export default Register;