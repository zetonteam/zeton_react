import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import getToken from "../api/getToken";

function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const { trigger, isMutating, error } = getToken();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { access } = await trigger(new FormData(e.target));

    setToken(access);

    navigate('/', { replace: true });
  };

  return (
    <>
      <header hidden>
        <h1 >Żeton</h1>
      </header>
      <form action="#" method="post" id="signin" className="modal" onSubmit={handleSubmit}>
        <div>
          <h2 hidden>Zaloguj się</h2>
          <label>Nazwa użytkownika:
            <input type="text" name="username" placeholder="Wpisz login" required />
          </label>
          <label>Hasło:
            <input type="password" name="password" placeholder="Wpisz hasło" required />
          </label>
          {error ? <p>Błąd logowania. Spróbuj ponownie.</p> : null}
          <ul className="actions">
            <li>
              <button type="reset" style={{ "--btnFontSize": "48px" }}>reset</button>
            </li>
            <li>
              <button type="submit" className="featured">Zaloguj się</button>
            </li>
          </ul>
        </div>
      </form>
      <footer hidden>
        <p>&copy;Żeton</p>
      </footer>
    </>
  );
};

export default Login;
