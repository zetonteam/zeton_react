import React, { useState } from 'react';
import { Heading } from '../components/atoms/Heading/Heading.ts';
import MainBox from '../components/atoms/Sections/MainBox.ts';
import { StyledArticle } from '../components/atoms/Sections/Article.ts';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../components/atoms/Form/Form.ts";
import { type User } from "../api/Authentication/userTypes.ts";
import Button from "../components/atoms/Buttons/Button.ts";
import useAuthenticateUser from "../api/Authentication/authenticateUser.ts";
import { useTokenDispatch } from "../providers/AuthProvider.tsx";
import { setToken } from "../providers/authenticationActions.ts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState<User>({
    userName: '',
    password: '',
  });

  const dispatch = useTokenDispatch();

  const { trigger, isMutating, error } = useAuthenticateUser();
  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response = await trigger({
      username: formData.userName,
      password: formData.password,
    });

    setToken(response.data.access, dispatch);
    navigate("/")
  };

  return (
    <MainBox>
      <StyledArticle>
        <Heading>Zaloguj się</Heading>
        <StyledForm onSubmit={() => handleSubmit}>
          <StyledLabel htmlFor="userName">Nazwa użytkownika:</StyledLabel>
          <StyledInput
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={(event) =>
              setFormData({ ...formData, userName: event.target.value })
            }
            required
          />
          <StyledLabel htmlFor="password">Hasło:</StyledLabel>
          <StyledInput
            type="text"
            name="password"
            id="password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            required
          />
          {error && <div>Błąd logowania. Spróbuj ponownie.</div>}
          <Button
            type="button"
            disabled={isMutating}
            onClick={(event) => handleSubmit(event)}
          >
            Zaloguj się
          </Button>
        </StyledForm>
      </StyledArticle>
    </MainBox>
  );
};

export default Login;
