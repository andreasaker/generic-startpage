import React from "react";
import styled from "styled-components";
import Button from "./button";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  align-content: center;
`;

const H1 = styled.h1``;

const FocusHeader = () => {
  return (
    <Wrapper>
      <H1>Welcome to a new kind of experience.</H1>
      <Button>See how we can help you</Button>
    </Wrapper>
  );
};

export default FocusHeader;
