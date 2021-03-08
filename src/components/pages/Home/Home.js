import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getStudentsListAction } from "../../../api/action";
import apiClient from "../../../apiClient";
import { urlStudentsList } from "../../../const/url";
import Heading from "../../atoms/Heading/Heading";
import AddButton from "../../atoms/Buttons/AddButton";
import StudentCard from "../../modules/StudentCard/StudentCard";
import styled from "styled-components";
import HomeTemplate from "../../templates/HomeTemplate";

const StyledHeadingWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  max-width: 500px;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    margin-bottom: 30px;
  }
`;

const StyledUsersWrapper = styled(StyledHeadingWrapper)``;

const Home = ({ caregiver, students, getData }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await apiClient(urlStudentsList);
      //setChildren(result.data)
      getData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [urlStudentsList, getData]);

  return (
    <HomeTemplate>
      <StyledHeadingWrapper>
        <Heading big>Cześć, {caregiver ? caregiver : "Nieznajomy"}</Heading>
        <Heading>wybierz podopiecznego</Heading>
      </StyledHeadingWrapper>
      <StyledUsersWrapper as="section">{
        isLoading ? <p>Loading...</p> : 

        students && (
          <>
            {students.map((item) => (
              <StudentCard
                key={item.first_name}
                name={item.first_name}
                studentData={item}
              />
            ))}
          </>
        )}
      </StyledUsersWrapper>
      <AddButton>Dodaj podopiecznego</AddButton>
      {/* {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      } */}
    </HomeTemplate>
  );
};

const mapStateToProps = (state) => {
  return {
    caregiver: "Roman",
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getStudentsListAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
