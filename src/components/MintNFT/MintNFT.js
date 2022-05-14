import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import { useMemo, useState } from "react";
import abi from "../ButtonCreateERC721/abi.json";
import ShareMintedNFT from "../ShareMintedNFT/ShareMintedNFT";

const MintNFT = ({ contractAddress }) => {
  const [{ wallet }] = useConnectWallet();
  const [recipient, setRecipient] = useState(wallet?.accounts?.[0]?.address);
  const [tokenURI, setTokenURI] = useState(
    "https://gateway.pinata.cloud/ipfs/QmZnFEAdfxGfVGTn9UoR2c66RD8VdzAeV9NuMWJsj1jD7b"
  );
  const [tokenId, setTokenId] = useState();

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
    setTokenId(receipt.events[0].args.tokenId.toString());
  };

  const mint = async () => {
    const tx = await contract.mint(recipient, tokenURI);
    const receipt = await tx.wait();
    handleReceipt(receipt);
  };

  console.log("CONTRACT ADDRESS", contractAddress);
  console.log("CONTRACT", contract);
  return (
    <Box>
      <h1>Mint an NFT on your smart contract</h1>
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
      <Button onClick={mint}>Mint NFT</Button>
      <ShareMintedNFT tokenId={tokenId} contractAddress={contractAddress} />
    </Box>
  );
};

export default MintNFT;
