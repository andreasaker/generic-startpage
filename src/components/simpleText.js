import React from "react";
import Wrapper from "./wrapper";
import styled from "styled-components";

const StyledWrapper = styled(Wrapper)`
  height: 30vh;
`;

const H2 = styled.h2`
  margin: 2em 0 0 0;
`;

const H3 = styled.h3`
  margin: 1em 0 1em 0;
  font-weight: normal;
  font-size: 16px;
`;

const SimpleText = ({ header, text }) => (
  <StyledWrapper>
    <H2>{header}</H2>
    <H3>{text}</H3>
  </StyledWrapper>
);

export default SimpleText;
