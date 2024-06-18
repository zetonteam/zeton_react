import styled from 'styled-components';
import DEFAULT_IMAGE_SVG from '/profile-user.svg';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import STAR_ICON_SVG from '/star.svg';
import React from 'react';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
  }
}

const StyledProfileTopbar = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 35px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
`;

const StyledProfileImage = styled(ProfileImage)`
  height: 40px;
  width: 40px;
  margin: 5px;
  z-index: 101;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 50px;
    width: 50px;
  }
`;

const StyledDataWraper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: inherit;
  font-size: 1rem;
  margin: 0 0 0 10px;
`;

const StyledIcon = styled.img`
  height: 1.1rem;
  color: white;
  background-color: white;
  border-radius: 50%;
  padding: 2px;
  margin: 0 5px 0 15px;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;
type StudentDataTypes = {
  image: string;
  name: string;
  points: number | string;
};

interface ProfileProps {
  image: string | null;
}
const ProfileTopbar = ({
  studentData,
}: {
  studentData: StudentDataTypes;
}): JSX.Element => {
  console.log(studentData);
  const { image, name, points }: StudentDataTypes = studentData;

  // <StyledProfileImage style={{backgroundImage: image? `url(${image})`:`url(${image})`}} alt=""/>
  return (
    <StyledProfileTopbar>
      <StyledProfileImage
        src={image != null ? image : DEFAULT_IMAGE_SVG}
        alt="ProfileImage"
      />
      <StyledDataWraper>
        <StyledParagraph>{name}</StyledParagraph>
        <StyledIcon src={STAR_ICON_SVG} alt="star_icon" />
        <StyledParagraph>{points}</StyledParagraph>
      </StyledDataWraper>
    </StyledProfileTopbar>
  );
};

export default ProfileTopbar;
