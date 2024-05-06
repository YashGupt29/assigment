import { Box } from "@mui/material";
import CardJob from "../ui/card";
import { useSelector } from "react-redux";
import JobNotFound from "../ui/jobNotFound";

const CardLayout = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const filteredJobs = useSelector((state) => state.jobs.filteredJobs);
  const filters = useSelector((state) => state.jobs.filters);
  const isFilterEmpty = Object.values(filters).every((value) => value === null);

  return (
    <Box marginTop={10} sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      {isFilterEmpty && filteredJobs.length === 0
        ? jobs.map((job) => <CardJob job={job} key={job.jdUid} />)
        : filteredJobs.map((job) => <CardJob job={job} key={job.jdUid} />)}
      {!isFilterEmpty && filteredJobs.length === 0 && <JobNotFound />}
    </Box>
  );
};

export default CardLayout;
