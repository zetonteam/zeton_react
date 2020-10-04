import React, { useState } from "react";
import { FormControl, Button, TextField } from '@material-ui/core';
import { authorise, checkLog } from '../../auth'

const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  //const [redirect, toggleRedirect] = useState(false);
  
  return (
    <section className="login">
      <form onSubmit={
        e => {
          e.preventDefault();
          authorise(user, password);
          console.log(user, password);
          
        }}>
          <label forname="username" action='/'>username</label>
          <input type="text" id="username" name="username" required onChange={e => setUser(e.target.value)}></input>
          <label forname="password" >password</label>
          <input type="password" id="password" name="password" className="log__input" required onChange={e => setPassword(e.target.value)}></input>
          <input type="submit" value="Wyślij"></input>
      </form>
    </section>
  )
}

export default withRouter(Login);

