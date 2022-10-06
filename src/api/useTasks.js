import { ENDPOINT } from "../const/endpoints.const";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useTasks = (id) => {
  const URL = ENDPOINT.tasksId.replace("{:id}", id)
  const { data, error } = useSWR(URL, fetcher);

  console.log(data)

  return {
    tasks: data?.tasks,
    isTasksLoading: !error && (!data || !data.tasks),
    isTasksError: error,
  };
};

export { useTasks };