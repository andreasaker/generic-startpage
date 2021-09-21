import React from "react";
import styled from "styled-components";
import Button from "./button";
import media from "./media";
import Wrapper from "./wrapper";

const StyledWrapper = styled(Wrapper)`
  margin: 64px 0 0 0;
  background-color: #000000;
  ${media.desktop`
  margin: 0;
  `}
`;

const H1 = styled.h1`
  font-size: 30px;
  text-align: center;
  color: white;
  padding: 0 16px 30% 16px;
  position: absolute;
  z-index: 1;
  ${media.desktop`
  padding: 0 16px 7% 16px;
  font-size: 55px;
  margin: 0 0 1em 0;
  `}
`;

const HeaderButton = styled(Button)`
  position: absolute;
  margin-top: 20%;
  border-width: 4px;
  z-index: 1;
  ${media.desktop`
  margin: 4em 0 0 0;
  `}
`;

const Image = styled.img`
  max-height: 330px;
  height: 100%;
  width: auto;
  opacity: 0.8;
  ${media.tablet`
  max-height: none;
    `}
  ${media.desktop`
    height: auto;
    width: 100%;
    opacity: 0.9;
    `}
`;

const FocusHeader = ({ header }) => {
  return (
    <StyledWrapper>
      <H1>{header.title}</H1>
      <HeaderButton>{header.buttonName}</HeaderButton>
      <Image alt={header.imgAlt} src={header.imgLink} />
    </StyledWrapper>
  );
};

export default FocusHeader;
