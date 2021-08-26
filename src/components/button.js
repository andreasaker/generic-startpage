import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  display: inline-block;
  padding: 1em;
  font-size: 19px;
  font-weight: normal;
  color: #ffffff;
  border: 2px solid #ffffff;
  width: fit-content;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid #fdae33;
    background-color: #fdae33;
    color: #ffffff;
  }
`;

export default Button;
