import React from "react";
import styled from "styled-components";
import Button from "./button";

const ButtonComponent = styled(Button)`
  color: #cfcfcf;
  position: absolute;
  background-color: #ffffff;
  margin: 220px 0 0 1350px;
  font-size: 2em;
  padding: 0.3em 0.5em 0.35em 0.5em;
  z-index: 2;
  &:hover {
    color: #ffffff;
  }
`;

const NextButton = () => {
  return <ButtonComponent>&#x27A1;</ButtonComponent>;
};

export default NextButton;
