import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import ThreeSteps from "./threeSteps";
import { H2default } from "./headers";
import media from "./media";

const ContentWrapper = styled(Wrapper)`
  max-height: 60em;
  background-color: #ffffff;
  padding: 3em 0 4em 0;
  a {
    margin-top: -5em;
    padding-top: 5em;
  }
  ${media.desktop`
    height: 30em;
    padding: 3em 0 5em 0;
  `}
`;

const H2 = styled(H2default)`
  margin: 2em 0.5em 1em 0.5em;
  text-align: center;
  ${media.desktop`
  margin: 2em 0 4em 0;
  `}
`;

const Content = ({ id, header, steps }) => {
  return (
    <ContentWrapper>
      <a id={id} href="/">
        {" "}
      </a>
      {header && <H2>{header}</H2>}
      {steps && <ThreeSteps steps={steps} />}
    </ContentWrapper>
  );
};

export default Content;
