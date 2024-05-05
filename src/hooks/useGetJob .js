import { useQuery } from "@tanstack/react-query";
import { getJob } from "../services/apiServices";
export default function useGetJob() {
  const { isLoading, data: job } = useQuery({
    queryKey: ["user"],
    queryFn: getJob,
  });
  return { job, isLoading };
}
