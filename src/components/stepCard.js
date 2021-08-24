import React from "react";
import styled from "styled-components";
import { H3default } from "./headers";
import media from "./media";

const StepCardStyle = styled.div`
  width: 16em;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0 1em 0;
  p {
    margin: 0.2em 0 0.2em 0;
  }
  ${media.desktop`
  height: 16em;
  margin: 0;
  p {
    margin: 0.5em 0 0.5em 0;
  }
  `}
`;

const H3 = styled(H3default)`
  margin: 0.7em 0 0 0;
`;

const Img = styled.img`
  max-width: 7em;
  ${media.desktop`max-width: 11em;`}
`;

const Circle = styled.div`
  background-color: #487eb0;
  border-radius: 50%;
  padding: 2em;
`;

/**
 *
 * @param {string} title
 *  @param {string} text
 * @param {string} img_path
 */
const StepCard = (props) => (
  <StepCardStyle>
    <Circle>
      <Img src={props.img_path} />
    </Circle>
    <H3>{props.title}</H3>
    <p>{props.text}</p>
  </StepCardStyle>
);

export default StepCard;
