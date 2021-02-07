import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../../atoms/Buttons/Button";
import StudentTemplate from "../../templates/StudentTemplate";

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Student = ({ student }) => (
  <StudentTemplate>
    <h1>{student.first_name}</h1>
    {/* add StudentHeader, StudentButtonsGroup, StudentNavbar */}
    <StyledButtonsGroup>
      <Button>Dodaj punkty</Button>
      <Button outline>Przyznaj nagrodę</Button>
      <Button outline>Daj konsekwencję</Button>
    </StyledButtonsGroup>
  </StudentTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Student);
