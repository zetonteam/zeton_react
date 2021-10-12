import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Buttons/Button';
import CustomArrow from '../../atoms/Buttons/CustomArrow';

const StyledBlueArrow = styled(CustomArrow)`
  &::before {
    border-top: var(--size) solid #4169e1;
  }
`;

const StyledButtonBar = styled(Button)`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  cursor: pointer;
`;

const ButtonBar = ({ text, onClick }) => {
  return (
    <StyledButtonBar onClick={onClick}>
      {text} <StyledBlueArrow />
    </StyledButtonBar>
  );
};

export default ButtonBar;
