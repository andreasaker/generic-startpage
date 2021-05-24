import React from "react";
import StepCard from "./stepCard";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-evenly;
  margin: 2em 0 2em 0;
`;

const ThreeSteps = ({ steps }) => {
  console.log(steps);
  return (
    <Content>
      {steps.map((e) => {
        const imgpath = `../assets/${e.img_path}`;
        console.log(imgpath);
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
