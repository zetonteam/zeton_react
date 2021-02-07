import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  background-color: #4f4e3a;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomNavbar = () => (
  <StyledNavbar>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
  </StyledNavbar>
);

export default BottomNavbar;
