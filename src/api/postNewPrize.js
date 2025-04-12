import useSWRMutation from "swr/mutation";
import fetcher from "./fetcher";
import getEndPointPath, { studentPrizes } from "./endpoints";

const postNewPrize = async (student_id, arg) => fetcher.post(getEndPointPath(studentPrizes, { student_id }), arg)

export { postNewPrize };
