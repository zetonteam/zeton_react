import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../../api/action";
import apiClient from "../../../apiClient";
import Heading from "../../atoms/Heading/Heading";
import AddButton from "../../atoms/Button/AddButton";
import StudentCard from "../../modules/StudentCard/StudentCard";
import styled from "styled-components";

const StyledHeadingWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const StyledUsersWrapper = styled(StyledHeadingWrapper)``;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
`;

const Home = ({ caregiver, user, users, getData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [choosenUser, setChoosenUser] = useState(user);
  const studentDataURL = "/api/users/students/";

  useEffect(() => {
    setChoosenUser(user);
    //console.log(props.users);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await apiClient(studentDataURL);
      //setChildren(result.data)
      getData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [studentDataURL]);

  return (
    <StyledContainer>
      <StyledHeadingWrapper>
        <Heading big>Cześć, {caregiver ? caregiver : "Nieznajomy"}</Heading>
        <Heading>wybierz podopiecznego</Heading>
      </StyledHeadingWrapper>
      <StyledUsersWrapper as="section">
        {users && (
          <>
            {users.map((item) => (
              <StudentCard name={item.username} key={item.username} />
            ))}
          </>
        )}
      </StyledUsersWrapper>
      <AddButton>Dodaj podopiecznego</AddButton>
      {/* {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      } */}
    </StyledContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    caregiver: "Roman",
    users: state.users,
    user: state.user,
    hej: console.log(state.users),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getUsersAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
