import { Link } from "react-router-dom";
import { getStudents } from "../api/getStudents";
import { useUserContext } from "./UserLayout"

function HomeView() {
  const user = useUserContext();
  const { students } = getStudents();

  return (
    <section id="home">
      <h2>Wybór podopiecznego</h2>
      <form action="#" method="get">
        <label>
          <visually-hidden>Wyszukaj podopiecznego</visually-hidden>
          <input type="search" name="search" inputMode="search" placeholder="Wyszukaj..." />
        </label>
        <visually-hidden>
        <button type="submit">
          <span className="icon-search"></span>
          Szukaj
        </button>
        </visually-hidden>
      </form>
      {students?.length > 0 ? (
        <div className="cards">
          <StudentsList list={students} />
        </div>
      ) : null}

      {/* <ul className="userAction">
        <li>
          <button type="button">
            Dodaj podopiecznego
          </button>
        </li>
      </ul> */}
    </section>
  );
};

const hue = [214, 319, 286, 108];

const StudentsList = ({ list }) => {
  list = [...list, ...list, ...list, ...list, ...list, ...list];
  return list.map(({ first_name, last_name, pk }, index) => (
    <article key={`${first_name}-${pk}-${index}`} style={{ "--avatarHue": hue[(index % hue.length)] }}>
      <h3>
        <Link to={`/students/${pk}`}>{first_name}<br />{last_name}</Link>
      </h3>
    </article>
  ));
};

export default HomeView;
