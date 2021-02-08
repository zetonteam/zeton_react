import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

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

const BottomNavbar = () => {
  let { id } = useParams();
  console.log(`${id}`)
  return (
    <StyledNavbar>
      <NavLink to={`/${id}`}>Home</NavLink>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <NavLink to={`/${id}/settings`}>Ustawienia</NavLink>1
    </StyledNavbar>
  );
};

export default BottomNavbar;
