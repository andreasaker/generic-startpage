import React from "react";
import Wrapper from "./wrapper";
import media from "./media";
import styled from "styled-components";
import Logo from "./logo";
import Link from "./link";

const StyledWrapper = styled(Wrapper)`
  max-height: 60em;
  height: 40em;
  background-color: #485460;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #d2dae2;
  ${media.desktop`
    height: 40vh;
  `}
`;

const SLink = styled(Link)`
  color: #d2dae2;
  text-decoration: none;
`;

const SecondWrapper = styled.div`
  max-width: 1250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: inherit;
  padding: 0 3em 0 3em;
  ${media.desktop`
  padding: 0 14em 0 14em;
  `}
`;

const LogoBar = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 1em 0 1.7em;
  ${media.desktop`
  padding: 0 3em 0 3em;
  `}
`;
const Menu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 2em 0;
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ${media.desktop`
  width: 70%;
  margin: 0;
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
  text-align: left;
  ${media.desktop`
  text-align: right;
  width: 30%;
  `}
`;
const Contact = styled.div`
  width: 100%;
`;
const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${media.desktop`
  justify-content: end;
  `}
`;

const SocialImg = styled.img`
  width: 2.5em;
  margin: 2em 12px 0 12px;
  cursor: pointer;
`;

const Disclaimer = styled.div`
  font-size: 12px;
  margin: 1em;
  text-align: center;
  a {
    color: #8097ae;
    margin: 0 14px 0 0;
  }
  ${media.desktop`
  margin: 0;
  text-align: left;
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
            <li>
              <SLink>Our brands</SLink>
            </li>
            <li>
              <SLink>Where can i buy</SLink>
            </li>
            <li>
              <SLink>Costumer stories</SLink>
            </li>
          </ul>
          <ul>
            <li>
              <SLink>Blog</SLink>
            </li>
            <li>
              <SLink>FAQ</SLink>
            </li>
            <li>
              <SLink>Help</SLink>
            </li>
            <li>
              <SLink>Sign in</SLink>
            </li>
          </ul>
        </Menu>
        <Container>
          <Contact>
            <SLink href="tel:">077-777 77 77</SLink>
          </Contact>
          <Contact>
            <SLink href="mailto: info@doggobrand.io">info@doggobrand.io</SLink>
          </Contact>
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
        <a href="http://www.goodweb.design/sites/Enjoy">
          Site inspired by Enjoy
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
