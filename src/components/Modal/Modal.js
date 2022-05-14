import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
};

const Modal = ({ open, children, handleClose = () => {} }) => (
  <div>
    <MuiModal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </MuiModal>
  </div>
);

export default Modal;
