import React from "react";
import styled from "styled-components";
import Button from "./button";
import doggoImage from "../assets/doggo.jpg";
import media from "./media";
import Wrapper from "./wrapper";

const H1 = styled.h1`
  color: white;
  font-size: 55px;
  margin: 0 0 1em 0;
  position: absolute;
`;

const HeaderButton = styled(Button)`
  position: absolute;
  margin: 9em 0 0 0;
  border-width: 4px;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  ${media.widescreen`
    height: auto;
    width: 100%;
    `}
`;

const FocusHeader = () => {
  return (
    <Wrapper>
      <H1>Welcome to a new kind of experience.</H1>
      <HeaderButton>See how we can help you</HeaderButton>
      <Image
        alt="Happy dog on street - picture captured by Pexels"
        src={doggoImage}
      />
    </Wrapper>
  );
};

export default FocusHeader;
