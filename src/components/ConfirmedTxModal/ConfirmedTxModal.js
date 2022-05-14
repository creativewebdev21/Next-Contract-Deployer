import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Modal from "../Modal";

const ConfirmedTxModal = ({ tokenId, contractAddress }) => {
  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(contractAddress, tokenId);
  }, [contractAddress, tokenId]);

  return (
    <Modal open={open} handleClose={() => setOpen(false)}>
      <Typography variant="h3">NFT Minted!</Typography>
      <Button
        variant="contained"
        target="__blank"
        href={`https://testnets.opensea.io/assets/${contractAddress}/${tokenId}`}
      >
        View on OpenSea
      </Button>
    </Modal>
  );
};

export default ConfirmedTxModal;
