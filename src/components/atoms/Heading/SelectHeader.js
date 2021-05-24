import React from 'react';
import styled from 'styled-components'


const StyledSelectHeader = styled.div`
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

const SelectHeader = (props) => {
    return (
        <StyledSelectHeader>{props.text}</StyledSelectHeader>
    )
}

export default SelectHeader