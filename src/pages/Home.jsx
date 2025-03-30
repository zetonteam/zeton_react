import { Link } from "react-router-dom";
import { getStudents } from "../api/getStudents";
import { useUserContext } from "./UserLayout"

function HomeView() {
  const user = useUserContext();
  const { students } = getStudents();

  return (
    <section id="">
      <h2>Czesc, {user?.username}</h2>

      {students?.length > 0 ? (
        <div className="cards">
          <StudentsList list={students} />
        </div>
      ) : null}

      <ul className="userAction">
        <li>
          <button type="button">
            Dodaj podopiecznego
          </button>
        </li>
      </ul>
    </section>
  );
};

const StudentsList = ({ list }) => {
  return list.map(({ first_name, last_name, pk }, index) => (
    <article key={`${first_name}-${pk}-${index}`}>
      <h3>
        <Link to={`/students/${pk}`}>{first_name}</Link>
      </h3>
      <img src="" alt={`${first_name} ${last_name}`}></img>

    </article>
  ));
};

export default HomeView;
