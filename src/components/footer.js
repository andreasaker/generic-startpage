import React from "react";
import Wrapper from "./wrapper";
import media from "./media";
import styled from "styled-components";
import Logo from "./logo";

const StyledWrapper = styled(Wrapper)`
  height: 30vh;
  background-color: #1e272e;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #d2dae2;
  ${media.desktop`
    height: 40vh;
  `}
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 14em 0 14em;
`;

const LogoBar = styled.div`
  width: 100%;
  padding: 0 3em 0 3em;
`;
const Menu = styled.nav`
  width: 70%;
  display: flex;
  flex-direction: row;
  ul {
    width: 50%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: right;
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
      <SecondWrapper>
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
          <Contact>077-777 77 77 info@doggobrand.io</Contact>
          <Social>Facebook Instagram Twitter Youtube</Social>
        </Container>
      </SecondWrapper>
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
