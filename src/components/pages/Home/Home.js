import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../../api/action";
import apiClient from "../../../apiClient";
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

const Home = ({ caregiver, users, getData }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const studentDataURL = "/api/users/students/";

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      const result = await apiClient(studentDataURL);
      //setChildren(result.data)
      getData(result.data);
      // setIsLoading(false);
    };

    fetchData();
  }, [studentDataURL, getData]);

  return (
    <HomeTemplate>
      <StyledHeadingWrapper>
        <Heading big>Cześć, {caregiver ? caregiver : "Nieznajomy"}</Heading>
        <Heading>wybierz podopiecznego</Heading>
      </StyledHeadingWrapper>
      <StyledUsersWrapper as="section">
        {users && (
          <>
            {users.map((item) => (
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
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getUsersAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
