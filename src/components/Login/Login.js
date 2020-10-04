import React, { useState } from "react";
import { FormControl, Button, TextField } from '@material-ui/core';
import { authorise } from '../../auth'

const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="login">
      <FormControl onSubmit={
          e => {
            e.preventDefault();
            authorise(user, password);
            // navigate('/admin')
          }}>
        <label>Login</label>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined" 
            onChange={e => setUser(e.target.value)}/>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
          />
        <Button variant="contained">Zaloguj</Button>
      </FormControl>
    </section>
  )
}

export default Login;

