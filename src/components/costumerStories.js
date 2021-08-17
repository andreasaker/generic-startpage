import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Review from "./review";
import Button from "./button";
import media from "./media";

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
  width: 100%;
  height: inherit;
  overflow: hidden;
  ${media.desktop`
  max-width: 1400px;
  `}
`;

const NextButton = styled(Button)`
  color: #cfcfcf;
  position: absolute;
  background-color: #ffffff;
  margin: 220px 0 0 0px;
  font-size: 2em;
  padding: 0.3em 0.5em 0.35em 0.5em;
  z-index: 2;
  box-shadow: 8px 7px 16px #3737376b;
  &:hover {
    color: #ffffff;
  }
  ${media.desktop`
  margin: 220px 0 0 1350px;
  `}
`;

const PrevButton = styled(NextButton)`
  margin: 220px 0 0 -20px;
`;

/**
 *
 * @param {*} text
 * @param {*} subtext
 * @param {*} picture
 * @param {*} picAlt
 * @param {*} color
 * @returns review component for every object
 */
const CostumerStories = ({ reviews }) => {
  const [leftvalue, setLeftValue] = useState(0);
  const [reviewLength, setReviewLength] = useState(reviews.length);
  const [selectedReview, setSelectedReview] = useState(1);

  const handleNextButton = (e) => {
    e.preventDefault();
    if (selectedReview !== reviewLength) {
      setLeftValue(leftvalue - 1130);
      setSelectedReview(selectedReview + 1);
    }
  };

  const handlePrevButton = (e) => {
    e.preventDefault();
    if (selectedReview !== 1) {
      setLeftValue(leftvalue + 1130);
      setSelectedReview(selectedReview - 1);
    }
  };

  useEffect(() => {
    setReviewLength(reviews.length);
  }, [reviews]);

  return (
    <StyledWrapper>
      <ReviewStack>
        <PrevButton onClick={(e) => handlePrevButton(e)}>⮜</PrevButton>
        {reviews.map((r, i) => {
          return (
            <Review
              key={i}
              leftValue={leftvalue}
              text={r.text}
              subtext={r.subtext}
              picture={r.picture}
              picAlt={r.picAlt}
              color={r.color}
            />
          );
        })}

        <NextButton onClick={(e) => handleNextButton(e)}>⮞</NextButton>
      </ReviewStack>
    </StyledWrapper>
  );
};

export default CostumerStories;
