import { useParams, Link, generatePath } from 'react-router-dom';

const mainMenu = [
  {
    name: "Home",
    pathname: "/",
    icon: "--icon-home"
  },
  {
    name: "Nagrody",
    pathname: "/students/:student_id/awards",
    icon: "--icon-trophy"
  },
  {
    name: "Konsekwencje",
    pathname: "/students/:student_id/consequences",
    icon: "--icon-dissatisfied"
  },
  {
    name: "Informacje",
    pathname: "/students/:student_id/info",
    icon: "--icon-person"
  },
  {
    name: "Ustawienia",
    pathname: "/students/:student_id/settings",
    icon: "--icon-settings"
  }
];

const Navbar = () => {
  const params = useParams();

  return (
    <nav id="main-menu">
      <ul>
        {mainMenu.map(({ icon, name, pathname }) => (
          <li>
            <Link to={generatePath(pathname, params)} style={{ "--icon-name": `var(${icon})` }}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
