import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/Dashboard";
import PublicHomePage from "./pages/PublicHomePage/PublicHomePage";
import LoginPage from "./pages/Login/Login";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [loggedIn, addLoggedIn] = useState(true);
  console.log(loggedIn)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/dashboard" >
            {loggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/:id" children={<Profile/>} />
          <Route exact path="/" >
            <PublicHomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
