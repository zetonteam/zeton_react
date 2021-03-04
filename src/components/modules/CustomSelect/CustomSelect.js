import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Buttons/Button'

const MainBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    justify-content: space-around;
    margin: 0 5%;
    margin-bottom: 40px;
    
    max-width: 500px;
    position: relative;


@media only screen and(max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) =>
        theme.fontSize.xxs
    };
    margin: 0 auto;
    padding: 1rem 2rem 1rem 1rem;
}
`;

const DropdownContainer = styled.div`
    margin: 0 auto;
    /* position: absolute; */
    width: 100%
`;

const DropdownHeader = styled.div`
    position: relative;
    width: 100%;
`;

const SelectHeader = styled.div`
    width: 100%;
    margin:0 auto;
    background: white;
    color: black;
    padding: 1rem 5rem 1rem 1.5rem;
    font-size: 1.25rem;
    border-radius:  ${({ theme }) => theme.radius};
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
    outline: transparent;
    border: none;
    line-height: 1.5;
       
    &:hover,
    &:focus {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
}


@media only screen and(max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) =>
        theme.fontSize.xxs
    };
    margin: 0 auto;
    padding: 1rem 2rem 1rem 1rem;
}
`;
const CustomArrow = styled.span`
position: absolute;
top: 0;
right: 0;
display: block;
background: transparent;
height: 100%;
width: 4rem;
pointer-events: none;
    &::before, 
    &::after {
    --size: 0.65rem;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -50%);
}

    &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid black;
}
@media only screen and(max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
        &::before, 
        &::after {
        --size: 0.5rem;
    }
}
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
    border-top: 1px solid rgba(0, 0, 0, 0.2);}

&:hover, 
&:focus {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
}

`;

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState([]);
    const [selectedHeader, setSelectedHeader] = useState(["Wybierz nagrodę",])
    const [prizeState, setPrizeState] = useState("")

    const options = [
        { id: 1, text: "Paczka czipsów", points: 5 },
        { id: 2, text: "Wyjście do kina", points: 20 },
        { id: 3, text: "Godzina gry komputerowej", points: 10 }
    ]

    const toggling = () =>
        setIsOpen(!isOpen)

    const onOptionClicked = (value) => () => {
        if (!value) return;

        setSelectedOption(value);
        console.log(selectedOption)
        setIsOpen(false);
        setSelectedHeader(`${value.text} -${value.points}pkt`)
    }

    const prizeChosen = () => {
        setPrizeState(selectedOption)
        console.log(selectedOption.points)
        setSelectedHeader(["Wybierz nagrodę",])
    }


    return (
        <MainBox>
            {prizeState.text}   {prizeState.points}
            <DropdownContainer>
                <DropdownHeader
                    onClick={toggling}
                    role="button"
                    aria-labelledby="dropdown-header"
                    tabindex="0"
                    aria-haspopup="listbox"
                >
                    <SelectHeader>{selectedHeader}</SelectHeader>
                    <CustomArrow />
                </DropdownHeader>
                {isOpen && (
                    <DropdownListContainer
                        role="listbox"
                    >
                        <DropdownList>
                            {(options || []).map(option => (

                                <ListItem
                                    tabindex="0"
                                    onClick={onOptionClicked(option)}
                                    key={option.id}
                                    role="option">
                                    {option.text} <span>{option.points} pkt</span>
                                </ListItem>
                            ))}

                        </DropdownList>
                    </DropdownListContainer>
                )}
            </DropdownContainer>

            <Button onClick={prizeChosen}>Przyznaj nagrodę</Button>

        </MainBox>

    )
}

export default CustomSelect