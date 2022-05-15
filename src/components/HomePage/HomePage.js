import styles from "../../../styles/Home.module.css";
import MintNFT from "../MintNFT";
import { useState } from "react";
import { Box } from "@mui/system";
import CreateERC721 from "../CreateERC721";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [contractAddress, setContractAddress] = useState();

  return (
    <>
      <h1 className={styles.title}>Hyperstructures</h1>
      <p>for music nfts (on Polygon & ETH)</p>

      {contractAddress ? (
        <MintNFT contractAddress={contractAddress} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          p={3}
          gap={3}
        >
          <Typography variant="h5">
            Get started: create your ERC721 smart contract.
          </Typography>
          <CreateERC721 onDeployed={setContractAddress} />
        </Box>
      )}

      <div className={styles.grid}>
        <a
          href="https://faucet.polygon.technology/"
          className={styles.card}
          target="__blank"
        >
          <h2>Polygon Faucet &rarr;</h2>
          <p>Get free Mumbai MATIC.</p>
        </a>

        <a
          href="https://rinkebyfaucet.com/"
          target="__blank"
          className={styles.card}
        >
          <h2>Rinkeby Faucet</h2>
          <p>Get free Rinkeby ETH.</p>
        </a>

        <a
          href="https://github.com/SweetmanTech/next-contract-deployer"
          target="__blank"
          className={styles.card}
        >
          <h2>Open Source</h2>
          <p>View code on Github.</p>
        </a>

        <a
          href="https://jacob.energy/hyperstructures.html"
          target="__blank"
          className={styles.card}
        >
          <h2>Hyperstructures</h2>
          <p>Learn more.</p>
        </a>
      </div>
    </>
  );
};

export default HomePage;
