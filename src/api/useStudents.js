import { MOCK_ENDPOINTS } from "../const/endpoints.const";
import useSWR from "swr";

// adding SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useStudents = () => {
  const { data, error } = useSWR(MOCK_ENDPOINTS.studentsList, fetcher);

  return {
    students: data?.data,
    isStudentsLoading: !error && (!data || !data.data),
    isStudentsError: error,
  };
};

export { useStudents };
