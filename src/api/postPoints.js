import useSWRMutation from "swr/mutation";
import fetcher from "./fetcher";
import getEndPointPath, { studentPoints } from "./endpoints";
// pk
// value
// assigner = user.pk
// student_id
// content_type = task|prize
/* const postPoints = (student_id) => {
  useSWRMutation(
    getEndPointPath("studentPoints", { student_id  }),
    async (url, { arg }) => {
      console.log(url, arg)
      return fetcher.post(url, arg)
    }
  );
} */


const postPoints = async (student_id, arg) => fetcher.post(getEndPointPath(studentPoints, { student_id }), arg)

export { postPoints };
