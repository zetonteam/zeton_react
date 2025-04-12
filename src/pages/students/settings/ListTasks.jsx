import { Link } from "react-router-dom";
import { useTasks } from "../../../api/getTasks";
import { useStudentContext } from "../StudentLayout";
import { postNewTask } from "../../../api/postNewTask";
import { deleteTask } from "../../../api/deleteTask";
import { patchTask } from "../../../api/patchTask";
import { useRef } from "react";


function ListTasks() {
  const updateForm = useRef(null);
  const { student } = useStudentContext();
  const { tasks, refresh } = useTasks(student.pk);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = await postNewTask(student.pk, formData);

    e.target.reset();

    refresh();
  };
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const task_id = e.target.elements.pk.value;

    formData.delete("pk");

    await patchTask({
      student_id: student.pk,
      task_id
    }, formData);

    e.target.reset();

    refresh();
  }

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

  const handlerEdit = (e) => {
    e.stopPropagation();

    const target = e.target.closest("button");
    const form = updateForm.current;

    const itemTask = tasks[target.value];

    for (const [key, value] of Object.entries(itemTask)) {
      if (form?.elements?.[key]) {
        form.elements[key].value = value;
      }
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
            <button type="button" value={index} onClick={handlerEdit}>Edytuj</button>
          </li>
        ))}
      </ul>

      <form action="#" onSubmit={handleSubmit}>
        <h2>Dodawanie</h2>
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

      <form action="#edit" onSubmit={handleSubmitUpdate} ref={updateForm} style={{ position: "fixed", inset: "10rem 1rem auto auto" }}>
        <h2>Edycja</h2>
        <label>
          Nazwa<br />
          <input name="name"></input>
        </label><br />
        <label>
          Punkty<br />
          <input type="number" name="value" min="0"></input>
        </label>
        <input type="hidden" name="pk"></input>
        <button type="submit">zapisz</button>
      </form>

      <Link to={""}>Dodaj</Link>
    </>
  )
}

export default ListTasks;