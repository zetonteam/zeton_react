import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { AddButton } from "../../atoms/Buttons/LightButtons";
import Loading from "../../atoms/Loading/Loading";
import StudentCard from "../../modules/StudentCard/StudentCard";
import styled from "styled-components";
import HomeTemplate from "../../templates/HomeTemplate";
// funkcje-hooki swr
import { useUser } from "../../../api/useUser";
import { useStudents } from "../../../api/useStudents";

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

const Home = () => {
  const { user, isLoading, isError } = useUser();
  const { students, isStudentsLoading, isStudentsError } = useStudents();

  return (
    <>
      {user && (
        <HomeTemplate>
          <StyledHeadingWrapper>
            <Heading big>Cześć, {user ? user : "Nieznajomy"}</Heading>
            <Heading>wybierz podopiecznego</Heading>
          </StyledHeadingWrapper>
          <StyledUsersWrapper as="section">
            {isStudentsLoading ? (
              <Loading />
            ) : (
              students && (
                <React.Fragment>
                  {students.map((item) => (
                    <StudentCard
                      key={item.first_name}
                      name={item.first_name}
                      studentData={item}
                    />
                  ))}
                </React.Fragment>
              )
            )}
          </StyledUsersWrapper>
          <AddButton>Dodaj podopiecznego</AddButton>
          {/* {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      } */}
        </HomeTemplate>
      )}
      {isLoading && <Loading />}
      {
        // isError && <Error />
      }
    </>
  );
};

export default Home;
