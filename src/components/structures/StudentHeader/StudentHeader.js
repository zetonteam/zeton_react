import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import DEFAULT_IMAGE from "../../../images/icons/profile-user.svg";
import STAR_ICON from "../../../images/icons/star.svg";

const StyledStudentHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border-bottom: solid 1px ${({ theme }) => theme.primary};
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

const StyledData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledPointsGroup = styled(StyledData)`
  flex-direction: row;
  padding: 10px 0;
`;

const StyledPoints = styled(Paragraph)`
  margin: 0;
`;

const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10%;
  z-index: 99;
`;

const StudentHeader = ({ name, points, image }) => {
  return (
    <StyledStudentHeader>
      <ProfileImage src={image ? image : DEFAULT_IMAGE} />
      <StyledData>
        <StyledName big>{name}</StyledName>
        <StyledPointsGroup>
          <StyledIcon src={STAR_ICON}></StyledIcon>
          <StyledPoints>{points}</StyledPoints>
        </StyledPointsGroup>
      </StyledData>
    </StyledStudentHeader>
  );
};

export default StudentHeader;
