import { Box } from "@mui/material";
import CardJob from "../ui/card";
import { useSelector } from "react-redux";

const CardLayout = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  return (
    <Box marginTop={10} sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      {jobs?.map((job) => {
        return <CardJob job={job} key={job.jdUid} />;
      })}
    </Box>
  );
};

export default CardLayout;
