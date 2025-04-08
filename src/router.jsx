import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";
import UserLayout from "./pages/UserLayout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from './pages/Home';
import Student from "./pages/students/Student";
import Tasks from "./pages/students/Tasks";
import StudentLayout from "./pages/students/StudentLayout";
import StudentsSettingsLayout from "./pages/students/settings/StudentsSettingsLayout";
const Routes = () => {
  let { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      Component: UserLayout, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          Component: Home,
        }, {
          path: "/students",
          Component: StudentLayout,
          children: [
            {
              path: ":student_id",
              Component: Student,
            }, {
              path: ":student_id/tasks",
              Component: Tasks
            }, {
              path: ":student_id/awards",
              element: (<div>awards</div>)
            }, {
              path: ":student_id/consequences",
              element: (<div>consequences</div>)
            }, {
              path: ":student_id/info",
              element: <div>info</div>
            }, {
              path: ":student_id/settings",
              Component: StudentsSettingsLayout,
              children: [{
                path: "listprizes",
                Component: () => <div>LIST PRIZES</div>
              }, {
                path: "listtasks",
                Component: () => <div>LIST TASKS</div>
              }]
            }
          ]
        }, {
          path: "/profile",
          element: <div>User Profile</div>,
        }, {
          path: "/logout",
          Component: Logout,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      Component: Login,
    }
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;