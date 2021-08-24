import React from "react";
import styled from "styled-components";
import media from "./media";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 375px;
  flex-shrink: 0;
  height: inherit;
  background-color: ${(props) => props.color};
  position: relative;
  left: ${(props) => `${props.left}px`};
  transition: all 1s ease;

  ${media.tablet`
  width: 768px;
  &:last-of-type {
    width: 768px;
  }
  `}

  ${media.desktop`
  width: 1130px;
  &:last-of-type {
    width: 1400px;
    img{
      width: 100%;
    }
  }
  `}
`;

//on click move left or right
//position: relative;
//left: -64em;

const Img = styled.img`
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-size: 20px;
  width: 100%;
  text-align: center;
  ${media.tablet`
  text-align: left;
     width: 45%;
    padding: 3em 2em 2em 5em;
  `}
`;

const P = styled.p`
  font-size: 38px;
  font-weight: 700;
  margin: 0 0 1em 0;
  ${media.desktop`
  margin: 1em 0 1em 0; 
  `}
`;

const Canvas = styled.div`
  overflow: hidden;
  width: 0;
  height: auto;
  ${media.tablet`
  height: 100%;
   width: 55%;
  `}
`;

const Review = ({ leftValue, text, subtext, picture, picAlt, color }) => {
  return (
    <Card id="review-card" left={leftValue} color={color}>
      <Box>
        <P>{text}</P>
        <div>{subtext}</div>
      </Box>

      <Canvas>
        <Img src={picture} alt={picAlt} />
      </Canvas>
    </Card>
  );
};

export default Review;
