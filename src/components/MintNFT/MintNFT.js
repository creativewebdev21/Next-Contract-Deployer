import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import { useMemo, useState } from "react";
import abi from "../ButtonCreateERC721/abi.json";
import PendingTxModal from "../PendingTxModal";
import ConfirmedTxModal from "../ConfirmedTxModal";

const MintNFT = ({ contractAddress }) => {
  const [{ wallet }] = useConnectWallet();
  const [recipient, setRecipient] = useState(wallet?.accounts?.[0]?.address);
  const [tokenURI, setTokenURI] = useState(
    "https://gateway.pinata.cloud/ipfs/QmZnFEAdfxGfVGTn9UoR2c66RD8VdzAeV9NuMWJsj1jD7b"
  );
  const [tokenId, setTokenId] = useState();
  const [pendingTx, setPendingTx] = useState();

  const provider = new ethers.providers.Web3Provider(wallet?.provider);
  const signer = provider.getSigner();
  const contract = useMemo(
    () =>
      contractAddress
        ? new ethers.Contract(contractAddress, abi, signer)
        : false,
    [contractAddress]
  );

  const handleReceipt = (receipt) => {
    console.log("RECEIPT", receipt);
    console.log("RECEIPT", receipt.events[0].args.tokenId.toString());
    const newTokenId = receipt.events[0].args.tokenId.toString();
    setTokenId(newTokenId);
    setPendingTx(false);
  };

  const mint = async () => {
    setPendingTx("Sign transaction to Mint your NFT.");
    const tx = await contract.mint(recipient, tokenURI);
    setPendingTx("Minting NFT");
    const receipt = await tx.wait();
    handleReceipt(receipt);
  };

  console.log("CONTRACT ADDRESS", contractAddress);
  console.log("CONTRACT", contract);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" align="center">
        Created!
      </Typography>
      <h3>
        ERC721 contract (owned by{" "}
        <a
          target="__blank"
          href={`https://rinkeby.etherscan.io/address/${wallet?.accounts?.[0]?.address}`}
        >
          you
        </a>
        ):{" "}
        <a
          target="__blank"
          href={`https://rinkeby.etherscan.io/address/${contractAddress}`}
        >
          {contractAddress}
        </a>
      </h3>
      <h1>Mint an NFT on your smart contract</h1>
      <Box>
        <TextField
          label="NFT recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <TextField
          label="tokenURI"
          value={tokenURI}
          onChange={(e) => setTokenURI(e.target.value)}
        />
      </Box>

      <Button onClick={mint}>Mint NFT</Button>

      <ConfirmedTxModal tokenId={tokenId} contractAddress={contractAddress} />
      <PendingTxModal pendingTx={pendingTx} />
    </Box>
  );
};

export default MintNFT;
