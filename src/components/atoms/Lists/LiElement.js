import React from "react";
import styled from 'styled-components';

const StyledLiElement = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
   
`
const LiElement = (props) => {
    return (
        <div>
            <StyledLiElement>
                <div>{props.liElement.text}</div>
                {props.liElement.points}
            </StyledLiElement>
        </div>
    )
}

export default LiElement