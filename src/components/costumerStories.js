import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Review from "./review";

const StyledWrapper = styled(Wrapper)`
  height: 35vh;
  display:flex;
  justify-content: center;
`;

const ReviewStack = styled.div`
  display:flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  max-width: 1400px;
  height:inherit; 
`;

const CostumerStories = () => {
  return (
    <StyledWrapper>
      <ReviewStack>
      <Review />
      <Review />
      </ReviewStack>
    </StyledWrapper>
  );
};

export default CostumerStories;
