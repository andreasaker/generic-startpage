import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import { H2default, H3default } from "./headers";
import media from "./media";

import Button from "./button";

const StyledWrapper = styled(Wrapper)`
  height: 30em;
`;

const H2 = styled(H2default)`
  margin: 0 0 0.5em 0;
`;

const H3 = styled(H3default)`
  color: #485460;
  padding: 0 0.5em 0 0.5em;
  margin: 0 0 2.5em 0;
  text-align: center;
  ${media.desktop`
  text-align: left;
  `}
`;

const Form = styled.form``;

const Input = styled.input`
  width: 11em;
  padding: 0.5em 5em 0.5em 0.2em;
  border: 0;
  border-bottom: solid 2px #808e9b;
  font-size: 1.2em;
  color: #485460;
  letter-spacing: 1px;
  ::placeholder {
    color: #485460;
    opacity: 1;
  }
  :focus {
    outline: none !important;
  }
  ${media.desktop`
    width: 15em;
    font-size: 1.3em;
  `}
`;

const SubmitButton = styled(Button)`
  font-size: 1.2em;
  padding: 0.8em;
  padding: 0.5em;
  color: #485460;
  border: 0;
  margin: 0 0 0 -4.5em;
  font-weight: normal;
  &:hover {
    color: #fdae33;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
  }
  ${media.desktop`
    padding: 0.5em;
    font-size: 1.3em;
  `}
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
        <SubmitButton type="submit">Join us</SubmitButton>
      </Form>
    </StyledWrapper>
  );
};

export default Newsletterform;
