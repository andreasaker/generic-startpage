import styled from "styled-components";
import media from "./media";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 40vh;
  background-color: #ffffff;
  overflow: hidden;

  ${media.tablet`
  max-height: 60vh;
  `}
  ${media.desktop`
  max-height: 80vh;
  `}
`;

export default Wrapper;
