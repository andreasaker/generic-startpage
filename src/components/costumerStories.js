import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Review from "./review";
import Button from "./button";

const StyledWrapper = styled(Wrapper)`
  height: 40vh;
  display: flex;
  justify-content: center;
`;

const ReviewStack = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  max-width: 1400px;
  height: inherit;
  overflow: hidden;
`;

const NextButton = styled(Button)`
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

const PrevButton = styled(NextButton)`
  margin: 220px 0 0 -20px;
`;

const CostumerStories = () => {
  const [leftvalue, setLeftValue] = useState(0);

  const handleNextButton = (e) => {
    e.preventDefault();
    setLeftValue(leftvalue - 64);
  };

  const handlePrevButton = (e) => {
    e.preventDefault();
    setLeftValue(leftvalue + 64);
  };

  return (
    <StyledWrapper>
      <ReviewStack>
        <PrevButton onClick={(e) => handlePrevButton(e)}>⮜</PrevButton>

        <Review leftValue={leftvalue + "em"} />
        <Review leftValue={leftvalue + "em"} />
        <NextButton onClick={(e) => handleNextButton(e)}>⮞</NextButton>
      </ReviewStack>
    </StyledWrapper>
  );
};

export default CostumerStories;
