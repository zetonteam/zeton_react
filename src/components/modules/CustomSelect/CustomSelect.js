import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Buttons/Button';
import SelectHeader from '../../atoms/Heading/SelectHeader';
import CustomArrow from '../../atoms/Buttons/CustomArrow';
import MainBox from '../../atoms/Sections/MainBox';
import { Subheading } from '../../atoms/Heading/Heading';

const DropdownContainer = styled.div`
  margin: 0 auto;
  /* position: absolute; */
  width: 100%;
`;

const DropdownHeader = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownListContainer = styled.div`
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  background: white;
  color: black;
  font-size: 1.25rem;
  border-radius: ${({ theme }) => theme.radius};
  position: relative;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-size: 1.25rem;
  border: 1px solid transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const CustomSelect = ({ title, data, btnTitle, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedHeader, setSelectedHeader] = useState([title]);
  const [elemState, setElemState] = useState('');
  const [disabled, setDisabled] = useState(true);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value, title) => () => {
    if (!value) return;
    setSelectedOption(value);
    setIsOpen(false);
    setSelectedHeader(`${value.name} ${value.value}pkt`);
    if (elemState.name !== title) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const elemChosen = () => {
    setElemState(selectedOption);
    setSelectedHeader([title]);
    setDisabled(true);

    if(onSelect && typeof onSelect === "function") {
      onSelect(selectedOption);
    }
  };

  return (
    <React.Fragment>
      <Subheading>{elemState.value}</Subheading>
      <MainBox>
        <DropdownContainer>
          <DropdownHeader
            onClick={toggling}
            role="button"
            aria-labelledby="dropdown-header"
            tabindex="0"
            aria-haspopup="listbox"
          >
            <SelectHeader text={selectedHeader} />
            <CustomArrow />
          </DropdownHeader>
          {isOpen && (
            <DropdownListContainer role="listbox">
              <DropdownList>
                {(data || []).map((option) => (
                  <ListItem
                    tabindex="0"
                    onClick={onOptionClicked(option, title)}
                    key={option.id}
                    role="option"
                  >
                    {option.name} <span>{option.value} pkt</span>
                  </ListItem>
                ))}
              </DropdownList>
            </DropdownListContainer>
          )}
        </DropdownContainer>
        <Button disabled={disabled} onClick={elemChosen}>
          {btnTitle}
        </Button>
      </MainBox>
    </React.Fragment>
  );
};

export default CustomSelect;
