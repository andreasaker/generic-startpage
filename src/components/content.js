import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import ThreeSteps from "./threeSteps";

const ContentWrapper = styled(Wrapper)`
  height: 30em;
  background-color: #ffffff;
  padding: 3em 0 5em 0;
`;

const H2 = styled.h2`
  margin: 2em 0 4em 0;
`;

const Content = ({ header, steps }) => {
  console.log(steps);
  return (
    <ContentWrapper>
      <H2>{header}</H2>
      <ThreeSteps steps={steps} />
    </ContentWrapper>
  );
};

export default Content;
