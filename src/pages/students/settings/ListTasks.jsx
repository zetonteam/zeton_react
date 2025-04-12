import { Link } from "react-router-dom";
import { useTasks } from "../../../api/getTasks";
import { useStudentContext } from "../StudentLayout";
import { postNewTask } from "../../../api/postNewTask";
import { deleteTask } from "../../../api/deleteTask";


function ListTasks() {
  const { student } = useStudentContext();
  const { tasks, refresh } = useTasks(student.pk);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = await postNewTask(student.pk, formData);

    e.target.reset();

    refresh();
  };

  const handlerDelete = (task_id) => {
    return async (e) => {
      e.stopPropagation();

      await deleteTask({
        student_id: student.pk,
        task_id
      });

      refresh();
    }
  }

  return (
    <>
      <h2>[Settings] Lista Zadań</h2>
      <ul>
        {tasks?.map((item, index) => (
          <li key={`prizes-${index}`}>
            {item.name} - punkty: {item.value}
            <button type="button" name="del-prizes" value={item.pk} onClick={handlerDelete(item.pk)}>
              <span>usuń</span>
            </button>
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