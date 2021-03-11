import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  margin: 50px auto;
`;

const StyledLoadingElem = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.primary};
  height: 15px;
  width: 15px;
  margin: 7px;
  border-radius: 50%;
  animation: ${({ pulsar }) => {
    if(pulsar === "one") {return "pulsar 0.6s infinite alternate"};
    if(pulsar === "two") {return "pulsar 0.6s 0.2s infinite alternate"};
    if(pulsar === "three") {return "pulsar 0.6s 0.4s infinite alternate"};
}};  

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 20px;
    width: 20px;
    margin: 10px;
  }

  @keyframes pulsar {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.6);
    }
  }
`;

const Loading = () => (
  <StyledLoading>
    <StyledLoadingElem pulsar="one" />
    <StyledLoadingElem pulsar="two" />
    <StyledLoadingElem pulsar="three" />
  </StyledLoading>
);

export default Loading;
