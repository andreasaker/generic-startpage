import "./App.css";
import Navbar from "./components/navbar";
import FocusHeader from "./components/focusheader";
import Content from "./components/content";
import CostumerRanking from "./components/costumerRanking";
import CostumerStories from "./components/costumerStories";
import Brands from "./components/brands";
import Newsletterform from "./components/newsletterform";
import Footer from "./components/footer";
import styled from "styled-components";
import { data } from "./fakeData";
import SimpleText from "./components/simpleText";

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
      <Content
        header="Reimagine happy dogs with free play-days and their own personal
        caretaker."
        steps={data.contentOne}
      />
      <SimpleText
        header="We guarantee you a 100% happy dog!"
        text="Free treats included."
      />
      <Content
        header="We will take care of your dog and in the meantime learn it new tricks!"
        steps={data.contentTwo}
      />
      <CostumerRanking
        header="SEE HOW OTHER COSTUMERS RANK US"
        stars={4}
        text="4 out of 5 stars from 133 customer reviews"
      />
      <CostumerStories reviews={data.reviews} />
      <Brands brands={data.brands} />
      <Newsletterform />
      <Footer />
    </Wrapper>
  );
};

export default App;
