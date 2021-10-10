import React from 'react';
import styled from 'styled-components';
import { UseButton } from '../Buttons/LightButtons';

export const StyledLiElement = styled.li`
  position: relative;
  list-style: none;
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-size: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;

export const LiDateElem = styled(StyledLiElement)`
  flex-direction: column;
  line-height: 0.5;
  padding: 0.7rem 1.5rem;
  padding-bottom: 0;
  text-align: left;
  align-items: stretch;
`;

const LiElement = (props) => {
  return (
    <StyledLiElement>
      <TextRow>
        {props.text} <span>-{props.points}</span>
      </TextRow>
      <UseButton>Wykorzystaj</UseButton>
    </StyledLiElement>
  );
};

export default LiElement;