import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./logo";
import media from "./media";

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
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 3;
  position: fixed;
  top: 0;
  padding: 8em 0 0 0;
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
  display: block;
  background-color: #fff0;
  border: 0;
  position: fixed;
  top: 0;
  right: 0;
  margin: 1em;
  span {
    display: block;
    height: 8px;
    width: 100%;
    margin: 0px 0 4px 0;
    background-color: #a4a4a4;
  }
`;

const Cross = styled(Hamburger)`
  span:nth-child(1) {
    animation-name: rotateTop;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }
  span:nth-child(2) {
    animation-name: rotateMiddle;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }
  span:nth-child(3) {
    animation-name: fade;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  @keyframes rotateTop {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(60deg);
    }
  }
  @keyframes rotateMiddle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-60deg);
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

const openDrawer = () => {
  const drawer = document.getElementById("drawer");
  drawer.style.display = "block";
  drawer.style.animation = "0.5s slidein ";
};
const closeDrawer = () => {
  const drawer = document.getElementById("drawer");
  drawer.style.animation = "0.5s slideout";
  setTimeout(function () {
    drawer.style.display = "none";
  }, 400);
};

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
      <Menu>
        <HamburgerState />
        <Ul>
          <Li>Our brands</Li>
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
