import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomeTemplate from '../../templates/HomeTemplate';
import StudentHeader from '../../structures/StudentHeader/StudentHeader';
import Navbar from '../../structures/Navbar/Navbar';
import { Heading, Subheading } from '../../atoms/Heading/Heading';
import MainBox from '../../atoms/Sections/MainBox';
import styled from 'styled-components';
import LiElement from '../../atoms/Lists/Lists';
import { LiDateElem } from '../../atoms/Lists/Lists';
import { StyledArticle } from '../../atoms/Sections/Article';

const StyledUl = styled.ul`
  padding-left: 0;
`;

const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: rgba(0 0 0 0.8);
  margin-bottom: 0;
`;

const AwardsList = (props) => {
  const data = [
    { id: 1, text: 'Paczka czipsów', points: 5 },
    { id: 2, text: 'Wyjście do kina', points: 20 },
    { id: 3, text: 'Godzina gry komputerowej', points: 10 },
  ];
  return (
    <HomeTemplate>
      <StudentHeader name={props.name} points={props.points} />
      <MainBox>
        <StyledArticle>
          <Heading>Lista nagród</Heading>
          {data && (
            <StyledUl>
              {data.map((el) => {
                const { text, points, id } = el;
                return <LiElement text={text} points={points} key={id} />;
              })}
            </StyledUl>
          )}
        </StyledArticle>

        <StyledArticle>
          <Subheading>Otrzymane nagrody</Subheading>
          <StyledUl>
            <LiDateElem>
              <StyledDate>07.10.2021</StyledDate>
              <p>Paczka czipsów</p>
            </LiDateElem>
            <LiDateElem>
              <StyledDate>01.10.2021</StyledDate>
              <p>Wyjście do kina</p>
            </LiDateElem>
          </StyledUl>
        </StyledArticle>
      </MainBox>

      <Navbar />
    </HomeTemplate>
  );
};

const mapStateToProps = (state) => {
  console.log(state.student);
  return {
    name: state.student.first_name + ' ' + state.student.last_name,
    points: state.student.total_points,
  };
};

export default connect(mapStateToProps)(AwardsList);
