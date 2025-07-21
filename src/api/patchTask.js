import useSWRMutation from "swr/mutation";
import fetcher from "./fetcher";
import getEndPointPath, { studentTask } from "./endpoints";

const patchTask = async (params, arg) => fetcher.patch(getEndPointPath(studentTask, params), arg)

export { patchTask };
