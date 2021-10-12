import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Buttons/Button';
import CustomArrow from '../../atoms/Buttons/CustomArrow';

const StyledBlueArrow = styled(CustomArrow)`
  &::before {
    border-top: var(--size) solid blue;
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

const ButtonBar = (props) => {
  return (
    <StyledButtonBar>
      {props.text} <StyledBlueArrow />
    </StyledButtonBar>
  );
};

export default ButtonBar;
