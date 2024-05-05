import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ViewJob({ jobDetailsFromCompany }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        sx={{ textTransform: "none", marginTop: -6, fontWeight: 500 }}
        onClick={handleClickOpen}
      >
        View Job
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            textAlign: "center",
            fontWeight: "700",
            fontSize: 28,
          }}
          id="customized-dialog-title"
        >
          Job Description
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        ></IconButton>
        <DialogContent>
          <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
            About Company:
          </Typography>
          <Typography gutterBottom>
            NodeFlair is a Career Transparency platform with verified career
            data - salaries, culture, benefits, & more. Our mission is to help
            Tech Talents make better career decisions.
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
            About Role:
          </Typography>
          <Typography gutterBottom>{jobDetailsFromCompany}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
