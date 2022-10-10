import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import HomeView from './views/HomeView';
import StudentView from './views/StudentView';
import TasksView from './views/TasksView';
import InfoView from './views/InfoView';
import AwardsView from './views/AwardsView';
import ConsequencesView from './views/ConsequencesView';
import SettingsView from './views/SettingsView';
import Head from './Head';
import { ROUTE_NAME } from './const/routing.const';

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
              <Redirect to={ROUTE_NAME.home} />
            </Route>
            <Route exact path={ROUTE_NAME.home}>
              <HomeView />
            </Route>
            <Route exact path={ROUTE_NAME.student}>
              <StudentView />
            </Route>
            <Route exact path={ROUTE_NAME.tasks}>
              <TasksView />
            </Route>
            <Route exact path={ROUTE_NAME.awards}>
              <AwardsView />
            </Route>
            <Route exact path={ROUTE_NAME.consequences}>
              <ConsequencesView />
            </Route>
            <Route exact path={ROUTE_NAME.info}>
              <InfoView />
            </Route>
            <Route exact path={ROUTE_NAME.settings}>
              <SettingsView />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </div>
  );
};

export default App;
