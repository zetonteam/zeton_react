import React from 'react';
import useSWR from 'swr'
import { urlStudentsList } from '../../../const/url';
import { Heading } from '../../atoms/Heading/Heading';
import { AddButton } from '../../atoms/Buttons/LightButtons';
import Loading from '../../atoms/Loading/Loading';
import StudentCard from '../../modules/StudentCard/StudentCard';
import styled from 'styled-components';
import HomeTemplate from '../../templates/HomeTemplate';
import { fetcher } from "../../../apiClient";

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
  const caregiver = "Jan"; // TODO pobierz z api
  const { data: students, error } = useSWR(urlStudentsList, fetcher);

  return (
    <HomeTemplate>
      <StyledHeadingWrapper>
        <Heading big>Cześć, {caregiver ? caregiver : 'Nieznajomy'}</Heading>
        <Heading>wybierz podopiecznego</Heading>
      </StyledHeadingWrapper>
      <StyledUsersWrapper as="section">
        {error && (
          <div>
            Niestety wystąpił problem podczas pobierania danych, spróbuj ponownie później.
          </div>
        )}

        {!students && !error ? (
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
  );
};

export default Home;
