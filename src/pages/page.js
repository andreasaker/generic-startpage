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
      console.log(apiData.data[0].pagelayout);
      // Retunrar bara ett value inte alla i for
      return apiData.data[0].pagelayout.map((i) => {
        if (i.__component === "category.header") {
          return <FocusHeader key={i.id} header={i} />;
        }
        if (i.__component === "category.threesteps") {
          return <Content key={i.id} content={i} />;
        }
        if (i.__component === "category.simple-text") {
          return <SimpleText key={i.id} title={i.title} text={i.text} />;
        }
        if (i.__component === "category.costumer-stories") {
          return (
            <CostumerStories key={i.id} id={i.anchorId} reviews={i.stories} />
          );
        }
        if (i.__component === "category.costumer-ranking") {
          //Blir fel här, samma ID
          return (
            <CostumerRanking
              key={i.id}
              title={i.title}
              stars={i.text}
              paragraph={i.paragraph}
            />
          );
        }
        if (i.__component === "category.brands") {
          return <Brands key={i.id} id={i.anchorId} brands={i.images} />;
        } else {
          return null;
        }
      });
    } else {
      return <p>Found no layout :(</p>;
    }
  };

  return (
    <Wrapper>
      <a id="start" href="/">
        {" "}
      </a>

      <Navbar anchorButtons={data.anchorButtons} />

      <WhatToRender />

      <Newsletterform />
      <Footer />
    </Wrapper>
  );
};

export default Page;

/*
<Content
        id={data.contentTwo.anchorId}
        header={data.contentTwo.header}
        steps={data.contentTwo.steps}
      />
*/
