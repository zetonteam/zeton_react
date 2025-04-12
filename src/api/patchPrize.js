import useSWRMutation from "swr/mutation";
import fetcher from "./fetcher";
import getEndPointPath, { studentPrize } from "./endpoints";

const patchPrize = async (params, arg) => fetcher.patch(getEndPointPath(studentPrize, params), arg)

export { patchPrize };
