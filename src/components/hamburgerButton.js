import styled from "styled-components";
import media from "./media";

/*
<Hamburger onClick={(e) => handleOpenClose(e)}>
  <span></span>
  <span></span>
  <span></span>
</Hamburger>
*/

export const Hamburger = styled.button`
  height: 4em;
  width: 4em;
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
    height: 4px;
    width: 100%;
    margin: 6px 0 6px 0;
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
  ${media.desktop`display:none;`}
`;

export const Cross = styled(Hamburger)`
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
      transform: translateY(10px) rotate(47deg);
      //width: 120%;
    }
  }
  @keyframes rotateMiddle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
      //width: 120%;
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
