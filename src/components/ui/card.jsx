import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { Hourglass, Zap } from "lucide-react";
import ViewJob from "./dialog";
import Logo from "../../assets/avatar.png";
import Logo2 from "../../assets/avatar2.webp";
// eslint-disable-next-line react/prop-types
const CardJob = ({ job }) => {
  const {
    companyName = "",
    logoUrl = "",
    jobRole = "",
    minExp = 0,
    location = "",
    jobDetailsFromCompany = "",
    maxJdSalary = 0,
    minJdSalary = 0,
  } = job;
  // eslint-disable-next-line react/prop-types
  const trimmedDetails = jobDetailsFromCompany
    ?.split(" ")
    .slice(0, 80)
    .join(" ");
  return (
    <Card sx={{ width: { xs: "95%", sm: "30%" } }} className="dark-mode">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: 1,
            borderRadius: 100,
            width: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0.5,
            color: "gray",
          }}
        >
          <Hourglass />
          <Typography sx={{ fontSize: 11 }}> Posted 30 days ago</Typography>
        </Box>
        <Box sx={{ marginTop: 2, display: "flex", gap: 1 }}>
          <img src={logoUrl} alt="logo" height={50} width={50} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography sx={{ color: "gray" }}>{companyName}</Typography>
            <Typography>{jobRole}</Typography>
            <Typography>{location}</Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <Typography>
            Estimated Salary: ${minJdSalary ? `${minJdSalary}-` : `0-`}
            {maxJdSalary} LPA✅
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography
            sx={{ fontWeight: 530, fontSize: 18, textAlign: "start" }}
          >
            About Company:
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(128, 128, 128, 0.5), rgba(255, 255, 255, 0))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {trimmedDetails} {/* Display only the first 80 words */}
          </Typography>

          <ViewJob jobDetailsFromCompany={jobDetailsFromCompany} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            sx={{
              color: "gray",
              fontWeight: 500,
              fontStyle: "-moz-initial",
            }}
          >
            Minimum Experience
          </Typography>
          <Typography sx={{ fontWeight: 500 }}>{minExp} years</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#54EFC3",
              color: "black",
              fontWeight: 600,
              textTransform: "none",
              padding: 1.4,
              width: "90%",
              fontSize: 20,
              borderRadius: 3,
            }}
          >
            <Link
              href={job?.jdLink}
              color="inherit"
              sx={{ textDecoration: "none" }}
              target="_blank"
            >
              <Zap fill="yellow" color="orange" />
              Easy Apply
            </Link>
          </Button>
          <Button
            sx={{
              backgroundColor: "#4943DA",
              color: "black",
              fontWeight: 600,
              textTransform: "none",
              padding: 1.4,
              width: "90%",
              fontSize: 20,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={Logo2}
                sx={{ width: 40, height: 40, filter: "blur(2px)" }}
              />
              <Avatar
                alt="Remy Sharp"
                src={Logo}
                sx={{ width: 40, height: 40, filter: "blur(2px)" }}
              />
              <Typography sx={{ color: "white", marginLeft: 3 }}>
                Unlock referral asks
              </Typography>
            </Box>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardJob;
