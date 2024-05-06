import { Box } from "@mui/material";
import CardJob from "../ui/card";
import { useSelector } from "react-redux";
import JobNotFound from "../ui/jobNotFound";
import SkeletonLoading from "../ui/Skeleton";
import useGetJob from "../../hooks/useGetJob ";
import { Suspense } from "react";

const CardLayout = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const filteredJobs = useSelector((state) => state.jobs.filteredJobs);
  const filters = useSelector((state) => state.jobs.filters);
  const isFilterEmpty = Object.values(filters).every((value) => value === null);
  const { isLoading } = useGetJob();

  return (
    <Box marginTop={10} sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Array.from({ length: 200 }).map((_, index) => (
            <SkeletonLoading key={index} />
          ))}
        </Box>
      ) : isFilterEmpty && filteredJobs.length === 0 ? (
        jobs.map((job) => <CardJob job={job} key={job.jdUid} />)
      ) : filteredJobs.length === 0 ? (
        <JobNotFound />
      ) : (
        filteredJobs.map((job) => <CardJob job={job} key={job.jdUid} />)
      )}
    </Box>
  );
};

export default CardLayout;
