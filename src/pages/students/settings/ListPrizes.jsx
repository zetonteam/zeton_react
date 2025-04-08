import { Link } from "react-router-dom";
import { getPrizes } from "../../../api/getPrizes";
import { useStudentContext } from "../StudentLayout";

function ListPrizes() {
  const { student } = useStudentContext();
  const { prizes } = getPrizes(student.pk);

  return (
    <>
      <ul>
        {prizes?.map((item, index) => (
          <li key={`prizes-${index}`}>
            {item.name} - punkty: {item.value}
            <button type="button" name="del-prizes" value={item.pk}>usuń</button>
            <Link to={""}>Edytuj</Link>
          </li>
        ))}
      </ul>

      <Link to={""}>Dodaj</Link>
    </>
  )
}

export default ListPrizes;