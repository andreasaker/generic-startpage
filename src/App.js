import "./App.css";
import Navbar from "./components/navbar";
import FocusHeader from "./components/focusheader";
import Content from "./components/content";
import CostumerRanking from "./components/costumerRanking";
import CostumerStories from "./components/costumerStories";
import Brands from "./components/brands";
import Footer from "./components/footer";
import styled from "styled-components";
import { contentOne, contentTwo } from "./fakeData";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

const App = () => {
  console.log(contentOne);
  return (
    <Wrapper>
      <Navbar />
      <FocusHeader />
      <Content
        header="Reimagine happy dogs with free play-days and their own personal
        caretaker."
        steps={contentOne}
      />
      <Content
        header="We will take care of your dog and in the mean time learn it new tricks!"
        steps={contentTwo}
      />
      <CostumerRanking />
      <CostumerStories />
      <Brands />
      <Footer />
    </Wrapper>
  );
};

export default App;
