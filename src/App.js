import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainTemplate from "./components/templates/MainTemplate";
import Home from "./components/pages/Home/Home";

const App = () => {
  const [loggedIn, addLoggedIn] = useState(true);
  console.log(loggedIn);

  return (
    <div className="App">
      <Router>
        <MainTemplate>
          <Switch>
            {/* <Route path="/:id" children={<Profile />} /> */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </div>
  );
};

export default App;
