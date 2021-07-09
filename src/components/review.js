import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 60em; 
  height:inherit; 
  background-color: gray;
`;

const Img = styled.img`
  height: 100%;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
padding: 2em 2em 2em 2em;
font-size: 28px;
width:45%;
`;

const P = styled.p`
font-size: 38px;
font-weight: 700;
`;

const Canvas = styled.div`
overflow: hidden;
width:55%;
height: 100%;
`;

const Review = (text, subtext, picture) => {
  return (
  <Card>
  <Box>
  <P>"Our dog always come home with a smile."</P>
  <div>Melone & Tim</div>
  </Box>
  
  <Canvas>
  <Img src="happy-corgi.jpg" alt="BIld av huoadg5888 från Pixabay"/>
  </Canvas>
  
  </Card>);
};

export default Review;
