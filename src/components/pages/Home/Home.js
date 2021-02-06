import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../../api/action";
import apiClient from "../../../apiClient";
import Heading from "../../atoms/Heading/Heading";
import styled from "styled-components";

const StyledHeadingWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
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
    <div>
      <StyledHeadingWrapper>
        <Heading big>{caregiver ? caregiver : "Nieznajomy"}</Heading>
        <Heading>wybierz podopiecznego</Heading>
      </StyledHeadingWrapper>
      {/* {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      } */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    caregiver: "Roman",
    users: state.users,
    user: state.user,
    //hej: console.log(state.user),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getUsersAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
