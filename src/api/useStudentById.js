import { MOCK_ENDPOINTS } from "../const/endpoints.const";
import useSWR from "swr";

// adding SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useStudentById = (id) => {
  const { data, error } = useSWR(MOCK_ENDPOINTS.studentId, fetcher);

  return {
    student: data?.data.filter((item) => item.pk === id)[0],
    isStudentLoading: !error && (!data || !data.data),
    isStudentError: error,
  };
};

export { useStudentById };
