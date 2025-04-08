import { Link } from "react-router-dom";
import { useTasks } from "../../../api/getTasks";
import { useStudentContext } from "../StudentLayout";

function ListTasks() {
  const { student } = useStudentContext();
  const { tasks } = useTasks(student.pk);

  return (
    <>
      <ul>
        {tasks?.map((item, index) => (
          <li key={`prizes-${index}`}>
            {item.name} - punkty: {item.value}
            <button type="button" name="del-prizes" value={item.pk}>usuń</button>
            <Link to={""}>Edytuj</Link>
          </li>
        ))}
      </ul>
      <form style={{ border: "1px solid red", padding: "1rem"}}>
        x
        <label>
          Nazwa<br />
          <input name="name"></input>
        </label><br />
        <label>
          Punkty<br />
          <input type="number" name="value" min="0"></input>
        </label>
        <button type="submit">dodaj</button>
      </form>
      <Link to={""}>Dodaj</Link>
    </>
  )
}

export default ListTasks;