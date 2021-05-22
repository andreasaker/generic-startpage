import React from "react";
import StepCard from "./stepCard";
import styled from "styled-components";
import dogone from "../assets/happy-dog.png";
import dogtwo from "../assets/dog-eating.png";
import dogthree from "../assets/dog-butterfly.png";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-evenly;
  margin: 2em 0 2em 0;
`;

const ThreeSteps = () => {
  return (
    <Content>
      <StepCard
        title="Header 1"
        text="Description of the first step!"
        img_path={dogone}
      />
      <StepCard
        title="Header 2"
        text="Description of the second awseome step!"
        img_path={dogtwo}
      />
      <StepCard
        title="Header 3"
        text="Description of the third step with lots of power!"
        img_path={dogthree}
      />
    </Content>
  );
};

export default ThreeSteps;

//
