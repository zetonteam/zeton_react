import React from "react";
import { FormControl, TextField } from '@material-ui/core';

const Login = () => {
  return (
    <section className="login">
      <FormControl>
        <h1>Login</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
      </FormControl>
    </section>
  )
}

export default Login;

