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

const Page = ({ data, apiData }) => {
  const WhatToRender = () => {
    if (typeof apiData.data !== "undefined") {
      console.log(apiData.data);
      // Retunrar bara ett value inte alla i for
      return apiData.data[0].pagelayout.map((i) => {
        if (i.__component === "category.header") {
          return (
            <p>
              <FocusHeader header={i} />
            </p>
          );
        }
        if (i.__component === "category.threesteps") {
          return <p>{i.title}</p>;
        }
      });
    } else {
      return <p>loading</p>;
    }
  };

  return (
    <Wrapper>
      <a id="start" href="/">
        {" "}
      </a>

      <Navbar anchorButtons={data.anchorButtons} />

      <WhatToRender />
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

export default Page;
