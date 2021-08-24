import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./logo";
import media from "./media";
import Link from "./link";
import { Hamburger, Cross } from "./hamburgerButton";

const Nav = styled.nav`
  width: 100%;
  box-sizing: content-box;
  height: 5em;
  background-color: #ffffff;
  display: flex;
  align-content: center;
  align-items: center;
  ${media.desktop`
  
  `}
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 3;
  position: fixed;
  top: 0;
  padding: 8em 0 0 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: ease-in-out 0.3s opacity;

  ${media.desktop`
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
      <Menu open={open}>
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
