import React from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import styled from "styled-components";
import DEFAULT_IMAGE from "../../../images/icons/profile-user.svg";

const StyledStudentCard = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: solid 1px ${({ theme }) => theme.grey};
  border-radius: 5px;
`;

const StyledName = styled(Paragraph)`
  text-transform: capitalize;
  margin: 0;
`;

const StudentCard = ({ name, image }) => (
  <StyledStudentCard>
    <ProfileImage src={image ? image : DEFAULT_IMAGE} />
    <StyledName big>{name}</StyledName>
  </StyledStudentCard>
);

export default StudentCard;
