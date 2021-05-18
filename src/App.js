import "./App.css";
import Navbar from "./components/navbar";
import FocusHeader from "./components/focusheader";
import Content from "./components/content";
import CostumerRanking from "./components/costumerRanking";
import CostumerStories from "./components/costumerStories";
import Brands from "./components/brands";
import Footer from "./components/footer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <FocusHeader />
      <Content />
      <CostumerRanking />
      <CostumerStories />
      <Brands />
      <Footer />
    </Wrapper>
  );
};

export default App;
