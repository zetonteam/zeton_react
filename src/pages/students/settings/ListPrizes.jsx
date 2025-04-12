import { Link } from "react-router-dom";
import { getPrizes } from "../../../api/getPrizes";
import { useStudentContext } from "../StudentLayout";
import { postNewPrize } from "../../../api/postNewPrize";
import { deletePrize } from "../../../api/deletePrize";
import { patchPrize } from "../../../api/patchPrize";
import { useRef } from "react";

function ListPrizes() {
  const updateForm = useRef(null);
  const { student } = useStudentContext();
  const { prizes, refresh } = getPrizes(student.pk);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = await postNewPrize(student.pk, formData);

    e.target.reset();

    refresh();
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prize_id = e.target.elements.pk.value;

    formData.delete("pk");

    await patchPrize({
      student_id: student.pk,
      prize_id
    }, formData);

    e.target.reset();

    refresh();
  }

  const handlerDelete = async (e) => {
    e.stopPropagation();

    const target = e.target.closest("button");

    await deletePrize({
      student_id: student.pk,
      prize_id: target.value
    });

    refresh();
  }

  const handlerEdit = (e) => {
    e.stopPropagation();

    const target = e.target.closest("button");
    const form = updateForm.current;

    const itemPrize = prizes[target.value];

    for (const [key, value] of Object.entries(itemPrize)) {
      if (form?.elements?.[key]) {
        form.elements[key].value = value;
      }
    }
  }

  return (
    <>
      <h2>[Settings] Lista Nagród</h2>

      <ul>
        {prizes?.map((item, index) => (
          <li key={`prizes-${index}`}>
            {item.name} - punkty: {item.value}
            <button type="button" name="del-prizes" value={item.pk} onClick={handlerDelete}>usuń</button>
            <button type="button" value={index} onClick={handlerEdit}>Edytuj</button>
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


      <form action="#edit" onSubmit={handleSubmitUpdate} ref={updateForm} style={{ position: "fixed", inset: "10rem 1rem auto auto" }}>
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

export default ListPrizes;