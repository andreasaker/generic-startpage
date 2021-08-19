import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./logo";
import media from "./media";
import Link from "./link";

const Nav = styled.nav`
  width: 100%;
  box-sizing: content-box;
  height: 5em;
  background-color: #ffffff;
  display: flex;
  align-content: center;
  align-items: center;
`;

const Menu = styled.div`
  //display: ${(props) => (props.open ? "block" : "none")};
  //opacity: ${(props) => (props.open ? 1 : 0)};
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 3;
  position: fixed;
  top: 0;
  padding: 8em 0 0 0;
  transition: ease 0.4s opacity;

  animation-name: fademenu;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  animation-direction: ${(props) => (props.open ? "normal" : "reverse")};
  @keyframes fademenu {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  ${media.desktop`background-color: #fff0;`}
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  ${media.desktop`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.End ? "flex-end" : "flex-start")};
  align-content: center;
  list-style: none;
  margin: 0 1em 0 0;
  `}
`;

const Li = styled.li`
  width: 100%;
  text-align: center;
  margin: 0.5em 0 0.5em 0;
  ${media.desktop`
  margin: 0 1em 0 1em;
  `}
`;

const Hamburger = styled.button`
  height: 4.2em;
  width: 4.2em;
  z-index: 4;
  display: block;
  background-color: #fff0;
  border: 0;
  position: fixed;
  top: 0;
  right: 0;
  margin: 1em;
  cursor: pointer;
  span {
    display: block;
    height: 5px;
    width: 100%;
    margin: 0px 0 4px 0;
    background-color: #a4a4a4;
    position: relative;
  }
  span:nth-child(1) {
    animation-name: rotateTop;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
  span:nth-child(2) {
    animation-name: rotateMiddle;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
  span:nth-child(3) {
    animation-name: fade;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
`;

const Cross = styled(Hamburger)`
  span:nth-child(1) {
    animation-name: rotateTop;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-direction: normal;
  }
  span:nth-child(2) {
    animation-name: rotateMiddle;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-direction: normal;
  }
  span:nth-child(3) {
    animation-name: fade;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-direction: normal;
  }

  @keyframes rotateTop {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(8px) rotate(47deg);
      width: 115%;
    }
  }
  @keyframes rotateMiddle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
      width: 115%;
    }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const HamburgerState = () => {
    if (open) {
      return (
        <Cross onClick={(e) => handleOpenClose(e)}>
          <span></span>
          <span></span>
          <span></span>
        </Cross>
      );
    } else {
      return (
        <Hamburger onClick={(e) => handleOpenClose(e)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      );
    }
  };

  return (
    <Nav>
      <Logo />
      <HamburgerState />
      <Menu open={open}>
        <Ul>
          <Li>
            <Link>Our brands</Link>
          </Li>
          <Li>Where can i buy</Li>
          <Li>Costumer stories</Li>
        </Ul>

        <Ul End>
          <Li>Blog</Li>
          <Li>FAQ</Li>
          <Li>Help</Li>
          <Li>Sign in</Li>
        </Ul>
      </Menu>
    </Nav>
  );
};

export default Navbar;
