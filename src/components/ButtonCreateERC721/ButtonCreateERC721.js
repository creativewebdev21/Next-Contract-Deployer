import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { ContractFactory, ethers } from "ethers";
import abi from "./abi.json";
import bytecode from "./bytecode.json";
import PendingTxModal from "../PendingTxModal";

const ButtonCreateERC721 = ({ onDeployed }) => {
  const [{ wallet }, connect] = useConnectWallet();
  const [pendingTx, setPendingTx] = useState(false);

  const deployContract = async () => {
    if (!wallet) {
      connect();
      return;
    }
    setPendingTx("Sign transaction deploying ERC721 smart contract.");

    const provider = new ethers.providers.Web3Provider(wallet?.provider);
    const signer = provider.getSigner();

    // Deploy the contract
    const factory = new ContractFactory(abi, bytecode, signer);

    const options = {
      gasLimit: 3215060,
    };
    const contract = await factory.deploy("myName", "SMBL", options);
    setPendingTx("Deploying creator ERC721 contract.");
    const receipt = await contract.deployed();
    console.log("RECEIPT", receipt);
    onDeployed?.(receipt.address);
  };

  const handleButtonClick = async () => {
    try {
      await deployContract();
    } catch (err) {
      console.error(err);
    }
    setPendingTx(false);
  };

  return (
    <>
      {pendingTx ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          onClick={handleButtonClick}
          disabled={pendingTx}
        >
          {wallet ? "Create Smart Contract" : "Connect Wallet"}
        </Button>
      )}
      <PendingTxModal pendingTx={pendingTx} />
    </>
  );
};

export default ButtonCreateERC721;
