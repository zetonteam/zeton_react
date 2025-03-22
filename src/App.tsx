import React from 'react';
import { Provider } from 'react-redux';
import AuthProvider from "./providers/AuthProvider";
import Routes from "./routes";
import getStore from './redux/store';

function App(): React.ReactNode {
  return (
    <Provider store={getStore()}>
      <AuthProvider>
        <Routes />
          {/* <Routes>
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
            <Route
              path={`${BASE_ROUTES_NAME.student}${SUB_ROUTES_NAME.awards}${AWARDS_SUB_ROUTES.list}`}
              element={<Awards />}
            />
          </Routes> */}
      </AuthProvider>
    </Provider>
  );
}

export default App;
