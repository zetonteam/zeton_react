import styled from "styled-components";

const Select = styled.select`
    width: 400px;
    height: 50px;
    background: white;
    color: grey;
    padding-left: 5px;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);

    option {
        color: black;
        background: white;
        display: flex;
        flex-direction: column;

    }
`

export default Select