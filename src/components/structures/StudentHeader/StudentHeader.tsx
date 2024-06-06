//import {PropTypes}  from "react/prop-types"'
//import DEFAULT_IMAGE from "../../../images/icons/dist_/ProfileUser";
//import STAR_ICON from "../../../images/icons/dist_/Star";
import styled, { IStyledComponent } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import STAR_ICON_SVG from '/star.svg';
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import { NavLink } from 'react-router-dom';
import React from 'react';
import ProfileImageSVG from '/profile-user.svg';
import { ThemeTypes } from '../../../theme/appTheme';

interface StyledStudentHeaderInterface {
  theme: ThemeTypes;
}

const StyledStudentHeader = styled.header<StyledStudentHeaderInterface>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border-bottom: solid 1px ${({ theme }) => theme.primary};
  //border-radius: ${({ theme }) => theme.radius};
  transition: 0.2s;
  text-decoration: none;
`;

const StyledMainGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledName = styled(Paragraph)`
  text-transform: capitalize;
  margin: 0;
  color: black;
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
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
  z-index: 2;
`;

//type Item = [string, number, string];
type ItemsTypes = {
  name?: string;
  points?: number;
  studentId?: string;
};

//{ name, points, image }: Record<string, string | number| undefined>
const StudentHeader = ({ name, points }: ItemsTypes): JSX.Element => {
  return (
    <StyledStudentHeader>
      <StyledMainGroup>
        <ProfileImage src={ProfileImageSVG} alt="" />
        <StyledData>
          <StyledName>{name}</StyledName>
          <StyledPointsGroup>
            <StyledIcon src={STAR_ICON_SVG} alt={'star'}></StyledIcon>
            <StyledPoints>{points}</StyledPoints>
          </StyledPointsGroup>
        </StyledData>
      </StyledMainGroup>
      <ReturnButton exit={'true'} as={NavLink} to="/" />
    </StyledStudentHeader>
  );
};

export default StudentHeader;
