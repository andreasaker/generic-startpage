import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 1130px;
  flex-shrink: 0;
  height: inherit;
  background-color: ${(props) => props.color};
  position: relative;
  left: ${(props) => `${props.left}px`};
  transition: all 1s ease;

  &:last-of-type {
    width: 1400px;
  }
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
  padding: 5em 2em 2em 5em;
  font-size: 20px;
  width: 45%;
`;

const P = styled.p`
  font-size: 38px;
  font-weight: 700;
`;

const Canvas = styled.div`
  overflow: hidden;
  width: 55%;
  height: 100%;
`;

const Review = ({ leftValue, text, subtext, picture, picAlt, color }) => {
  return (
    <Card left={leftValue} color={color}>
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
