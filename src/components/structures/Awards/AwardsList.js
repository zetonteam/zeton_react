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
import EditPrizeForm from './EditPrizeForm';

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
  const [editing, setEditing] = useState(false);
  const [flag, setFlag] = useState(false);

  const initialFormState = { id: null, text: '', points: '' };
  const [currentPrize, setCurrentPrize] = useState(initialFormState);

  const addPrize = (prize) => {
    prize.id = prizes.length + 1;
    setPrizes([...prizes, prize]);
  };
  const deletePrize = (id) => {
    setEditing(false);
    setPrizes(prizes.filter((prize) => prize.id !== id));
  };

  const updatePrize = (id, updatedPrize) => {
    setEditing(false);
    setPrizes(prizes.map((prize) => (prize.id === id ? updatedPrize : prize)));
  };

  const editPrize = (prize) => {
    console.log(prize);
    setEditing(true);
    setCurrentPrize({ id: prize.id, text: prize.text, points: prize.points });
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
                  id={id}
                  deletePrize={deletePrize}
                  editPrize={editPrize}
                />
              );
            })}
          </StyledUl>
        )}
      </StyledArticle>
      <StyledArticle>
        {editing ? (
          <div>
            <Subheading>Edytuj nagrodę</Subheading>
            <EditPrizeForm
              setEditing={setEditing}
              currentPrize={currentPrize}
              updatePrize={updatePrize}
              flag={flag}
            />
          </div>
        ) : (
          <div>
            <Subheading>Dodaj nagrodę</Subheading>
            <AddPrizeForm addPrize={addPrize} />
          </div>
        )}

        {/* {!flag && (
          <AddButton onClick={() => setFlag(!flag)}>
            Dodaj nową nagrodę
          </AddButton>
        )}
       */}
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
