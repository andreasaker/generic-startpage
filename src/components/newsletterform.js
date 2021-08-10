import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import { H2default, H3default } from "./headers";
import media from "./media";

import Button from "./button";

const StyledWrapper = styled(Wrapper)`
  height: 15vh;
  ${media.desktop`height: 20vh;`}
`;

const H2 = styled(H2default)`
  margin: 0.5em 0 0.5em 0;
`;

const H3 = styled(H3default)`
  color: #485460;
  margin: 0 0 2em 0;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 15em;
  padding: 0.5em 5em 0.5em 0.2em;
  border: 0;
  border-bottom: solid 2px #808e9b;
  font-size: 1.1em;
  color: #485460;
  letter-spacing: 1px;
  ::placeholder {
    color: #485460;
    opacity: 1;
  }
  :focus {
    outline: none !important;
  }
`;

const SubmitButton = styled(Button)`
  padding: 0.5em;
  color: #485460;
  border: 0;
  margin: 0 0 0 -4.5em;
  &:hover {
    color: #485460;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
  }
`;

const Newsletterform = () => {
  return (
    <StyledWrapper>
      <H2>Want to stay up-to date?</H2>
      <H3>
        Sign up to our newsletter and you will always know when we are open.
      </H3>
      <Form>
        <Input type="email" placeholder="Enter email" />
        <SubmitButton type="submit">Sign up!</SubmitButton>
      </Form>
    </StyledWrapper>
  );
};

export default Newsletterform;
