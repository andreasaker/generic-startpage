import React from "react";
import styled from "styled-components";
import Logo from "./logo";

const Nav = styled.nav`
  width: 100%;
  box-sizing: content-box;
  height: 5em;
  background-color: #ffffff;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0 3vw 0 3vw;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.End ? "flex-end" : "flex-start")};
  align-content: center;
  list-style: none;
  margin: 0 1em 0 0;
`;

const Li = styled.li`
  margin: 0 1em 0 1em;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo />
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
    </Nav>
  );
};

export default Navbar;
