import styled from "styled-components";
import Button from "./button";
import media from "./media";

const LinkButton = styled(Button)`
  font-size: inherit;
  padding: 0.8em;
  padding: 0.5em;
  color: #1e272e;
  border: 0;
  font-weight: normal;
  &:hover {
    color: #fdae33;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
  }
  ${media.desktop`
    padding: 0.5em;
  `}
`;

export default LinkButton;
