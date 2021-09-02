import React from "react";
import styled from "styled-components";
import Button from "./button";
import doggoImage from "../assets/doggo.jpg";
import media from "./media";
import Wrapper from "./wrapper";

const StyledWrapper = styled(Wrapper)`
  margin: 4em 0 0 0;
  ${media.desktop`
  margin: 0;
  `}
`;

const H1 = styled.h1`
  font-size: 30px;
  color: white;
  padding: 0.5em;
  margin: 0 0 25% 0;
  position: absolute;
  ${media.desktop`
  font-size: 55px;
  margin: 0 0 1em 0;
  `}
`;

const HeaderButton = styled(Button)`
  position: absolute;
  margin: 25% 0 0 0;
  border-width: 4px;
  ${media.desktop`
  margin: 9em 0 0 0;
  `}
`;

const Image = styled.img`
  max-height: 40vh;
  height: 100%;
  width: auto;
  ${media.tablet`
  max-height: none;
    `}
  ${media.desktop`
    height: auto;
    width: 100%;
    `}
`;

const FocusHeader = () => {
  return (
    <StyledWrapper>
      <H1>Welcome to a new kind of experience.</H1>
      <HeaderButton>See how we can help you</HeaderButton>
      <Image
        alt="Happy dog on street - picture captured by Pexels"
        src={doggoImage}
      />
    </StyledWrapper>
  );
};

export default FocusHeader;
