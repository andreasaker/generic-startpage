import React from "react";
import Wrapper from "./wrapper";
import styled from "styled-components";
import media from "./media";

const StyledWrapper = styled(Wrapper)`
  height: 35vh;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1em;
  padding: 0 16px 0 16px;
  ${media.desktop`
  margin: 1em 0 0 0;
    font-size: 2em;
  `}
`;

const H3 = styled.h3`
  margin: 0 0 1em 0;
  font-weight: normal;
  font-size: 0.7em;
  ${media.desktop`
    font-size: 16px;
  `}
`;

const P = styled.p`
  font-size: 2em;
  margin: 0.3em 0 1em 0;
`;

const ranking = (amount) => {
  const stars = [];
  for (let i = 0; i < amount; i++) {
    stars.push(<span key={i}>&#11088;</span>);
  }
  return stars;
};

const CostumerRanking = ({ title, stars, paragraph }) => (
  <StyledWrapper>
    <H2>{title}</H2>
    <P>{ranking(stars)} </P>
    <H3>{paragraph}</H3>
  </StyledWrapper>
);

export default CostumerRanking;
