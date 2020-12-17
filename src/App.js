import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/Dashboard";
import PublicHomePage from "./pages/PublicHomePage/PublicHomePage";
import LoginPage from "./pages/Login/Login";


const App = () => {
  const [loggedIn, addLoggedIn] = useState(true);
  console.log(loggedIn)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" >
            {loggedIn ? <Dashboard/> : <PublicHomePage />}
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
