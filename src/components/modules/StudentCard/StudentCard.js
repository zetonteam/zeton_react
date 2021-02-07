import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { chooseStudentAction } from "../../../api/action";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import styled from "styled-components";
import DEFAULT_IMAGE from "../../../images/icons/profile-user.svg";

const StyledStudentCard = styled(Link)`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: solid 1px ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
`;

const StyledName = styled(Paragraph)`
  text-transform: capitalize;
  margin: 0;
  color: black;
`;

const StudentCard = ({ name, image, studentData, getStudent }) => {
  return (
    <StyledStudentCard onClick={() => getStudent(studentData)} to={name}>
      <ProfileImage src={image ? image : DEFAULT_IMAGE} />
      <StyledName big>{name}</StyledName>
    </StyledStudentCard>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudent: (data) => dispatch(chooseStudentAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(StudentCard);
