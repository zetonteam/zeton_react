import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SUB_ROUTES_NAME } from '../../const/routing.const';
import { StyledContainer } from '../../components/templates/HomeTemplate';
import MainBox from '../../components/atoms/Sections/MainBox';
import {
  StyledHeader,
  StyledHeading,
} from '../../components/atoms/Heading/Heading';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../../components/atoms/Form/Form';
import Button from '../../components/atoms/Buttons/Button';
import useAddAward from '../../api/Award/useAddAward';

import { Award } from './awardTypes';

const AddAward = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState<Award>({
    name: '',
    value: 0,
  });

  const navigate = useNavigate();

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      setFormData({ ...formData, value: parsedValue });
    }
  };

  const { trigger, isMutating, error } = useAddAward(id);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await trigger({
      name: formData.name,
      value: formData.value,
    });

    navigate(`/${id}${SUB_ROUTES_NAME.awards}`)
  };

  return (
    <>
      <StyledHeader>
        <StyledHeading>Dodaj nagrodę</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">Nazwa:</StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              required
            />
            <StyledLabel htmlFor="value">Wartość punktowa:</StyledLabel>
            <StyledInput
              type="number"
              name="value"
              id="value"
              min="1"
              step="1"
              onChange={onValueChange}
              required
            />
            {error && <div>Wystąpił błąd podczas dodawania nagrody. Spróbuj jeszcze raz lub skontaktuj się z administratorem.</div>}
            <Button type="submit" disabled={isMutating}>
              Dodaj nagrodę
            </Button>
          </StyledForm>
        </StyledContainer>
      </MainBox>
    </>
  );
};

export default AddAward;
