import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./logo";
import media from "./media";
import Link from "./link";
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
  ${media.desktop`
  height: 5em;
  position: relative;
  box-shadow: none;
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
  margin: 0.5em 0 0.5em 0;
  ${media.desktop`
  width: auto;
  text-align: left;
  margin: 0 1em 0 1em;
  `}
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
      <Menu open={open} id="nav-menu">
        <Ul>
          <Li>
            <Link>Our brands</Link>
          </Li>
          <Li>
            <Link>Where can i buy</Link>
          </Li>
          <Li>
            <Link>Costumer stories</Link>
          </Li>
        </Ul>

        <Ul End>
          <Li>
            <Link>Blog</Link>
          </Li>
          <Li>
            <Link>FAQ</Link>
          </Li>
          <Li>
            <Link>Help</Link>
          </Li>
          <Li>
            <Link>Sign in</Link>
          </Li>
        </Ul>
      </Menu>
    </Nav>
  );
};

export default Navbar;
