import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import HomeView from './views/HomeView';
import StudentView from './views/StudentView';
import TasksView from './views/TasksView';
import InfoView from './views/InfoView';
import AwardsView from './views/Award/AwardsView.tsx';
import ConsequencesView from './views/ConsequencesView';
import SettingsView from './views/SettingsView';
import Head from './Head';
import {
  AWARDS_SUB_ROUTES,
  BASE_ROUTES_NAME,
  SUB_ROUTES_NAME,
} from './const/routing.const';
import Login from './views/Login.tsx';
import AuthProvider from './providers/AuthProvider.tsx';
import AddAward from './views/Award/AddAward.tsx';
import GrantAward from './views/Award/GrantAward.tsx';

function App(): React.ReactNode {
  return (
    <AuthProvider>
      <div className="App">
        <Head />

        <MainTemplate>
          <Routes>
            <Route path={BASE_ROUTES_NAME.home} element={<HomeView />} />
            <Route path={BASE_ROUTES_NAME.login} element={<Login />} />
            <Route path={BASE_ROUTES_NAME.student} element={<StudentView />} />
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.tasks}`}
              element={<TasksView />}
            />
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.awards}`}
              element={<AwardsView />}
            />

            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.consequences}`}
              element={<ConsequencesView />}
            />
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.info}`}
              element={<InfoView />}
            />
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.settings}`}
              element={<SettingsView />}
            />
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.awards}${AWARDS_SUB_ROUTES.add}`}
              element={<AddAward />}
            />
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.awards}${AWARDS_SUB_ROUTES.grant}`}
              element={<GrantAward />}
            />
          </Routes>
        </MainTemplate>
      </div>
    </AuthProvider>
  );
}

export default App;
