import { CircularProgress, Typography } from "@mui/material";
import Modal from "../Modal";

const PendingTxModal = ({ pendingTx }) => (
  <Modal open={pendingTx}>
    <CircularProgress />
    <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
      {pendingTx}
    </Typography>
  </Modal>
);

export default PendingTxModal;
