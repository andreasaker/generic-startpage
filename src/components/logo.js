import React from "react";
import styled from "styled-components";
import image from "../assets/logo.png";

const Wrapper = styled.div`
  box-sizing: content-box;
  width: 4em;
  height: 4em;
  margin: 0 1em 0 1em;
`;

const LogoImage = styled.img`
  height: inherit;
  width: inherit;
`;

const Logo = () => (
  <Wrapper>
    <LogoImage src={image} />
  </Wrapper>
);

export default Logo;
