import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import Home from './components/pages/Home/Home';
import Student from './components/pages/Student/Student';
import Info from './components/pages/Info/Info';
import Awards from './components/pages/Awards/Awards';
import Consequences from './components/pages/Consequences/Consequences';
import Settings from './components/pages/Settings/Settings';
import Head from './Head';

const App = () => {
  // const [loggedIn, addLoggedIn] = useState(true);
  // console.log(loggedIn);

  return (
    <div className="App">
      <Head />

      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/:id">
              <Student />
            </Route>
            <Route exact path="/:id/awards">
              <Awards />
            </Route>
            <Route exact path="/:id/consequences">
              <Consequences />
            </Route>
            <Route exact path="/:id/info">
              <Info />
            </Route>
            <Route exact path="/:id/settings">
              <Settings />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </div>
  );
};

export default App;
