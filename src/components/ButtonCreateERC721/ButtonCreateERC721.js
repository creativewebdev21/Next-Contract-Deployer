import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { ContractFactory, ethers } from "ethers";
import abi from "./abi.json";
import bytecode from "./bytecode.json";

const ButtonCreateERC721 = () => {
  const [{ wallet }, connect] = useConnectWallet();
  const [loading, setLoading] = useState(false);

  const deployContract = async () => {
    if (!wallet) {
      connect();
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Deploy the contract
    const factory = new ContractFactory(abi, bytecode, signer);
    const price = ethers.utils.formatUnits(
      await provider.getGasPrice(),
      "gwei"
    );
    const options = {
      gasLimit: 10000000,
      gasPrice: ethers.utils.parseUnits(price, "gwei"),
    };
    const contract = await factory.deploy(options);
    await contract.deployed();
  };

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      await deployContract();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          variant="outlined"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {wallet ? "Create Smart Contract" : "Connect Wallet"}
        </Button>
      )}
    </>
  );
};

export default ButtonCreateERC721;
