import { Button } from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { ContractFactory, ethers } from "ethers";
import abi from "./abi.json";
import bytecode from "./bytecode.json";

const ButtonCreateERC721 = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  console.log("WALLET", wallet);

  const deployContract = async () => {
    if (!wallet) {
      connect();
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Deploy the contract
    const factory = new ContractFactory(abi, bytecode, signer);
    console.log("FACTORY", factory);
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
    console.log(`Deployment successful! Contract Address: ${contract.address}`);
  };

  return <Button onClick={deployContract}>Create ERC721 Contract</Button>;
};

export default ButtonCreateERC721;
