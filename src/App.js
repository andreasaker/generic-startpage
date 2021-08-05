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
import SimpleText from "./components/simpleText";

const data = {
  reviews: [
    {
      text: "My dog will not leave this place!",
      subtext: "Tom Havard",
      picture: "happy-corgi.jpg",
      picAlt: "BIld av huoadg5888 från Pixabay",
      color: "#ef5777",
    },
    {
      text: "Dog heaven!",
      subtext: "Ashly Gorgon",
      picture: "happy-corgi.jpg",
      picAlt: "BIld av huoadg5888 från Pixabay",
      color: "#ffc048",
    },
    {
      text: "This is a company you can trust your dog with.",
      subtext: "Sally Mostard",
      picture: "happy-corgi.jpg",
      picAlt: "BIld av huoadg5888 från Pixabay",
      color: "#9ce5fd",
    },
  ],
};

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
      <SimpleText
        header="We guarantee you a 100% happy dog!"
        text="Free treats included."
      />
      <Content
        header="We will take care of your dog and in the meantime learn it new tricks!"
        steps={contentTwo}
      />
      <CostumerRanking
        header="SEE HOW OTHER COSTUMERS RANK US"
        stars={4}
        text="4 out of 5 stars from 133 customer reviews"
      />
      <CostumerStories reviews={data.reviews} />
      <Brands />
      <Footer />
    </Wrapper>
  );
};

export default App;
