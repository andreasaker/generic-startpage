import React from "react";
import Wrapper from "./wrapper";
import styled from "styled-components";
import { H2default, H3default } from "./headers";
import media from "./media";

const StyledWrapper = styled(Wrapper)`
  height: 30vh;
`;

const H2 = styled(H2default)`
  margin: 0;
  font-size: 2em;
  text-align: center;
  ${media.desktop`
  font-size: 1.2em;
    margin: 2em 0 0 0;
  `}
`;

const H3 = styled(H3default)`
  font-weight: normal;
  margin: 1em 0 1em 0;
`;

const SimpleText = ({ header, text }) => (
  <StyledWrapper>
    <H2>{header}</H2>
    <H3>{text}</H3>
  </StyledWrapper>
);

export default SimpleText;
