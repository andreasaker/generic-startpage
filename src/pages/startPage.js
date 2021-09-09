import Navbar from "../components/navbar";
import FocusHeader from "../components/focusheader";
import Content from "../components/content";
import CostumerRanking from "../components/costumerRanking";
import CostumerStories from "../components/costumerStories";
import Brands from "../components/brands";
import Newsletterform from "../components/newsletterform";
import Footer from "../components/footer";
import styled from "styled-components";
import SimpleText from "../components/simpleText";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  flex-direction: column;
`;

const StartPage = ({ data }) => {
  return (
    <Wrapper>
      <a id="start" href="/">
        {" "}
      </a>
      <Navbar anchorButtons={data.anchorButtons} />
      <FocusHeader />
      <Content header={data.contentOne.header} steps={data.contentOne.steps} />
      <SimpleText header={data.simpleText.header} text={data.simpleText.text} />
      <Content
        id={data.contentTwo.anchorId}
        header={data.contentTwo.header}
        steps={data.contentTwo.steps}
      />
      <CostumerRanking
        header={data.costumerRanking.header}
        stars={data.costumerRanking.stars}
        text={data.costumerRanking.text}
      />
      <CostumerStories
        id={data.costumerReviews.anchorId}
        reviews={data.costumerReviews.reviews}
      />
      <Brands id={data.brands.anchorId} brands={data.brands.images} />
      <Newsletterform />
      <Footer />
    </Wrapper>
  );
};

export default StartPage;
