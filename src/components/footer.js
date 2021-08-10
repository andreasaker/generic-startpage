import React from "react";
import Wrapper from "./wrapper";
import media from "./media";
import styled from "styled-components";
import Logo from "./logo";

const StyledWrapper = styled(Wrapper)`
  height: 30vh;
  background-color: #485460;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 3em 0 3em;
  color: #ffffff;
  ${media.desktop`
    height: 40vh;
    padding: 0 3em 0 3em;
  `}
`;

const LogoBar = styled.div`
  width: 100%;
`;
const Menu = styled.nav`
  width: 50%;
  display: flex;
  flex-direction: row;
  ul {
    width: 50%;
    list-style: none;
  }
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Contact = styled.div`
  width: 100%;
`;
const Social = styled.div`
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <LogoBar>
        <Logo />
      </LogoBar>
      <Menu>
        <ul>
          <li>Our brands</li>
          <li>Where can i buy</li>
          <li>Costumer stories</li>
        </ul>
        <ul>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Help</li>
          <li>Sign in</li>
        </ul>
      </Menu>
      <Container>
        <Contact></Contact>
        <Social></Social>
      </Container>
      <a href="https://www.freepik.com/vectors/education">
        Education vector created by pch.vector - www.freepik.com
      </a>{" "}
      Color palette used:{" "}
      <a href="https://flatuicolors.com/palette/se">
        https://flatuicolors.com/palette/se
      </a>
    </StyledWrapper>
  );
};

export default Footer;
