import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Review from "./review";

const StyledWrapper = styled(Wrapper)`
  height: 35vh;
  align-items: left;
  justify-content: left;
  flex-direction: row;
`;

const CostumerStories = () => {
  return (
    <StyledWrapper>
      <Review />
    </StyledWrapper>
  );
};

export default CostumerStories;
