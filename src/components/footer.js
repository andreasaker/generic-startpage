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
  color: #d2dae2;
  ${media.desktop`
    height: 40vh;
  `}
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: inherit;
  padding: 0 14em 0 14em;
`;

const LogoBar = styled.div`
  width: 100%;
  padding: 0 3em 0 3em;
`;
const Menu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ${media.desktop`
  width: 70%;
  ul {
    width: 50%;
  }
  `}
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: right;
  ${media.desktop`
  width: 30%;
  `}
`;
const Contact = styled.div`
  width: 100%;
`;
const Social = styled.div`
  width: 100%;
`;

const SocialImg = styled.img`
  width: 2.5em;
  margin: 2em 12px 0 12px;
`;

const Disclaimer = styled.div`
  font-size: 12px;
  a {
    color: #8097ae;
    margin: 0 7px 0 7px;
  }
  ${media.desktop`
  
  `}
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
          <Social>
            <SocialImg src="facebook_logo.png" />
            <SocialImg src="instagram_logo.png" />
            <SocialImg src="twitter_logo.png" />
            <SocialImg src="youtube_logo.png" />
          </Social>
        </Container>
      </SecondWrapper>
      <Disclaimer>
        <a href="https://github.com/andreasaker">
          Site created by Andreas Åker
        </a>
        <a href="https://www.freepik.com/vectors/education">
          Vector created by pch.vector
        </a>
        <a href="https://flatuicolors.com/palette/se">Color palette used</a>
        <a href="https://www.vecteezy.com/free-vector/social-media">
          Social Media Vectors by Vecteezy
        </a>
      </Disclaimer>
    </StyledWrapper>
  );
};

export default Footer;
