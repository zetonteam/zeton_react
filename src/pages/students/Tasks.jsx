import { useTasks } from '../../api/getTasks';
import { postPoints } from '../../api/postPoints';
import { useStudentContext } from './StudentLayout';

function Tasks() {
  const { student, refresh } = useStudentContext();
  const { tasks = [] } = useTasks(student.pk);

  // const { trigger } = postPoints(student.pk);

  const onSubmit = async (e) => {
    e.preventDefault();

    const ix = e.target.elements.task.value;
    const task = tasks[ix];

    const formData = new FormData();

    formData.set("object_id", task.pk);
    formData.set("value", task.value);
    formData.set("assigner", 2);
    formData.set("content_type", "task");

    const data = await postPoints(student.pk, formData);

    refresh(); // nie wiem czy nie powinno to byc na poziomie postPoints
  };

  return (
    <form action="#" method="post" onSubmit={onSubmit}>
      <label>
        Wybierz:<br />
        <select name="task">
          <option value="">--</option>
          {tasks?.map?.(({ pk, name, value}, index) => (
            <option value={index}>{name} - {value}</option>
          ))}
        </select>
      </label>

      <ul className="actions">
        <li><button type="reset">reset</button></li>
        <li><button type="submit" className="featured">klik</button></li>
      </ul>
    </form>
  );
};

export default Tasks;
