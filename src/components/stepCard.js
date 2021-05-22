import React from "react";
import styled from "styled-components";

const StepCardStyle = styled.div`
  width: 16em;
  height: 16em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const H3 = styled.h3`
  margin: 0.7em 0 0 0;
`;

const Img = styled.img`
  max-width: 11em;
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
