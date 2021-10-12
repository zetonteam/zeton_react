import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import HomeTemplate from '../../templates/HomeTemplate';
// import StudentHeader from '../StudentHeader/StudentHeader';
// import Navbar from '../Navbar/Navbar';
import { Heading, Subheading } from '../../atoms/Heading/Heading';
import MainBox from '../../atoms/Sections/MainBox';
import styled from 'styled-components';
import LiElement from '../../atoms/Lists/Lists';
import { LiDateElem } from '../../atoms/Lists/Lists';
import { StyledArticle } from '../../atoms/Sections/Article';
import { AddButton } from '../../atoms/Buttons/LightButtons';
import { data } from '../../../mockyClient';
import AddPrizeForm from './AddPrizeForm';

const StyledUl = styled.ul`
  padding-left: 0;
`;

const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: rgba(0 0 0 0.8);
  margin-bottom: 0;
`;

const AwardsList = () => {
  const [prizes, setPrizes] = useState(data);
  const [flag, setFlag] = useState(false);

  const addPrize = (prize) => {
    prize.id = prizes.length + 1;
    setPrizes([...prizes, prize]);
  };
  const deletePrize = (id) => {
    setPrizes(prizes.filter((prize) => prize.id !== id));
  };

  return (
    <MainBox>
      <StyledArticle>
        <Heading>Lista nagród</Heading>
        {data && (
          <StyledUl>
            {prizes.map((el) => {
              const { text, points, id } = el;
              return (
                <LiElement
                  text={text}
                  points={points}
                  key={id}
                  prize={el}
                  deletePrize={deletePrize}
                />
              );
            })}
          </StyledUl>
        )}
      </StyledArticle>
      <StyledArticle>
        {flag && <AddPrizeForm addPrize={addPrize} />}
        {!flag && (
          <AddButton onClick={() => setFlag(!flag)}>
            Dodaj nową nagrodę
          </AddButton>
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
  );
};

// const mapStateToProps = (state) => {
//   console.log(state.student);
//   return {
//     name: state.student.first_name + ' ' + state.student.last_name,
//     points: state.student.total_points,
//   };
// };

export default AwardsList;
