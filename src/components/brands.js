import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import media from "./media";

const StyledWrapper = styled(Wrapper)`
  height: 25vh;
  a {
    margin-top: -5em;
    padding-top: 5em;
  }
  ${media.desktop`height: 40vh;`}
`;

const Board = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  ${media.desktop`width: 700px;`}
`;

const Img = styled.img`
  height: 50px;
  width: 100px;
  ${media.desktop`
  height: 100px;
    width: 200px;
    `}
`;

/**
 * Display images of brands, is made for 200x100px images
 * @param {{image: string, imageAlt: array}[]} brands array of objects {image, imageAlt}
 * @returns
 */
const Brands = ({ id, brands }) => {
  return (
    <StyledWrapper>
      <a id={id}></a>
      <Board>
        {brands.map((b, i) => {
          return <Img key={i} src={b.image} alt={b.imageAlt} />;
        })}
      </Board>
    </StyledWrapper>
  );
};

export default Brands;
