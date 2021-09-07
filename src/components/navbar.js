import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./logo";
import media from "./media";
import LinkButton from "./linkButton";
import { Hamburger, Cross } from "./hamburgerButton";

const Nav = styled.nav`
  width: 100%;
  box-sizing: content-box;
  height: 4em;
  background-color: #ffffff;
  display: flex;
  align-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  box-shadow: 0px 1px 4px #a4a4a4;
  font-size: 16px;
  ${media.desktop`
  max-width: 1600px;
  margin-left: auto;
margin-right: auto;
  height: 5em;
  position: relative;
  box-shadow: none;
  font-size: 16px;
  `}
`;

const Menu = styled.div`
  width: ${(props) => (props.open ? "100%" : "0")};
  height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  background-color: #ffffff;
  z-index: 3;
  position: fixed;
  top: 0;
  padding: 8em 0 0 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: ${(props) =>
    props.open
      ? "opacity 0.3s ease-in-out, height 0s ease-in-out, width 0s ease-in-out"
      : "opacity 0.3s ease-in-out, height 0s ease-in-out 0.3s, width 0s ease-in-out 0.3s"};

  ${media.desktop`
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;
  height: auto;
  opacity: 1;
  background-color: #fff0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  `}
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
  margin: 0.2em 0 0.2em 0;
  ${media.desktop`
  width: auto;
  text-align: left;
  margin: 0 1em 0 1em;
  `}
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = (e) => {
    if (e) {
      e.preventDefault();
    }
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
      <a href="#start">
        <Logo />
      </a>
      <HamburgerState />
      <Menu open={open} id="nav-menu">
        <Ul>
          <Li>
            <a href="#brands">
              <LinkButton onClick={() => handleOpenClose()}>
                Our brands
              </LinkButton>
            </a>
          </Li>
          <Li>
            <a href="#expect">
              <LinkButton onClick={() => handleOpenClose()}>
                What can i expect
              </LinkButton>
            </a>
          </Li>
          <Li>
            <a href="#stories">
              <LinkButton onClick={() => handleOpenClose()}>
                Costumer stories
              </LinkButton>
            </a>
          </Li>
        </Ul>

        <Ul End>
          <Li>
            <LinkButton>Blog</LinkButton>
          </Li>
          <Li>
            <LinkButton>FAQ</LinkButton>
          </Li>
          <Li>
            <LinkButton>Help</LinkButton>
          </Li>
          <Li>
            <LinkButton>Sign in</LinkButton>
          </Li>
        </Ul>
      </Menu>
    </Nav>
  );
};

export default Navbar;
