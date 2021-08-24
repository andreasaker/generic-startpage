import React from "react";
import StepCard from "./stepCard";
import styled from "styled-components";
import media from "./media";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  flex-wrap: wrap;
  margin: 2em 0 2em 0;
  justify-content: center;
  ${media.desktop`
  justify-content: space-evenly;
  `}
`;

const ThreeSteps = ({ steps }) => {
  return (
    <Content>
      {steps.map((e) => {
        return (
          <StepCard
            key={e.id}
            title={e.title}
            text={e.text}
            img_path={e.img_path}
          />
        );
      })}
    </Content>
  );
};

export default ThreeSteps;

//
