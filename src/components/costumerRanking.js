import React from "react";
import Wrapper from "./wrapper";
import styled from "styled-components";

const StyledWrapper = styled(Wrapper)`
  height: 35vh;
`;

const H2 = styled.h2`
  margin: 3em 0 0 0;
  font-size: 2em;
`;

const H3 = styled.h3`
  margin: 0 0 1em 0;
  font-weight: normal;
  font-size: 16px;
`;

const P = styled.p`
  font-size: 2em;
  margin: 0.3em 0 1em 0;
`;

const ranking = (amount) => {
  const stars = [];
  for (let i = 0; i < amount; i++) {
    stars.push(<span>&#11088;</span>);
  }
  return stars;
};

const CostumerRanking = ({ header, stars, text }) => (
  <StyledWrapper>
    <H2>{header}</H2>
    <P>{ranking(stars)} </P>
    <H3>{text}</H3>
  </StyledWrapper>
);

export default CostumerRanking;
