import { getPrizes } from '../../api/getPrizes';
import { postPoints } from '../../api/postPoints';
import { useStudentContext } from './StudentLayout';

function Prizes() {
  const { student, refresh } = useStudentContext();
  const { prizes = [] } = getPrizes(student.pk);

  // const { trigger } = postPoints(student.pk);

  const onSubmit = async (e) => {
    e.preventDefault();

    const ix = e.target.elements.prize.value;
    const prize = prizes[ix];

    const formData = new FormData();
    // bedzie mozna wyslac kolekcje
    formData.set("object_id", prize.pk);
    formData.set("value", prize.value);
    formData.set("assigner", 2);
    formData.set("content_type", "prize");

    const data = await postPoints(student.pk, formData);
    e.target.reset();
    refresh(); // nie wiem czy nie powinno to byc na poziomie postPoints
  };

  return (
    <form action="#" method="post" onSubmit={onSubmit}>
      <h2>Przyznaj nagrodę</h2>
      <label>
        Wybierz:<br />
        <select name="prize">
          <option value="">--</option>
          {prizes?.map?.(({ pk, name, value }, index) => (
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

export default Prizes;
