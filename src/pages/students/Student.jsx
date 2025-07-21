import { Link } from 'react-router-dom';
import { useStudentContext } from './StudentLayout';

function Student() {
  const { student } = useStudentContext();

  return (
    <>
      <section>
        <ul className="userActions">
          <li className="featured">
            <Link to={`/students/${student?.pk}/tasks`}>Dodaj punkty</Link>
          </li>
          <li>
            <Link to={`/students/${student?.pk}/prizes`}>Przyznaj nagrodę</Link>
          </li>
          <li>
            <Link to="">Daj konsekwencję</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Student;
