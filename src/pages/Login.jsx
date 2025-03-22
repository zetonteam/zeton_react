import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import useAuthenticateUser from "../api/authenticateUser";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const { trigger, isMutating, error } = useAuthenticateUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      username: { value: username },
      password: { value: password }
    } = e.target.elements;

    const response = await trigger({
      username,
      password,
    });

    setToken(response.data.access);
    navigate('/', { replace: true });

    return false
  };

  return (
    <form action="#" method="post" id="signin" className="modal" onSubmit={handleSubmit}>
      <div>
        <h2>Zaloguj się</h2>
        <label>Nazwa użytkownika:
          <input type="text" name="username" required />
        </label>
        <label>Hasło:
          <input type="password" name="password" required />
        </label>
        {error ? <p>Błąd logowania. Spróbuj ponownie.</p> : null}
        <ul className="actions">
          <li>
            <button type="submit" className="featured">Zaloguj się</button>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Login;
