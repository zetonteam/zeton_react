import React from "react";
import styled from "styled-components";
import DEFAULT_IMAGE from "../../../images/icons/profile-user.svg";
import STAR_ICON from "../../../images/icons/star.svg";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";

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
  box-shadow: 0 0 5px rgba(0,0,0,0.5);

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 50px;
    width: 50px;
  }
`

const StyledDataWraper = styled.div`
    color: white;
    display: flex;
    align-items: center;
    height: inherit;
    font-size: 1rem;
    margin: 0 0 0 10px;
`

const StyledIcon = styled.img`
    height: 1.1rem;
    color: white;
    background-color: white;
    border-radius: 50%;
    padding: 2px;
    margin: 0 5px 0 15px;
`

const StyledParagraph = styled.p`
  margin: 0;
`

const ProfileTopbar = ({ studentData }) => {
    console.log(studentData)
    const { image, name, points } = studentData;
    return (
      <StyledProfileTopbar>
        <StyledProfileImage src={image ? image : DEFAULT_IMAGE} alt=""/>
        <StyledDataWraper>
            <StyledParagraph>{name}</StyledParagraph>
            <StyledIcon src={STAR_ICON} alt=""/>
            <StyledParagraph>{points}</StyledParagraph>
        </StyledDataWraper>
      </StyledProfileTopbar>
    );
  };
  
export default ProfileTopbar;