import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonLoading = () => {
  return (
    <Skeleton
      sx={{
        height: 900,
        width: { xs: "95%", sm: "30%" }, // Adjust for different breakpoints
        position: "relative",
        top: -200,
        marginBottom: -40,
      }}
      animation="wave"
    />
  );
};

export default SkeletonLoading;
