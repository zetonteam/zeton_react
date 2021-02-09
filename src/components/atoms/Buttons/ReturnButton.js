import styled from "styled-components";
import ARROW_ICON from "../../../images/icons/arrow_back-24px.svg";

const ReturnButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  border: none;
  width: 50px;
  height: 50px;
  transition: 0.2s;
  background-image: url(${ARROW_ICON});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    width: 40px;
    height: 40px;
  }
`;

export default ReturnButton;
