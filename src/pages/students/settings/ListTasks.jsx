import { Link } from "react-router-dom";
import { useTasks } from "../../../api/getTasks";
import { useStudentContext } from "../StudentLayout";
import { postNewTask } from "../../../api/postNewTask";


function ListTasks() {
  const { student } = useStudentContext();
  const { tasks, refresh } = useTasks(student.pk);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = await postNewTask(student.pk, formData);

    refresh();
  };

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

      <form action="#" onSubmit={handleSubmit}>
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