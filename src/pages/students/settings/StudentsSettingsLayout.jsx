import { Link, Outlet } from "react-router-dom";
import { useStudentContext } from '../StudentLayout';

function StudentsSettingsLayout() {
  const { student } = useStudentContext();

  return (
    <>
      <ul>
        <li>
          <Link to={`/students/${student?.pk}/settings/listprizes`}>Nagrody</Link>
        </li>
        <li>
          <Link to={`/students/${student?.pk}/settings/listtasks`}>Zadania</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default StudentsSettingsLayout;