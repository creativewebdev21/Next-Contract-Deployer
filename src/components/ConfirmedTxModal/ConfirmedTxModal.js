import { Button, Typography } from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { useEffect, useState } from "react";
import openSeaService from "../../utils/openSeaService";
import Modal from "../Modal";

const ConfirmedTxModal = ({ tokenId, contractAddress }) => {
  const [{ wallet }] = useConnectWallet();
  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(contractAddress, tokenId);
  }, [contractAddress, tokenId]);

  const osLink = openSeaService.getTokenLink(
    wallet.chains[0].id,
    contractAddress,
    tokenId
  );

  return (
    <Modal open={open} handleClose={() => setOpen(false)}>
      <Typography variant="h3">NFT Minted!</Typography>
      <Button variant="contained" target="__blank" href={osLink}>
        View on OpenSea
      </Button>
    </Modal>
  );
};

export default ConfirmedTxModal;
