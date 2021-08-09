import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import { H2default, H3default } from "./headers";
import media from "./media";

import Button from "./button";

const StyledWrapper = styled(Wrapper)`
  height: 20vh;
  ${media.desktop`height: 30vh;`}
`;

const H3 = styled(H3default)`
  font-weight: normal;
  margin: 0 0 0 0;
`;

const Form = styled.form``;

const Input = styled.input``;

const SubmitButton = styled(Button)`
  color: "#cfcfcf";
`;

const Newsletterform = () => {
  return (
    <StyledWrapper>
      <H2default>Want to stay up-to date?</H2default>
      <H3>
        Sign up to our newsletter and you will always know when we are open.
      </H3>
      <Form>
        <Input type="email" />
        <SubmitButton type="submit">Sign up!</SubmitButton>
      </Form>
    </StyledWrapper>
  );
};

export default Newsletterform;
