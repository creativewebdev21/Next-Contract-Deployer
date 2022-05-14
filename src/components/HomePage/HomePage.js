import ButtonCreateERC721 from "../ButtonCreateERC721";
import styles from "../../../styles/Home.module.css";
import MintNFT from "../MintNFT";
import { useState } from "react";

const HomePage = () => {
  const [contractAddress, setContractAddress] = useState();

  return (
    <>
      <h1 className={styles.title}>Hyperstructures</h1>
      <p>(on Polygon & ETH)</p>

      <p className={styles.description}>
        Get started by deploying your own smart contract.
      </p>

      {contractAddress ? (
        <MintNFT contractAddress={contractAddress} />
      ) : (
        <ButtonCreateERC721 onDeployed={setContractAddress} />
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
